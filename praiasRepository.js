import { connection } from './connection.js';

export async function getPraias() {
  const comando = `
    select *
     from praias`;


  let [registros] = await connection.query(comando);
  return registros;
}

export async function insertPraia(praia) {
  const comando = `
    insert into praias ( nm_praia, bt_agualimpa, bt_lojas, bt_parques, qtd_turistas, nm_regiao, bt_ondasfortes, tp_areia, bt_atracoesturisticas, nm_atracoesturisticas, bt_especiesmarinhas, tp_acessos, ocrr_acidentes, ql_largura, bt_estacionamento)
   values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;



  let [resposta] = await connection.query(comando, [
    praia.nm_praia, praia.bt_agualimpa, praia.bt_lojas, praia.bt_parques, praia.qtd_turistas, praia.nm_regiao, praia.bt_ondasfortes, praia.tp_areia, praia.bt_atracoesturisticas, praia.nm_atracoesturisticas, praia.bt_especiesmarinhas, praia.tp_acessos, praia.ocrr_acidentes, praia.ql_largura, praia.bt_estacionamento]);

  return resposta.insertId;
}
