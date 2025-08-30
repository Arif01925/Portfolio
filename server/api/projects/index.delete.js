import { readFile, writeFile, rm } from 'fs/promises';
import { join } from 'path';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const projectId = body.id;

    const filePath = join('server/data/projects.json');
    const projectsData = JSON.parse(await readFile(filePath, 'utf-8'));
    const projectToDelete = projectsData.find(p => p.id === projectId);

    if (!projectToDelete) {
      throw new Error('Project not found');
    }

    // Update the JSON data (remove the project)
    const updatedData = projectsData.filter(p => p.id !== projectId);
    await writeFile(filePath, JSON.stringify(updatedData, null, 2));

    // Remove image folder
    const folderName = projectToDelete.title.toLowerCase().replace(/\s+/g, '-');
    const projectFolder = join('public/images/projects', folderName);
    await rm(projectFolder, { recursive: true, force: true });

    return { success: true };
  } catch (error) {
    console.error('[PROJECT_DELETE_ERROR]', error);
    return sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Failed to delete project',
    }));
  }
});
