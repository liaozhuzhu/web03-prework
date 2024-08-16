import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import supabase from '../client';

function Card({
  name,
  url,
  description,
  id,
  removeCreatorFromState,
  imageURL,
  isViewing = false,
}) {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("creators")
      .delete()
      .match({ id });

    if (error) {
      console.log("error", error);
    } else {
      console.log("Sucessfully Deleted Creator");
      removeCreatorFromState(id);
    }
  };
  
  return (
    <div className="flex flex-col justify-between items-center shadow-lg p-5 rounded-lg bg-zinc-800 gap-5">
      <img
        src={imageURL ? imageURL : "https://picsum.photos/200/300"}
        alt={name}
        className="w-32 h-32 rounded-full outline"
      />
      <h2 className="text-lg">
        {name}{" "}
        <a href={url} className="text-xs text-blue-300 underline">
          @{url}
        </a>
      </h2>
      <p className="text-sm text-center">{description}</p>
      <div className="flex justify-center items-center gap-5">
        {!isViewing && (
          <Link
            to={`/view/:${id}`}
            className="bg-blue-500 rounded-sm p-1 text-center min-w-16"
          >
            View
          </Link>
        )}
        <Link
          to={`/edit/:${id}`}
          className="bg-green-500 rounded-sm p-1 text-center min-w-16"
        >
          Edit
        </Link>
        {removeCreatorFromState && (
          <button
            onClick={() => handleDelete()}
            className="bg-red-500 rounded-sm p-1 min-w-16"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default Card