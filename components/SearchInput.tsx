'use client'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SearchInput = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams();
  const query = searchParams.get('topic') || "";

  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
  
    
  }, [searchQuery, router, searchParams, pathname])
  

  return (
    <div className='relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit'>
      <Image alt='search' width={15} height={15} src={'/icons/search.svg'}/>
      <input type="text" placeholder='search companions' className='outline-none' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
    </div>
  )
}

export default SearchInput