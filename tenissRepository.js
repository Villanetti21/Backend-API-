import { connection } from './connection.js';

export async function getTenis() {
  const comando = `
 select *  
 from teniss`;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function insertTenis(tenis) {
  const comando = `
    insert into teniss ( nome, marca, cor, tamanho, preco, categoria, estoque) 
      values (?, ?, ?, ?, ?, ?, ?)`;


  let [resposta] = await connection.query(comando, [
    tenis.nome, tenis.marca, tenis.cor, tenis.tamanho, tenis.preco, tenis.categoria, tenis.estoque]);

  return resposta.insertId;
}
