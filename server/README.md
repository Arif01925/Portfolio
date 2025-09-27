MySQL integration for Portfolio

Steps to enable MySQL in production:

1. Create a MySQL database (e.g. `portfolio`).

2. Run the schema to create tables:

   mysql -u USER -p -h HOST DBNAME < server/db/schema.sql

3. Copy `.env.example` to `.env` in the project root and set the DB credentials:

   DB_HOST=...
   DB_PORT=3306
   DB_USER=...
   DB_PASSWORD=...
   DB_NAME=portfolio

4. Deploy: the server API endpoints will try to use MySQL. If the DB is not available, endpoints fall back to the local JSON files in `server/data` so the site still runs.

Notes and considerations:
- The code inserts/updates rows using `id` generated with Date.now() for compatibility with existing JSON records. You can adapt the code to rely on AUTO_INCREMENT ids if preferred.
- For images, files are still stored under `public/images/*` as before.
- Tables created by `server/db/schema.sql`: `project_types`, `projects`, `project_images`, `blogs`.
