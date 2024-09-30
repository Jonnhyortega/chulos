import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
    // PALETA DE VERDE
    --greenFull1: #0e6251;
    --greenFull2: #117864;
    --greenFull3: #148f77;
    --greenFull4: #17a589;
    --greenFull5: #1abc9c;
    --greenFull6: #48c9b0;
    --greenFull7: #76d7c4;

    // PALETA SILVER
    --silverFull1: #7b7d7d;
    --silverFull2: #979a9a;
    --silverFull3: #b3b6b7;
    --silverFull4: #d0d3d4;
    --silverFull5: #cacfd2;
    --silverFull6: #d7dbdd;
    --silverFull7: #e5e7e9;

  }

  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    }

 /* Scrollbar Styles */
    ::-webkit-scrollbar {
      width: 12px;
      height: 12px;
      }
      
      ::-webkit-scrollbar-track {
        background: var(--greenFull1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--silverFull1);
          border-radius: 3px;
          }
          
      ::-webkit-scrollbar-thumb:hover {
         background: var(--greenFull3);
      }
    /* Scrollbar Styles */
    
    
`;
