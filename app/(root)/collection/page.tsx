import React from 'react'
import { getCollectionByUser } from '@/lib/actions/book.action'
import { currentUser } from '@clerk/nextjs'
import Link from 'next/link'
import BookCard from '@/components/BookCard'
import { IBook, IBookCollection } from '@/types'

const CollectionPage = async () => {
  const user = await currentUser()

  const userId = user?.id as string

  const collections = await getCollectionByUser({ userId })

  return (
    <div className='wrapper mt-[115px] w-full flex flex-col gap-8'>
      <h1 className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left'>My Collection</h1>
      <div>
        {collections.length > 0 ? (
          <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {collections.map((book: IBookCollection) => {
              const author = book.author? book.author : "Unknown Author"
              const title = book.title ? book.title : "Unknown Title"
              const categories = book.categories ? book.categories : "Unknown Category"
              const description = book.description ? book.description : "No description available"
              const thumbnail = book.thumbnail ? book.thumbnail : "https://via.placeholder.com/150"
              const note = book.note ? book.note : "No note available"

              return (
                <div className='flex flex-col gap-6'>
                  <li key={book._id}>
                    <BookCard 
                      id={book._id}
                      userId={userId}
                      author={author}
                      title={title}
                      categories={categories}
                      description={description}
                      thumbnail={thumbnail}
                    />
                  </li>
                  <div className='px-2'>
                    <h5 className='text-slate-500 text-[14px]'>Your Note</h5>
                    <p className='text-[18px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent hover:font-medium'>{note}</p>
                  </div>
                </div>
              )
            })}
          </ul>
        ) : (
          <div className='text-center mt-12'>
            <Link href="/">
              <span className='hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent hover:font-medium'>
                You Don't Have A Collection. <br /> Make A Collection Now
              </span>
            </Link>
          </div>
        )} 
      </div>
    </div>
  )
}

export default CollectionPage