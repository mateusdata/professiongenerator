import React, { useState } from "react";
import Footer from "../footer/App";
import Header from "../header/app";
import "./style.css";

let nomes = [
  "Mateus ",
  "Felipe ",
  "Samuel ",
  "Angelo ",
  "Lucas ",
  "Anderson "
];
let proficoes = [
  "Programador JavaScript",
  "Programador python",
  "Programador  React JavaScript",
  "Programador Java",
  "Programador C#",
  "Programador Dart",
];
let emogin = [
  "😌",
  "😂",
  "😎",
  "😍",
  "😏",
  "😱"
];


export default function PaginaInicial() {

  const [numeroAleatorio, setNumeroAleatorio] = useState("😌"); // variavel stack hook
  const [clicou, setClicou] = useState(false)

  let novoNumeroNomes = Math.floor(Math.random() * (6) + 1);
  let novoNumeroProficoes = Math.floor(Math.random() * (6) + 1);
  let novoNumeroEmogin = Math.floor(Math.random() * (6) + 1);

  function gerarNumero() {
    let novoNumeroNomes = Math.floor(Math.random() * (6) + 1);
    let novoNumeroProficoes = Math.floor(Math.random() * (6) + 1);
    let novoNumeroEmogin = Math.floor(Math.random() * (6) + 1);


    /* Criando a descrição das linguagens

    let sobreLinguagens = [
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
      "Dart é uma linguagem de script voltada à web desenvolvida pela Google. Ela foi lançada na GOTO Conference 2011, que aconteceu de 10 a 11 de outubro de 2011 em Aarhus, na Dinamarca",
      "ava é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems.",
      "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais",
      "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte",
      "C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET."
    ];*/
    setNumeroAleatorio(nomes[novoNumeroNomes % nomes.length]
      + proficoes[novoNumeroProficoes % proficoes.length] +
      emogin[novoNumeroEmogin % emogin.length]);
  }

  const onClickHandler = () => {
    gerarNumero()
    /*{ proficoes[0] === "Programador JavaScript" ? <Footer /> : null }
    { proficoes[0] === "Programador JavaScript" ? <Header /> : null }*/

  }


  return (

    <div className="conteudo-centralizado">
      <h3>Nomes aleatório</h3>
      <h1>{numeroAleatorio} </h1>


      <div className="area-botao">

        <label>
          click no botão para gerar nomes e profições:
        </label>
        div
        <button onClick={onClickHandler}>
          Gerar nomes


        </button>
      </div>



    </div>

  )
}

