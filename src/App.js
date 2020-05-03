import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [numBusket, setNum] = useState('###')
  const [trimmer, setTrim] = useState('###')
  //const [busket] = useState(Number(numBusket.replace(/\(|\)|\+/g, '')))
  const handleChange = (event) => {
    setNum(event.target.value)
  }
  // useEffect(() => {
  //   console.log(numBusket);
    
    
  // }, [numBusket]);

  const trimHandler = (event) => {
   event.preventDefault()
   const busket = Number(numBusket.replace(/\(|\)|\+|\ |\-/g, ''))
    setTrim (busket)
   //const trim = Number(busket.replace(/\(|\)|\+/g, ''))
   
    console.log(trimmer)

    
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10 mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Row number
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Insert your garbage here" onChange={handleChange} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Perfect numbers
            </label>
            <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder={trimmer}  value={trimmer} />
            <p className="text-gray-500 text-xs italic">Please release from all garbage..</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={trimHandler}>
              Trim it
            </button>
            
          </div>
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
