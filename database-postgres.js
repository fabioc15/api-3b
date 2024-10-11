import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listlivros() {
    const livro = await sql`select * from livros`;
    return livro;
  }

  async createlivros (livro) {
    const id = randomUUID();
    console.log('id', id);
    const titulo = livro.titulo;
    const paginas = livro.paginas;
    const autor = livro.autor;
    
    await sql`insert into livros (id, titulo, paginas, autor)
    values (${id}, ${titulo}, ${paginas}, ${autor})`
  }

  async updatelivros(id, livro) {
    const titulo = livro.titulo;
    const paginas = livro.paginas;
    const autor = livro.autor;

    await sql`update livros set 
        titulo = ${titulo},
        paginas = ${paginas},
        autor = ${autor}
        where id = ${id}
    `
  }

  async deletelivros(id) {
    await sql`delete from livros where id = ${id}`
  }

}