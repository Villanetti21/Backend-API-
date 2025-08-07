import { connection } from './connection.js';

export async function getPizzas() {
  const comando = `
  select * 
  from pizzas`;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function insertPizza(pizza) {
  const comando = `
   insert into pizzas (nome, preco, vegetariana, categoria, tamanho, ingredientes) 
      values (?, ?, ?, ?, ?, ?)`;


  let [resposta] = await connection.query(comando, [
    pizza.nome, pizza.preco, pizza.vegetariana, pizza.categoria, pizza.tamanho, pizza.ingredientes]);

  return resposta.insertId;
}
