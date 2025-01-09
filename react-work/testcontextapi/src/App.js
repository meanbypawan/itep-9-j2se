import logo from './logo.svg';
import './App.css';
import First from './components/First';
import { createContext, useState } from 'react';

export const MessageContext = createContext();
export const DataContext = createContext();
export const CounterContext = createContext();
function App() {
  let message = "Hello...";
  const [counter,setCounter] = useState(100);
  return <>
   <label>{counter}</label>
   <MessageContext.Provider value={message}>
    <DataContext.Provider value={{a:20,b:10}}>
     <CounterContext.Provider value={{counter,setCounter}}> 
       <First/>
     </CounterContext.Provider>
    </DataContext.Provider> 
   </MessageContext.Provider>  
  </>
}

export default App;
