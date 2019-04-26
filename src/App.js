import React from 'react';
import logo from './logo.svg';
import './App.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "//gmail.us20.list-manage.com/subscribe/post?u=04125e19a97a98b987a2741f8&amp;id=f81a5a9705";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Postales de la tormenta" title="Postales de la tormenta" />
        <p>
          <strong>"Postales de la tormenta"</strong> es un proyecto de escritura creativa donde busco que cada fin de semana la ficción, la cotidiana realidad y las experiencias personales tengan límites borrosos. Queda como ejercicio del lector decidir si dedica su tiempo no sólo a leer el contenido, sino también a desentrañar qué clasificación pertenece a cada línea que se vuelque en este humilde espacio.
        </p>

        <p>Si te interesa, podés dejar tu dirección de mail debajo, ingresándolo en el campo que dice <em>Your email</em> y luego haciendo click en <em>Submit</em>, para recibir un extracto de los escritos por mail cada fin de semana.</p>

        <p>¡Ojalá nos leamos pronto!</p>

        <div class="subscription-form">
          <MailchimpSubscribe url={url}/>
        </div>

        <a class="archive-link" href="http://archivo.postalesdelatormenta.club/" title="Archivo">Archivo</a>
      </header>
    </div>
  );
}

export default App;
