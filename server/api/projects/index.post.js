import { writeFile, readFile, mkdir } from 'fs/promises';
import { join, basename } from 'path';
import formidable from 'formidable';

export default defineEventHandler(async (event) => {
  const uploadDir = join(process.cwd(), 'public', 'images', 'tmp');

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    multiples: true,
  });

  try {
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(event.req, (err, fields, files) => {
        if (err) return reject(err);
        resolve([fields, files]);
      });
    });

    const title = fields.title?.[0] || '';
    const description = fields.description?.[0] || '';
    const type = fields.type?.[0] || '';
    const date = fields.date?.[0] || '';

    if (typeof title !== 'string') throw new Error('Invalid title format');

    const folderName = title.toLowerCase().replace(/\s+/g, '-');
    const projectFolder = join(process.cwd(), 'public', 'images', 'projects', folderName);

    await mkdir(projectFolder, { recursive: true });

    // Handle thumbnail
    const thumbnailPath = files.thumbnail?.[0]?.filepath;
    const thumbnailName = basename(thumbnailPath);
    const newThumbPath = join(projectFolder, thumbnailName);
    await writeFile(newThumbPath, await readFile(thumbnailPath));
    const thumbnail = `/images/projects/${folderName}/${thumbnailName}`;

    // Handle gallery images
    const galleryImages = [];
    for (const img of files.images || []) {
      const imgName = basename(img.filepath);
      const newPath = join(projectFolder, imgName);
      await writeFile(newPath, await readFile(img.filepath));
      galleryImages.push(`/images/projects/${folderName}/${imgName}`);
    }

    // Save project data
    const dbPath = join(process.cwd(), 'server', 'data', 'projects.json');
    const existing = JSON.parse(await readFile(dbPath, 'utf-8'));

    const newProject = {
      id: Date.now(),
      title,
      description,
      type,
      date,
      thumbnail,
      images: galleryImages,
    };

    existing.push(newProject);
    await writeFile(dbPath, JSON.stringify(existing, null, 2));

    return { success: true, project: newProject };
  } catch (err) {
    console.error('[PROJECT_SAVE_ERROR]', err.message);
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Failed to save project' }));
  }
});
