import Link from 'next/link'
import { title } from 'process';
import React from 'react';
import {HiThumbUp} from 'react-icons/hi'

type Props = {
  key: any,
  result: any,
}

export default function Card({ key, result }: Props) {
  return (
    <>
      <div className='cursor-pointer sm:p-3
        sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border
        sm:border-slate-400 sm:m-2 transition-shadow:duration-200 group
      '>
        <Link href={`/movie/${result.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${
            result.
            backdrop_path ||
            result.poster_path
          }`}
          width={500}
          height={300}
          style={
            {
              maxWidth:"100%",
              height: "auto",
            }
          }
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          alt='image is not available'
        >
        </img>
        <div className="p-2">
          <p className='line-clamp-2 text-md'>
            {result.overview}
          </p>
          <h2 className='truncate text-lg font-bold'>{result.title || result.name}</h2>
          <p className='flex items-center'>
            {result.release_date || result.first_air_date}
            <HiThumbUp className='h-5 mr-1 ml-3' /> {result.vote_count}
          </p>
        </div>
        </Link>
      </div>
    </>
  )
}