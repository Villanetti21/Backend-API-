import { connection } from './connection.js';

export async function getFilmes() {
  const comando = `
  select * 
  from filmess`;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function insertFilme(filme) {
  const comando = `
   insert into  filmess (
      titulo, ano_lancamento, genero, duracao_minutos, diretor, avaliacao) 
      values (?, ?, ?, ?, ?, ?)
  `;

  let [resposta] = await connection.query(comando, [
    filme.titulo, filme.ano_lancamento, filme.genero, filme.duracao_minutos, filme.diretor, filme.avaliacao]);

  return resposta.insertId;
}
