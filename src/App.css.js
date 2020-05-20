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

export default Wrapper;