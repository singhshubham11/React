import { useContext, createContext, useMemo } from 'react';
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



// const ThemeContext = createContext('light');

// function App() {
//   const theme = 'dark';
//   return(
//     <ThemeContext.Provider value={theme}>
//       <ThemedButoon />
//     </ThemeContext.Provider>
//   );
// }

// function ThemedButoon() {
//   const theme = useContext(ThemeContext);
//   return (
//     <button
//       style={{
//         background: theme === 'dark' ? 'black' : 'white',
//         color: theme === 'dark' ? 'white' : 'black',
//         padding: '10px 20px',
//         border: 'none',
//         borderRadius: '5px',
//       }}
//     >
//       {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
//     </button>
//   );
// }

// const ThemeContext = createContext();
// function App() {
//   const [theme, setTheme] = useState('light');

//   return(
//     <ThemeContext.Provider value={{theme, setTheme}}>
//       <ChildComponent />
//     </ThemeContext.Provider>
//   )
// }

// function ChildComponent() {
//   const {theme, setTheme} = useContext(ThemeContext);
//   const toggelTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   }

//   return(
//     <div>
//       <p>The current theme is {theme} </p>
//       <button onClick={toggelTheme}>
//         Switch to {theme === 'light' ? 'dark' : 'light'} mode
//       </button>
//     </div>
//   );
// }


// const ThemeContext = createContext('light');
// function App() {
//   return(
//     <div>
//       <ThemeContext.Provider value='dark'>
//       <ShowThem />
//       </ThemeContext.Provider>
//     </div>
//   );
// }

// function ShowThem() {
//   const theme = useContext(ThemeContext);
//   return(
//     <p>The theme is {theme}</p>
//   )
// }


// const ThemeContext = createContext('light');
// const LanguageContext = createContext('English');

// function Settings() {
//   const theme = useContext(ThemeContext);
//   const language = useContext(LanguageContext);

//   return(
//     <div>
//       <p>The theme is : {theme} </p>
//       <p>The language is : {language} </p>
//     </div>
//   )
// }

// function App() {
//   return(
//     <ThemeContext.Provider value='dark'>
//       <LanguageContext.Provider value='Spanish'>
//         <Settings />
//       </LanguageContext.Provider>
//     </ThemeContext.Provider>
//   )
// }


// const ThemeContext = createContext('light');

// function ThemeButton() {
//   const theme = useContext(ThemeContext);
//   return(
//     <button style={{background: theme === 'dark' ? '#333' : '#fff' }}>Click me</button>
//   )
// }

// function App() {
//   return(
//     <ThemeContext.Provider value='dark'>
//       <ThemeButton />
//     </ThemeContext.Provider>
//   )
// }


// const AuthContext = createContext(null);

// function UserProfile() {
//   const user = useContext(AuthContext);
//   return(
//     <div>
//       <p>Welcome, {user.name}! </p>
//     </div>
//   )
// }

// function App() {
//   const user = {name: 'Shubham', isLoggedIn: true};
//   return(
//     <AuthContext.Provider value={user}>
//       <UserProfile />
//     </AuthContext.Provider>
//   )
// }


// const SettingContext = createContext({fontSize: '30px'});

// function App() {
//   return(
//     <SettingContext.Provider value={{fontSize: '50px'}}>
//       <TextComponent />
//     </SettingContext.Provider>
//   )
// }

// function TextComponent() {
//   const settings = useContext(SettingContext);
//   return(
//     <p style={{fontSize: settings.fontSize}}>Hello</p>
//   )
// }


// const CartContext = createContext([]);

// function App() {
//   const cartItems = ['Apple', 'Orange', 'Grapes'];
//   return(
//     <CartContext.Provider value={cartItems}>
//       <CartButton />
//       <CartPage />
//     </CartContext.Provider>
//   )
// }

// function CartButton() {
//   const cart = useContext(CartContext);
//   return(
//     <button>Cart ({cart.length} items) </button>
//   )
// }

// function CartPage() {
//   const cart = useContext(CartContext);
//   return(
//     <ul>{cart.map((item, index) => <li key={index}>{item}</li> )}</ul>
//   )
// }


// const ThemeContext = createContext('light');
// const UserContext = createContext({userName: 'Guest'})

