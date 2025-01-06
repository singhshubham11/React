import { useContext, createContext } from 'react';
import { useState } from 'react'

// function App() {
//   const favoriteColor = "blue";

//   return (
//     <>
//       <Child favoriteColor={favoriteColor} />
//     </>
//   )
// }

// function Child({favoriteColor}) {
//   return(
//     <GrandChild favoriteColor={favoriteColor} />
//   )
// }

// function GrandChild({favoriteColor}) {
//   return(
//     <h1>The favorite color is {favoriteColor}</h1>
//   )
// }



// const ColorContext = createContext();
// function App() {
//   const favoriteColor = "Red";

//   return (
//     <ColorContext.Provider value={favoriteColor}>
//       <Child/>
//     </ColorContext.Provider>
//   )
// }

// function Child() {
//   return(
//     <GrandChild />
//   )
// }

// function GrandChild() {
//   const favoriteColor = useContext(ColorContext);
//   return(
//     <h1>The favorite color is {favoriteColor}</h1>
//   )
// }


// function App() {
//   const userName = "Alice";

//   return (
//     <>
//       <Parent userName={userName} />
//     </>
//   )
// }

// function Parent({ userName }) {
//   return <Child userName={userName} />;
// }

// function Child({userName}) {
//   return(
//     <GrandChild userName={userName} />
//   )
// }

// function GrandChild({userName}) {
//   return(
//     <h1>Hello {userName}</h1>
//   )
// }


// const UserContext = createContext();
// function App() {
//   const userName = "Shubham";

//   return (
//     <>
//       <UserContext.Provider value={userName}>
//         <Parent />
//         </UserContext.Provider>
//     </>
//   )
// }

// function Parent() {
//   return <Child />;
// }

// function Child() {
//   return(
//     <GrandChild/>
//   )
// }

// function GrandChild() {
//   const userName = useContext(UserContext);
//   return(
//     <h1>Hello {userName}</h1>
//   )
// }



// const MyContext = createContext()
// function App() {
//   const sharedData = "This is data from Context!";
//   return(<>
//   <MyContext.Provider value={sharedData}>
//     <Child />
//   </MyContext.Provider>
//   </>);
// }

// function Child() {
//   return(
//     <GrandChild/>
//   )
// }

// function GrandChild() {
//   const sharedData = useContext(MyContext);
//   return <h1>{sharedData}</h1>
// }


// const ThemeContext = createContext();

// function App() {
//   const theme = "dark";
//   return(<>
//   <ThemeContext.Provider value={theme}>
//     <Header />
//     <Footer />
//   </ThemeContext.Provider>
//   </>);
// }

// function Header() {
//   const theme = useContext(ThemeContext);
//   return <h1>The current theme is {theme}</h1>
// }
// function Footer() {
//   const theme = useContext(ThemeContext);
//   return <p>Footer also knows the theme: {theme}</p>;
// }



// const ThemeContext = createContext('light');

// function App() {
//   return(<>
//   <ThemeContext.Provider value="dark">
//     <Toolbar />
//   </ThemeContext.Provider>
//   </>);
// }

// function Toolbar() {
//   return <Button />
// }

// function Button() {
//   const theme = useContext(ThemeContext);
//   return(
//     <button style={{ background: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
//       I am styled with the {theme} theme!
//     </button>

//   );
// }



// const ThemeContext = createContext("light");

// function App() {
//   return(
//     <ThemeContext.Consumer>
//       {(theme) => (
//         <button
//         style={{
//           background: theme === 'dark' ? 'black' : 'white',
//           color: theme === 'dark' ? 'white' : 'black',
//         }}
//         >
//           I am Styled with the {theme} theme !
//         </button>
//       )}
//     </ThemeContext.Consumer>
//   );
// }

// function Button() {
//   const theme = useContext(ThemeContext);

//   return (
//     <button
//       style={{
//         background: theme === 'dark' ? 'black' : 'white',
//         color: theme === 'dark' ? 'white' : 'black',
//       }}
//     >
//       I am styled with the {theme} theme!
//     </button>
//   );

// }



const ThemeContext = createContext();

function App() {
  const theme = 'light';
  return(
    <ThemeContext.Provider value={theme}>
      <ThemedButoon />
    </ThemeContext.Provider>
  );
}

function ThemedButoon() {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
      }}
    >
      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}

export default App
