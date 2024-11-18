// Import potřebných modulů
import { mysqlTable, serial, text, int,varchar,decimal } from 'drizzle-orm/mysql-core';

// Definice tabulky `user`
export const user = mysqlTable('user', {

  // Sloupec `id`, automaticky inkrementovaný primární klíč
  id: serial('id').primaryKey(),

  // Sloupec `age`, celé číslo představující věk uživatele
  age: int('age')
});

// Definice tabulky `product`
export const product = mysqlTable('product', {

	// Sloupec `id`, automaticky inkrementovaný primární klíč
	id: serial('id').primaryKey(),
  
	// Sloupec `name`, text představující název produktu
	name: varchar('name', 255),
  
	// Sloupec `price`, desetinné číslo představující cenu produktu
	price: decimal('price', 10, 2)
  });
  
