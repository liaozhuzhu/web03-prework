import {useState, useEffect} from 'react'
import supabase from '../client'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function ShowCreators() {
    const [creators, setCreators] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchCreators() {
            const {data, error} = await supabase
                .from('creators')
                .select('*')

            if (error) {
                console.log('error', error)
            }
            else {
                setCreators(data)
                setLoading(false)
            }
        }
        fetchCreators()
    }
    , [])

    const removeCreatorFromState = (id) => {
        setCreators(creators.filter((creator) => creator.id !== id));
    };

    return (
      <div className="flex justify-center items-center gap-5 flex-col h-screen bg-zinc-900 text-zinc-300 w-full">
        <h1 className="text-4xl">All Creators</h1>
        {loading ? (
          <h1>Loading...</h1>
        ) : creators.length === 0 ? (
          <h1>No Creators</h1>
        ) : (
          <div className="grid grid-cols-2 gap-5 w-full px-2">
            {creators.map((creator) => (
              <Card
                key={creator.id}
                name={creator.name}
                url={creator.url}
                description={creator.description}
                id={creator.id}
                imageURL={creator.imageURL}
                removeCreatorFromState={removeCreatorFromState}
              />
            ))}
          </div>
        )}
        <Link
          to="/add"
          className="flex justify-center items-center bg-green-700 transition duration-300 hover:bg-green-800 text-white p-2 rounded-lg"
        >
          Add Creator
        </Link>
      </div>
    );
}

export default ShowCreators