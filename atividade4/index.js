/*ATIVIDADE 4       ALUNO: DANIEL SOUZA - UC23100767 */


const express = require("express");
const calculadora = require('./util/calculadora'); // require para chamar as funções da calculadora
const app = express();

app.get('/', function(req, res){
  res.send('CALCULADORA - página inicial');
})

app.get('/somar/:a/:b', function(req, res){
  let a = req.params.a;
  let b = req.params.b;
  let soma = calculadora.somar(a, b);
  
  res.send("" + soma);
})

app.get('/subtrair/:a/:b', function(req, res){
  let a = req.params.a;
  let b = req.params.b;
  let subtracao = calculadora.subtrair(a,b);
  
  res.send("" + subtracao);
})

app.get('/multiplicar/:a/:b', function(req, res){
  let a = req.params.a;
  let b = req.params.b;
  let multiplicacao = calculadora.multiplicar(a,b);
  
  res.send("" + multiplicacao);
})

app.get('/dividir/:a/:b', function(req, res){
  let a = req.params.a;
  let b = req.params.b;
  let divisao = calculadora.dividir(a,b);
  
  res.send("" + divisao);
})


// Porta da rede 5001
const PORT = 5001;
app.listen(PORT, function(){
  console.log("app rodando na porta " + PORT);
})