import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Typewriter from 'typewriter-effect';
import './App.css';


function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="">
      <Header/>
      <div class="content">
              <img src="/images/img1.png" width="200" height="350"/>
             <h1 class="anim">Este es mi primer componente</h1>
             <p class="anim">El valor del number es: {number}</p>
             <div class="links anim">
                <button onClick={() => setNumber(number + 1)}><span></span>Aumentar</button>
                <button onClick={() => setNumber(number - 1)}><span></span>Reducir</button>
             </div>
         </div>
      <Footer/>
    </div>
  );
}

export default App;
