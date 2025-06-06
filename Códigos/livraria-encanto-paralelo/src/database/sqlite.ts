import { Database } from 'sqlite3';
import { open } from 'sqlite';

const dbPromise = open({
  filename: './database.sqlite',
  driver: Database
});

export const getDb = async () => {
  return dbPromise;
};

export const initializeDatabase = async () => {
  const db = await getDb();
  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS tabela1 (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      data TEXT NOT NULL
    );
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS tabela2 (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      info TEXT NOT NULL
    );
  `);
};