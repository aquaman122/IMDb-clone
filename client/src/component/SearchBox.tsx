'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {}

export default function SearchBox({}: Props) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e:any) {
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${search}`);
    setSearch("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input value={search} onChange={(e:any) => setSearch(e.target.value)} type="text" placeholder='Search keywords...' 
        className='w-full h-14 rounded-sm placeholder-gary-500 outline-none bg-transparent '
      />
      <button
        disabled={!search}
        type="submit"
        className='text-amber-600 disabled:text-gray-400'
      >
        Search
      </button>
    </form>
  )
}