import React from 'react';
import './App.css';
import styled from 'styled-components';

const Wrapper = styled.svg`
  width:300px;
  height:300px;
  display: "flex";
  justifyContent: "center";
  alignItems: "center";
  // box-shadow: 0 10px 40px 0 rgba(118,118,118,0.27);

  #rocketCompass line{
    visibility:hidden;
    opacity:10;
    stroke-dasharray:100;
  }

  line.#Jet2{
    animation-delay:.5s;
  }
  
  line.#Jet3{
    animation-delay:.25s;
  }
  
  :hover #rocketCompass line{
    visibility: visible;
    animation: animate .65s ease-in-out;
  }
  
  @keyframes animate{
      0%{
        opacity:0;
        stroke-dasharray:10;
        stroke-dashoffset:10;
      }

      66%{
        opacity:10;
        // stroke-dashoffset:15;
      }

      100%{
        opacity:100;
      }
    }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Wrapper>
            <g id="rocketCompass">
                <path d="M150,0 C67.1572875,0 0,67.1572875 0,150 C0,232.842712 67.1572875,300 150,300 C232.842712,300 300,232.842712 300,150 C300,67.1572875 232.842712,0 150,0 Z" id="Oval-Background" fill="#000000" fill-rule="nonzero"></path>
                <path d="M129.105037,197.275456 L129.065953,197.435046 C128.534244,199.873325 131.086833,201.888621 133.356376,200.738205 L172.5,180.896342 L211.643624,200.738205 C213.962505,201.91363 216.576872,199.784208 215.894963,197.275456 L175.394963,48.2754562 C174.592895,45.3246374 170.407105,45.3246374 169.605037,48.2754562 L129.105037,197.275456 Z" id="Rocket" stroke="#FFFFFF" stroke-width="6" fill-rule="nonzero" transform="translate(172.500000, 123.566432) rotate(-315.000000) translate(-172.500000, -123.566432) "></path>
                <line x1="116.587708" y1="176.212012" x2="73.7265419" y2="219.073178" id="Jet1" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"></line>
                <line x1="116.861167" y1="215.062342" x2="74" y2="257.923509" id="Jet3" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"></line>
                <line x1="83.8611665" y1="172.062342" x2="41" y2="214.923509" id="Jet2" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"></line>
            </g>
          </Wrapper>
      </header>
    </div>
  );
}

export default App;
