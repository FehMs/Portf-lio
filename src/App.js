import React from "react";
import iconInicio from './assets/icon-image.png'
import fotoimg from './assets/fotoimg.JPG'
import projetoUm from './assets/firstproject.png'
import projetoDois from './assets/projetodois.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faJs, faJava, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="header-container">
        <div className="header-logo">
          <h3>Felipe Morais</h3>
        </div>
        <div className="header-nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#tecnologia">Tecnologias</a>
          <a href="#projetos">Projetos</a>
        </div>
      </header>
      <hr className="steste"/>
      <main className="main-container">
        <section className="main-inicio" id="inicio">
          <div className="main-section-txt">
            <p>Desenvolvedor Web</p>
            <h2>Olá, meu nome é Felipe Morais</h2>
            <div className="social-icons">
              <a href="https://github.com/FehMs" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/fehmorais/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>
          <div className="main-section">
            <img src={iconInicio} alt="icon-inicio"></img>
          </div>
        </section>
        <hr/>
        <section className="main-sobre" id="sobre">
          <div className="div-sobre">
            <div className="div-sobre-img">
              <img src={fotoimg} />
              <hr className="line-img"/>
            </div>
            <div className="div-sobre-txt">
              <h1>Sobre mim</h1>
              <p>Sou estudante de Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento web, meu objetivo é aplicar e expandir meus conhecimentos em projetos inovadores. Tenho atuado em projetos acadêmicos na FIAP, em parceria com empresas como Porto Seguro e Hapvida, desenvolvendo competências em React, React Native, HTML5, CSS, JavaScript e SQL Server. Busco oportunidades na área de desenvolvimento de sites e aplicações web, onde possa contribuir para a criação de soluções de alta performance e impactar positivamente a empresa. Meu objetivo é consolidar minha carreira como desenvolvedor web, sempre buscando a excelência técnica e a inovação.</p>
            </div>
          </div>
        </section>
        <hr/>
        <section className="container-tecnologias" id="tecnologia">
          <div className="div-tecnologia">
            <h1>Tecnologias</h1>
          </div>
          <div className="box-tecnologia">
            <div className="tecno-box">
              <a><FontAwesomeIcon icon={faReact} style={{color: "#74C0FC",}} /></a>
              <h3>React</h3>
            </div>
            <div className="tecno-box">
              <a><FontAwesomeIcon icon={faReact} style={{color: "#74C0FC",}} /></a>
              <h3> React Native</h3>
            </div>
            <div className="tecno-box">
              <a><FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} /></a>
              <h3>JavaScript</h3>
            </div>
            <div className="tecno-box">
              <a><FontAwesomeIcon icon={faJava} style={{color: "#ff0000",}} /></a>
              <h3>Java</h3>
            </div>
            <div className="tecno-box">
              <a><FontAwesomeIcon icon={faDatabase} style={{color: "#d6d6d6",}} /></a>
              <h3>SQL</h3>
            </div>
          </div>
        </section>
        <hr/>
        <section className="container-projetos" id="projetos">
          <h2>Projetos</h2>
          <div className="box-projetos">
            <div className="projetos">
              <img src={projetoUm} alt="primeiro projeto" />
              <div className="desc-projeto">
                <h2>Marvel API</h2>
                <p>Descrição: Consumo de API da Marvel</p>
                <p>Tecnologia: <FontAwesomeIcon icon={faReact} style={{color: "#74C0FC",}}/> <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} /> </p>
                <a href="https://github.com/FehMs/Test---ApiMarvel" target="blank" className="button-project">Repositório</a>
              </div>
            </div>
            <div className="projetos">
              <img src={projetoDois} alt="segundo projeto" />
              <div className="desc-projeto">
                <h2>Market API</h2>
                <p>Descrição: Consumo de API de market</p>
                <p>Tecnologia: <FontAwesomeIcon icon={faReact} style={{color: "#74C0FC",}}/> <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} /> </p>
                <a href="https://github.com/FehMs/Market" target="blank" className="button-project">Repositório</a>
              </div>
            </div>
            <div className="projetos">
              <p>Em Andamento...</p>
            </div>
            <div className="projetos">
              <p>Em Andamento...</p>
            </div>
          </div>
        </section>
        <hr/>
      </main>
      <footer>
        <div>
          <h3>Contato: </h3>
          <p>Email: fehmsdm@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/fehmorais/" target="blank">Fehmorais</a></p>
        </div>
        <div>
          <div>
            <h3>Repositório: </h3>
            <p>GitHub: <a href="https://github.com/FehMs" target="blank" >FehMs</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
