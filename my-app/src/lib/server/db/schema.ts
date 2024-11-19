// Import potřebných modulů
import { mysqlTable, serial, text, int,varchar,decimal } from 'drizzle-orm/mysql-core';

// Definice tabulky `user`
export const user = mysqlTable('user', {

  // Sloupec `id`, automaticky inkrementovaný primární klíč
  id: serial('id').primaryKey(),

  // Sloupec `age`, celé číslo představující věk uživatele
  age: int('age')
});

  
