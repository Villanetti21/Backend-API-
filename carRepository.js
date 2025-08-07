import { connection } from "./connection.js";

export async function listarCarros() {
  const comando = `
   select * 
   from car`;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function inserirCarro(carro) {
  const comando = `
   insert into car (ds_marca, ds_modelo, nr_ano, vl_preco, img_carro, dt_inclusao)
    values (?, ?, ?, ?, ?, ?)`;

  let [resposta] = await connection.query(comando, [
    carro.ds_marca, carro.ds_modelo, carro.nr_ano, carro.vl_preco, carro.img_carro, carro.dt_inclusao ]);

  return resposta.insertId;
}

