import { connection } from './connection.js';

export async function getEstados() {
  const comando = `
    select *
    from estadosbrs`;

  let [registros] = await connection.query(comando);
  return registros;
}

export async function insertEstado(estado) {
  const comando = `
   insert into estadosbrs ( nm_estado, nm_região, nmr_habitantes, nm_capital, idd_estados, nmr_municipios, bt_desenvolvido, bt_turisticos, pt_turisticos)
    values (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  let [resposta] = await connection.query(comando, [
    estado.nm_estado, estado.nm_região, estado.nmr_habitantes, estado.nm_capital, estado.idd_estados, estado.nmr_municipios, estado.bt_desenvolvido, estado.bt_turisticos, estado.pt_turisticos]);

  return resposta.insertId;
}
