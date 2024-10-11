import { sql } from './db.js'

sql`
  CREATE TABLE livros (
      id text PRIMARY KEY,
      titulo character varying(255),
      paginas character varying(255),
      autor character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})