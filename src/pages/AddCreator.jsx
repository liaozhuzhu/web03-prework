import {useState, useEffect} from 'react'
import supabase from '../client'
import {Link} from 'react-router-dom'

function AddCreator() {

    const [name, setName] = useState('')
    const [url, setURL] = useState('')
    const [description, setDescription] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const {data, error} = await supabase
            .from('creators')
            .insert([
                {name, url, description, imageURL}
            ])

        if (error) {
            console.log('error', error)
        }
        else {
            setMessage('Sucessfully Added Creator')
            setTimeout(() => {
                setMessage('')
            }, 3000)
            setName('')
            setURL('')
            setDescription('')
            setImageURL(null)
        }
    }

    return (
      <div className="flex justify-center items-center gap-5 flex-col h-screen bg-zinc-900 text-zinc-300">
        <h1 className="text-4xl">Add a New Creator</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-3 text-zinc-500"
        >
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="py-1 px-2 w-full rounded-md"
            value={name}
            required
          />
          <input
            type="text"
            placeholder="URL"
            onChange={(e) => setURL(e.target.value)}
            className="py-1 px-2 w-full rounded-md"
            value={url}
            required
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            className="py-1 px-2 w-full rounded-md"
            value={description}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            onChange={(e) => setImageURL(e.target.value)}
            className="py-1 px-2 w-full rounded-md"
            value={imageURL}
          />
          <button
            type="submit"
            className="flex justify-center items-center bg-green-700 transition duration-300 hover:bg-green-800 text-white p-2 rounded-lg w-20"
          >
            Add
          </button>
        </form>
        {message && <p className='text-green-500'>{message}</p>}
        <Link to="/" className="text-blue-500">Go Back</Link>
      </div>
    );
}

export default AddCreator