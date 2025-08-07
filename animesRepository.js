import { connection } from './connection.js';

export async function getAnimes() {
  const comando = `
  select * 
  from animes`;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function insertAnime(anime) {
  const comando = `
    insert into animes (nome, genero, episodios, ano_lancamento, estudio, avaliacao) 
      values (?, ?, ?, ?, ?, ?)`;
      

  let [resposta] = await connection.query(comando, [
    anime.nome, anime.genero, anime.episodios, anime.ano_lancamento, anime.estudio, anime.avaliacao]);

  return resposta.insertId;
}
