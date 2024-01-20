"use client"

import { useEffect, useState } from "react"
import { searchBooks } from "@/app/api/book/route"
import { Input } from "./ui/input"
import { IBook } from "@/types/index"
import Image from "next/image"
import BookCard from "./BookCard"

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
          const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Unknown Author"
          const title = book.volumeInfo.title ? book.volumeInfo.title : "Unknown Title"
          const categories = book.volumeInfo.categories ? book.volumeInfo.categories[0] : "Unknown Category"
          const description = book.volumeInfo.description ? book.volumeInfo.description : "No description available"
          const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150"

          return (
            <li key={book.id}>
              <BookCard 
                author={author}
                title={title}
                categories={categories}
                description={description}
                thumbnail={thumbnail}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Collections