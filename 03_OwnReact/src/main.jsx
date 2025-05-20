// function render(mainContainer,containerInner){
//     const element = document.createElement(containerInner.type);
//     for (const currProp in containerInner.properties) {
//         element.setAttribute(currProp,containerInner.properties[currProp]);
//     }
//     element.innerText = containerInner.text;
//     mainContainer.appendChild(element);
// }

// const root = document.getElementById('root');
// const reactElement = {
//     type:'a',
//     properties:{
//         "src":"https://www.google.com",
//         "target":"_blank"
//     },
//     style:{
//         "border":"2px solid black"
//     },
//     text:"Google"
// }
// render(root,reactElement);


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const App = ()=>(<><h1>Hello,reacting</h1></>)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
