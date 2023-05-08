import img_profile from "./assets/imgs/profile.jpg";
import "./assets/css/App.css";
import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

function App() {
  const info = useRef(null);

  return (
    <>
      <div className="container">

          <img class= "foto" src={img_profile} />
        <div className="info" ref={info}>
          <p>Olá,</p>
          <p>Meu nome é Alan Martins 👨🏾‍💻</p>
   
         <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(100)
                .start()
                .typeString("Tenho interesse em linguagens como: <br>")
                .changeDelay(70)
                .typeString('<span style="color: #ffff00;"">JavaScript / NodeJS</span>')
                .typeString(', ')
                .pauseFor(100)
                .typeString('<span style="color: #61DBFB;"">ReactJS </span>')
                .typeString('e ')
                .typeString('<span style="color: #4B8BBE;"">Pyt</span>')
                .typeString('<span style="color: #FFE873;"">hon </span><br>')
                .typeString('<span>Tenho alguns projetos postados no meu perfil do github: </span><br>')
                .pasteString('<a href="https://www.github.com/alanosms" target="_blank">Visitar</a>')
            }}
          />
     
        </div>
      </div>
    </>
  );
}

export default App;
