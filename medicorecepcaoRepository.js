import { connection } from "./connection.js";

export async function getPacientes() {
  const comando = `
    select *
    from medicorecepcao`;

  
  let [linhas] = await connection.query(comando);
  return linhas;
}

export async function insertPaciente(dado) {
  const comando = `
    insert into medicorecepcao (nm_localidade, nm_paciente, dt_nascimento, sx_paciente, bt_emergencia, bt_prontosocorro, bt_preferencial, dt_entrada, bt_alta, nm_convenio, med_especialista)
  values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;


  let [resposta] = await connection.query(comando, [
    dado.nm_localidade, dado.nm_paciente, dado.dt_nascimento, dado.sx_paciente, dado.bt_emergencia, dado.bt_prontosocorro, dado.bt_preferencial, dado.dt_entrada, dado.bt_alta, dado.nm_convenio, dado.med_especialista]);
  return resposta.insertId;
}

