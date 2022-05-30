import React from "react";
import "./card.css";

function card(props) {
  return (
    <div class="bodyC">
      <div class="card">
        <div>
          <img class="imagem" src={props.image} alt={props.Alt} />
        </div>
        <div >
          <h3 class="produto">{props.nomeTT}</h3>
        </div>
        <div class="text-container">
          <div class="description">{props.info}</div>
        </div>
        <div class="btn">
            <h3>Comprar</h3>
        </div>
      </div>
    </div>
  );
}

export default card;
