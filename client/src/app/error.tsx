"use client"
import React, { useEffect } from 'react'
type Props = {
  error: string,
  reset: () => {},
}

export default function error({ error, reset }: Props) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <>
      <div className='text-center mt-10'>
        <h1>Something went wrong</h1>
        <button className='hover:text-amber-600' onClick={() => reset()}>Try Agian</button>
      </div>
    </>
  )
}