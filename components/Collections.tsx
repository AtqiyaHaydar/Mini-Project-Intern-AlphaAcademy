"use client"

import { useEffect, useState } from "react"
import { searchBooks } from "@/app/api/route"
import { Input } from "./ui/input"
import { IBook } from "@/types/index"
import Image from "next/image"

const Collections = () => {
  const [query, setQuery] = useState("")
  const [books, setBooks] = useState<IBook[]>([])

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await searchBooks(query)
        setBooks(response) 
        console.log(response)
      } catch (error) {
        console.log('Error during book search:', error)
      }
    }

    handleSearch();
  }, [query])

  return (
    <div className='wrapper mt-4'>
      <Input
        placeholder="Search books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full w-[75vw] max-w-[650px] px-3 py-6"
      />

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <p>{book.volumeInfo.authors[0]}</p>
              <p>{book.volumeInfo.title}</p>
              <p>{book.volumeInfo.categories[0]}</p>
              <p>{book.volumeInfo.description}</p>
              {book.volumeInfo.imageLinks && (
                <Image 
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt="Sampul Buku"
                  width={100}
                  height={100}
                />
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Collections