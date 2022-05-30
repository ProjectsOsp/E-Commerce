import React from "react";
import "./main.css";
import Card from "../Card";


function Home() {


  return (
     
    <div class="body">
        <div class="barraL">
          <div >
            <input class="pesquisa" type="text" placeholder="pesquisar..."/>
          </div>
        </div>
      <div class="bodyM">
        <Card class="itens" nomeTT="Notebook Gamer Acer Nitro 5" image="assets/note.png" info="Intel Core I7, 8GB, 512GB SSD, GTX 1650, 17.3', Windows 10 Home - AN517-52-75WH" Alt="notebook" />
        <Card class="itens" nomeTT="Fone Headset Gamer Garen" image="assets/fone.png" info="Eg320 Evolut Led Rgb Pc Ps4 Not Usb" Alt="fone" />
        <Card class="itens" nomeTT="Mouse Gamer Redragon Storm Elite" image="assets/mouse.png" info="16000 DPI, 8 Botões Programáveis, Black, M988-RGB" Alt="mouse" />
        <Card class="itens" nomeTT="PC Gamer Neologic O Pai Ta On" image="assets/pc.png" info="Intel i5-10400F 8GB (GTX 1050TI 4GB) 1TB 400W 80 Plus" Alt="pc gamer" />
        <Card class="itens" nomeTT="COUGAR Gaming Mouse Pad" image="assets/pad.png" info="Control 2 series" Alt="mouse pad" />
        <Card class="itens" nomeTT="Notebook Gamer Acer Nitro 5" image="assets/note.png" info="Intel Core I7, 8GB, 512GB SSD, GTX 1650, 17.3', Windows 10 Home - AN517-52-75WH" Alt="notebook" />
        <Card class="itens" nomeTT="Fone Headset Gamer Garen" image="assets/fone.png" info="Eg320 Evolut Led Rgb Pc Ps4 Not Usb" Alt="fone" />
        <Card class="itens" nomeTT="COUGAR Gaming Mouse Pad" image="assets/pad.png" info="Control 2 series" Alt="mouse pad" />
        <Card class="itens" nomeTT="Mouse Gamer Redragon Storm Elite" image="assets/mouse.png" info="16000 DPI, 8 Botões Programáveis, Black, M988-RGB" Alt="mouse" />
        <Card class="itens" nomeTT="PC Gamer Neologic O Pai Ta On" image="assets/pc.png" info="Intel i5-10400F 8GB (GTX 1050TI 4GB) 1TB 400W 80 Plus" Alt="pc gamer" />
      </div>
    </div>
  );
}

export default Home;
