import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [themeMode, setThemeMode] = useState('light');

  const getRandomQuote = async () => {
    const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    return await response.json();
  }

  useEffect(()=>{
    getRandomQuote().then((data)=>{
      setQuote(data[0].quote);
      setAuthor(data[0].author);
    })
  }, []);

  return (
    <>
        <div 
          className={
            `w-1/3 bg-white rounded-lg px-2 py-2 flex justify-center items-center flex-col
            ${themeMode==="dark" ? "dark:bg-slate-950 text-white" : "bg-white text-black border border-slate-400"}
            `
          }
        >
          <h1 className='font-bold w-full text-center text-3xl underline'>
            Quote of the Day
          </h1>
          <p className='px-3 py-3 text-center text-xl'>
            {`❝ ${quote} ❞`}
          </p>
          <p className='text-right text-lg'>
            {`-- ${author}`}
          </p>
          <button 
            className='w-40 h-fit px-2 py-2 bg-blue-400 hover:bg-blue-500 rounded-lg font-bold my-2'
            onClick={()=>{
              getRandomQuote().then((data)=>{
                setQuote(data[0].quote);
                setAuthor(data[0].author)
              })
            }}
          >
            New Quote
          </button>
          <button
            className='w-30 h-fit px-2 py-2 bg-fuchsia-900 hover:bg-fuchsia-950 rounded-lg font-bold my-2'
            onClick={()=> themeMode==="dark" ? setThemeMode("light") : setThemeMode("dark")}
          >
            {themeMode==="dark" ? "light" : "dark"}
          </button>
        </div>
    </>
  )
}

export default App
