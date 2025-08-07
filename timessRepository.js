import { connection } from "./connection.js";

export async function getTimes() {
  const comando = `
    select *
     from timess`;

     
  let [linhas] = await connection.query(comando);
  return linhas;
}

export async function insertTime(dado) {
  const comando = `
  insert into timess (nm_time, bt_estadio, bt_mundial, nm_mascote, vl_ingresso, qtd_jogadores )
    values (?, ?, ?, ?, ?, ?)`;


  let [resposta] = await connection.query(comando, [
    dado.nm_time, dado.bt_estadio, dado.bt_mundial, dado.nm_mascote , dado.vl_ingresso, dado.qtd_jogadores]);
  return resposta.insertId;
}
