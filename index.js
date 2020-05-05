const inquirer = require("inquirer");
//? Sistema especialista
const nools = require("nools");
const flow = nools.compile(require.resolve("./classe.nools"));
const Classe = flow.getDefined("Classe");

function awnser(escolha) {
  const session = flow.getSession(escolha);
  session.match().then(() => {
    if (!session.dispose())
      console.log(
        "Nenhuma raça compatível com as características selecionadas!"
      );
    else session.dispose();
  });
}

async function questions() {
  var escolha = new Classe();
  var questions = [
    {
      type: "list",
      name: "altura",
      message: "Qual a altura desejada? (Metros)",
      choices: [
        1.0,
        1.1,
        1.2,
        1.3,
        1.4,
        1.5,
        1.6,
        1.7,
        1.8,
        1.9,
        2.0,
        2.1,
        2.2,
        2.3,
        2.4,
      ],
    },
    {
      type: "list",
      name: "racaMistica",
      message: "Seria uma raça mística ? ",
      choices: ["Sim", "Não"],
    },
    {
      type: "list",
      name: "ordemOuForca",
      message: "Você se identifica mais pela Ordem ou Força ? ",
      choices: ["Ordem", "Força"],
    },
    {
      type: "list",
      name: "fisico",
      message: "Qual o físico da sua raça ?",
      choices: ["Fraco", "Normal", "Forte"],
    },

    {
      type: "list",
      name: "aderecos",
      message: "Qual adereço sua raça possui ? ",
      choices: ["Piercing", "Tatuagem", "Chifre", "Nenhum"],
    },

    {
      type: "list",
      name: "pelos",
      message: "Qual a localização dos pelos de sua raça ? ",
      choices: ["Facial", "Corporal", "Completo", "Nenhum"],
    },
  ];

  inquirer
    .prompt(questions)
    .then((value) => {
      escolha.altura = value["altura"];
      escolha.racaMistica = value["racaMistica"];
      escolha.ordemOuForca = value["ordemOuForca"];
      escolha.fisico = value["fisico"];
      escolha.aderecos = value["aderecos"];
      escolha.pelos = value["pelos"];
    })
    .finally(() => {
      awnser(escolha);
    });
}

async function run() {
  console.log("Selecionando sua raça para o jogo World of Warcraft: ");
  questions();
}

run();
