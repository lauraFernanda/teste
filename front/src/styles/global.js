import { createGlobalStyle } from "styled-components";

import log from "../assets/bac.jpg";

export default createGlobalStyle`


@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap');
*{
    margin: 0;
    padding: 0;
    font-family: 'Libre Baskerville', serif; 
}
body{
   background: url(${log}); 
   background-repeat:no-repeat; 
   background-size:cover; 
   width: 100%;
   height: 560px;
  display: flex;  
  justify-content: center;
  align-items: center;
  color: blue;
}

button {
   border-top: 1px solid #ffffff;
   background: #066469;
   padding: 10px 60px;
   box-shadow: rgba(0,0,0,1) 0 1px 0;
   text-shadow: rgba(0,0,0,.4) 0 1px 0;
   color: #ffffff;
   font-size: 16px;
   font-family: 'Lucida Grande', Helvetica, Arial, Sans-Serif;
   text-decoration: none;
   vertical-align: middle;
   }
button:hover {
   border-top-color: #0f0a0a;
   background: #0f0a0a;
   color: #ffffff;
   }
button:active {
   border-top-color: #fafafa;
   background: #fafafa;
   }
input{
  display: inline-block;
  box-sizing: content-box;
  margin: 2,5px;
  padding: 10px 110px 10px 100px;
  border: 1px solid #b7b7b7;
  border-radius: 5px;
  font-family: normal 16px/normal "Times New Roman", Times, serif;
  color: rgba(0,142,198,1);
  text-overflow: clip;
  background: rgba(252,252,252,1);
  box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) inset;
  text-shadow: 1px 1px 0 rgba(255,255,255,0.66) ;
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);

}   
@media (min-width: 798px) {
    height: calc(100% - 80px);
    width: 80px;
    left: 0;
    top: 80px;
    flex-direction: column;
    justify-content: center;
}
`;