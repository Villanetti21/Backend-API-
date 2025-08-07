import { connection } from './connection.js';

export async function getRoupas() {
  const comando = `
  select * 
  from roupa`;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function insertRoupa(roupa) {
  const comando = `
    insert into roupa ( nm_nome, ql_marca, ql_preco, ql_loja, bt_boaqualidade) 
    values (?, ?, ?, ?, ?)`;
    
  
  let [resposta] = await connection.query(comando, [
    roupa.nm_nome, roupa.ql_marca, roupa.ql_preco, roupa.ql_loja, roupa.bt_boaqualidade]);

  return resposta.insertId;
}
