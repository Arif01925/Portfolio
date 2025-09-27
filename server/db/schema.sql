-- Schema for Portfolio app
-- Run: mysql -u USER -p -h HOST DBNAME < server/db/schema.sql

CREATE TABLE IF NOT EXISTS project_types (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS projects (
  id BIGINT PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  description TEXT,
  `type` BIGINT,
  date DATETIME,
  thumbnail VARCHAR(1000),
  FOREIGN KEY (`type`) REFERENCES project_types(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS project_images (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  project_id BIGINT NOT NULL,
  url VARCHAR(1000) NOT NULL,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS blogs (
  id BIGINT PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  excerpt TEXT,
  content LONGTEXT,
  category VARCHAR(255),
  date DATETIME,
  thumbnail VARCHAR(1000),
  slug VARCHAR(500) UNIQUE
);
