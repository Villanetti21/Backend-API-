import { listarCarros, inserirCarro } from "./carRepository.js"
import { getTimes, insertTime } from './timessRepository.js';
import { getPacientes, insertPaciente } from './medicorecepcaoRepository.js';
import { getPraias, insertPraia } from './praiasRepository.js';
import { getEstados, insertEstado } from './estadosbrsRepository.js';
import { getRoupas, insertRoupa } from './roupaRepository.js';
import { getFilmes, insertFilme } from './filmessRepository.js';
import { getPizzas, insertPizza } from './pizzasRepository.js';
import { getAnimes, insertAnime } from './animesRepository.js';
import { getTenis, insertTenis } from './tenissRepository.js';


import express from 'express'
const api = express();
api.use(express.json());



api.get('/car', async (req, resp) => {
  let lista = await listarCarros();
  resp.send(lista);
});


api.post('/car', async (req, resp) => {
  let carro = req.body;
  let id = await inserirCarro(carro);

  resp.send({ novoId: id });
});


api.get('/timess', async (req, resp) => {
  let lista = await getTimes();
  resp.send(lista);
});


api.post('/timess', async (req, resp) => {
  let dados = req.body;
  let id = await insertTime(dados);
  resp.send({ novoId: id });
});




api.get('/medicorecepcao', async (req, resp) => {
  let lista = await getPacientes();
  resp.send(lista);
});


api.post('/medicorecepcao', async (req, resp) => {
  let dados = req.body;
  let id = await insertPaciente(dados);
  resp.send({ novoId: id });
});




api.get('/praias', async (req, resp) => {
  let lista = await getPraias();
  resp.send(lista);
});


api.post('/praias', async (req, resp) => {
  let dados = req.body;
  let id = await insertPraia(dados);
  resp.send({ novoId: id });
});




api.get('/estadosbrs', async (req, resp) => {
  let lista = await getEstados();
  resp.send(lista);
});


api.post('/estadosbrs', async (req, resp) => {
  let dados = req.body;
  let id = await insertEstado(dados);
  resp.send({ novoId: id });
});




api.get('/roupa', async (req, resp) => {
  let lista = await getRoupas();
  resp.send(lista);
});


api.post('/roupa', async (req, resp) => {
  let dados = req.body;
  let id = await insertRoupa(dados);
  resp.send({ novoId: id });
});




api.get('/filmess', async (req, resp) => {
  let lista = await getFilmes();
  resp.send(lista);
});


api.post('/filmess', async (req, resp) => {
  let dados = req.body;
  let id = await insertFilme(dados);
  resp.send({ novoId: id });
});




api.get('/pizzas', async (req, resp) => {
  let lista = await getPizzas();
  resp.send(lista);
});


api.post('/pizzas', async (req, resp) => {
  let dados = req.body;
  let id = await insertPizza(dados);
  resp.send({ novoId: id });
});




api.get('/animes', async (req, resp) => {
  let lista = await getAnimes();
  resp.send(lista);
});


api.post('/animes', async (req, resp) => {
  let dados = req.body;
  let id = await insertAnime(dados);
  resp.send({ novoId: id });
});




api.get('/teniss', async (req, resp) => {
  let lista = await getTenis();
  resp.send(lista);
});


api.post('/teniss', async (req, resp) => {
  let dados = req.body;
  let id = await insertTenis(dados);
  resp.send({ novoId: id });
});





api.listen(5010, () => console.log(': API subiu com sucesso!!!!'));