// function ThemeDisplay() {
//   const theme = useContext(ThemeContext);
//   return(
//     <p>Theme: {theme} </p>
//   )
// }
// function UserDisplay() {
//   console.log('topi')
//   const user = useContext(UserContext);
//   return(
//     <p>User: {user.userName} </p>
//   )
// }

// function App() {
//   const [theme, setTheme] = useState('dark')
//   const [user, setUser] = useState({userName: 'John'})

//   const themeValue = useMemo(() => theme, [theme]);
//   const userValue = useMemo(() => user, [user]);

//   return(
//     <>
//     <ThemeContext.Provider value={themeValue}>
//       <ThemeDisplay />
//     </ThemeContext.Provider>
//     <UserContext.Provider value={userValue}>
//       <UserDisplay />
//     </UserContext.Provider>
//     </>
//   )
// }


// const CounterContext = createContext();

// function CounterProvider({children}) {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount((prev) => prev + 1);
//   const decrement = () => setCount((prev) => prev - 1);
//   const reset = () => setCount(0);

//   return(
//     <CounterContext.Provider value={{count, increment, decrement, reset}}>
//       {children}
//     </CounterContext.Provider>
//   )

// }

// function CounterDisplay() {
//   const {count} = useContext(CounterContext);
//   return <h1>Counter Value: {count} </h1>  
// }
// function CounterControls() {
//   const {increment, decrement, reset} = useContext(CounterContext);
//   return(
//     <div>
//       <button onClick={increment} >Increase</button>
//       <button onClick={decrement} >Decrease</button>
//       <button onClick={reset} >Reset</button>
//     </div>
//   )
// }

// function App() {
//   return(
//     <CounterProvider>
//       <div>
//         <CounterDisplay />
//         <CounterControls />
//       </div>
//     </CounterProvider>
//   )
// }



// const CounterContext = createContext();

// function CounterDisplay() {
//   const { count } = useContext(CounterContext);
//   return <h1>Counter Value: {count}</h1>;
// }

// function CounterControls() {
//   const { increment, decrement, reset } = useContext(CounterContext);
//   return (
//     <div>
//       <button onClick={increment}>Increase</button>
//       <button onClick={decrement}>Decrease</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount((prev) => prev + 1);
//   const decrement = () => setCount((prev) => prev - 1);
//   const reset = () => setCount(0);

//   return (
//     <CounterContext.Provider value={{ count, increment, decrement, reset }}>
//       <div>
//         <CounterDisplay />
//         <CounterControls />
//       </div>
//     </CounterContext.Provider>
//   );
// }


// const LanguageContext = createContext();

// function App() {
//   return(
//     <LanguageProvider>
//       <DisplayText />
//       <LanguageToggleButton />
//     </LanguageProvider>
//   )
// }

// function LanguageProvider({children}) {
//   const [language, setLanguage] = useState('en');
//   const toggelLanguage = () => {
//     setLanguage( (prevLang) => (prevLang === 'en' ? 'es' : 'en') )
//   }
//   return(
//     <LanguageContext.Provider value={{language, toggelLanguage}}>
//       {children}
//     </LanguageContext.Provider>
//   )
// }

// function DisplayText() {
//   const {language} = useContext(LanguageContext);

//   const greetings = {
//     en: 'Hello, welcome to our app!',
//     es: '¡Hola, bienvenido a nuestra aplicación!',
//   }

//   return <h1>{greetings[language]}</h1>
// }
// function LanguageToggleButton() {
//   const {language, toggelLanguage} = useContext(LanguageContext);
//   return(
//     <button onClick={toggelLanguage}>Switch to {language === 'en' ? 'Spanish' : 'English'} </button>
//   )
// }


const ThemeContext = createContext();

function App() {
  return(
    <ThemeProvider>
      <ThemedApp />
      <ThemeToggleButton />
    </ThemeProvider>
  )
}

function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light');

  const toggelTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light' ))
  }

  return(
    <ThemeContext.Provider value={{theme, toggelTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
function ThemedApp() {
  const {theme} = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  };

  return(
    <div style={appStyle}>This is a {theme} Theme! </div>
  )
}
function ThemeToggleButton() {
  const {theme, toggelTheme} = useContext(ThemeContext);
  return(
    <button onClick={toggelTheme} style={{ marginTop: '20px', padding: '10px 20px' }}>Switch to {theme === 'light' ? 'Dark' : 'Light'} </button>
  )
}


export default App
