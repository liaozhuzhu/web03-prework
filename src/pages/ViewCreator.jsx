import {useEffect, useState} from 'react'
import supabase from '../client'
import Card from '../components/Card';
import { Link } from 'react-router-dom';

function ViewCreator() {
    const [creator, setCreator] = useState(null)
    let id = window.location.pathname.split(":")[1];

    useEffect(() => {
        async function fetchCreator() {
            const {data, setErr} = await supabase
                .from('creators')
                .select('*')
                .eq('id', id)

            if (setErr) {
                console.log('error', setErr)
            }
            else {
                setCreator(data[0])
            }
        }
        fetchCreator()
    }
    , [])

    return (
      <div className="flex justify-center items-center gap-5 flex-col h-screen bg-zinc-900 text-zinc-300 w-full p-2">
        {creator ? (
          <>
            <h1 className="text-4xl">{creator.name}</h1>
            <Card
              key={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              id={creator.id}
              imageURL={creator.imageURL}
              isViewing={true}
            />
          </>
        ) : (
          <h1>Loading...</h1>
        )}
        <Link
          to="/"
          className="bg-blue-500 rounded-sm p-1 text-center min-w-16"
        >
          Back
        </Link>
      </div>
    );
}

export default ViewCreator