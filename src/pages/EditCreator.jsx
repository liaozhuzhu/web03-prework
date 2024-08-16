import {useState, useEffect} from 'react'
import supabase from '../client'
import {Link} from 'react-router-dom'

function EditCreator() {
    const [name, setName] = useState('')
    const [url, setURL] = useState('')
    const [description, setDescription] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [message, setMessage] = useState('')
    let id = window.location.pathname.split(':')[1]

    useEffect(() => {
        async function fetchCreator() {
            const {data, error} = await supabase
                .from('creators')
                .select('*')
                .eq('id', id)

            if (error) {
                console.log('error', error)
            }
            else {
                const creator = data[0]
                setName(creator.name)
                setURL(creator.url)
                setDescription(creator.description)
                setImageURL(creator.imageURL)
            }
        }
        fetchCreator()
    }
    , [])

    async function handleSubmit(e) {
        e.preventDefault()
        if (!name || !url || !description) {
            alert('Please fill in all fields')
            return
        }
        const {data, error} = await supabase
            .from('creators')
            .update([
                {name, url, description, imageURL}
            ])
            .match({id})

        if (error) {
            console.log('error', error)
        }
        else {
            setMessage('Sucessfully Updated Creator')
            setTimeout(() => {
                setMessage('')
            }, 3000)
        }
    }

    return (
      <div className="flex justify-center items-center gap-5 flex-col h-screen bg-zinc-900 text-zinc-300">
        <h1 className="text-4xl">Edit Creator {name}</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-3 text-zinc-500"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-1 px-2 w-full rounded-md"
          />
          <input
            type="text"
            placeholder="URL"
            value={url}
            onChange={(e) => setURL(e.target.value)}
            className="py-1 px-2 w-full rounded-md"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="py-1 px-2 w-full rounded-md"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="py-1 px-2 w-full rounded-md"
          />
          <button type="submit" className='text-center bg-green-500 p-2 rounded-md text-zinc-300 transition duration-300 hover:bg-green-600'>Update Creator</button>
            {message && <p className='text-green-500'>{message}</p>}
            <Link to="/" className="text-blue-500">Back</Link>
        </form>
      </div>
    );
}

export default EditCreator