import Link from 'next/link';
import { type } from 'os'
import React from 'react'

type AppProps = {
  title:string,
  address:string,
  Icon:JSX.Element
}

export default function MenuItem({ title, address, Icon }:AppProps) {
  return (
    <>
      <div>
        <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
          {Icon}
          <p className="hidden sm:inline my-2 text-sm">{title}</p>
        </Link>
      </div>
    </>
  )
}
