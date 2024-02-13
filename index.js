const perguntas = [
  {
    pergunta: "Qual é o ano de fundação do Sport Club Corinthians Paulista?",
    respostas: [
      "1910",
      "1908",
      "1912"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o estádio principal do Corinthians?",
    respostas: [
      "Estádio Morumbi",
      "Arena Corinthians",
      "Estádio do Pacaembu"
    ],
    correta: 1
  },
  {
    pergunta: "Quantos títulos brasileiros o Corinthians conquistou até 2022?",
    respostas: [
      "6",
      "7",
      "8"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o apelido dado à torcida do Corinthians?",
    respostas: [
      "Furacão",
      "Fiel",
      "Força"
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o maior artilheiro da história do Corinthians?",
    respostas: [
      "Sócrates",
      "Ronaldo Fenômeno",
      "Marcelinho Carioca"
    ],
    correta: 2
  },
  {
    pergunta: "Quantos títulos da Copa Libertadores o Corinthians possui até 2022?",
    respostas: [
      "1",
      "2",
      "3"
    ],
    correta: 0
  },
  {
    pergunta: "Qual técnico comandou o Corinthians na conquista do Mundial de Clubes FIFA em 2012?",
    respostas: [
      "Tite",
      "Mano Menezes",
      "Fábio Carille"
    ],
    correta: 0
  },
  {
    pergunta: "Qual jogador do Corinthians ficou conhecido como 'O Doutor'?",
    respostas: [
      "Sócrates",
      "Rivellino",
      "Neto"
    ],
    correta: 0
  },
  {
    pergunta: "Em que ano o Corinthians ganhou sua primeira Copa do Brasil?",
    respostas: [
      "1990",
      "1994",
      "1998"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o maior rival do Corinthians?",
    respostas: [
      "Santos",
      "Palmeiras",
      "São Paulo"
    ],
    correta: 1
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laços de repetição
for(const item of perguntas){ 
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta 
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
  const respostaSelecionada = parseInt(event.target.value)
  const estaCorreta = respostaSelecionada === item.correta
  
  corretas.delete(item)
  if (estaCorreta) {
    corretas.add(item)
  }
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
}


    quizItem.querySelector('dl').appendChild(dt)
  }
   

   
   //remove os clones
   quizItem.querySelector('dl dt').remove()
 
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
  

