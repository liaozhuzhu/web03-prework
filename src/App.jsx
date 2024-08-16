import { useState, useEffect } from 'react'
import supabase from "./client"
import Card from "./components/Card"
import { Link } from "react-router-dom"

// PS I REFUSE TO USE PICO, TAILWIND IS JUST BETTER OVERALL

function App() {
  const [allCreators, setAllCreators] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
      if (error) {
        console.log("error", error)
      } else {
        setAllCreators(data)
      }
    }
    fetchData()
  }
  , [])


  return (
    <>
      <div className="h-screen w-full flex justify-center items-center bg-zinc-900 flex-col gap-5">
        <h1 className="text-4xl text-white">Welcome to Creatorverse</h1>
        <div className="flex justify-center items-center gap-5">
          <Link
            to="/all"
            className="flex justify-center items-center bg-blue-700 transition duration-300 hover:bg-blue-800 text-white p-2 rounded-lg"
          >
            All Creators
          </Link>
          <Link
            to="/add"
            className="flex justify-center items-center bg-green-700 transition duration-300 hover:bg-green-800 text-white p-2 rounded-lg"
          >
            Add Creator
          </Link>
        </div>
      </div>
    </>
  );
}

export default App
