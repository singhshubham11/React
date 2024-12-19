import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createElement } from 'react';

function MyApp() {
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <MyApp />
//   </StrictMode>,
// )

// ------------------------------------------------------------------------------------------------------

// const anotherElement = (<a href="https://google.com" target="_blank">Click on this Link!</a>)

// createRoot(document.getElementById('root')).render(
//    anotherElement 
// )

// -------------------------------------------------------------------------------------------------------

// const reactElement = {
//   type: 'a',
//   props: {href: 'https://google.com', target: '_blank'},
//   children: 'Click on this Link!'
// }

// createRoot(document.getElementById('root')).render( 
//   reactElement 
// )
 

// -------------------------------------------------------------------------------------------------------

// const ReactElement = createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'Click on this Link!'
// );


// createRoot(document.getElementById('root')).render( 
//   ReactElement
//  )

// -------------------------------------------------------------------------------------------------------

// const username = "shubham"
// const reactElement2 = createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'Click on this Link!',
//   username
// );


// createRoot(document.getElementById('root')).render( 
//   reactElement2
//  )


// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------