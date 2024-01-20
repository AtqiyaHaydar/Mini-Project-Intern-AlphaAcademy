"use server"

import { IBookCardState } from "@/types"
import { connectToDatabase } from "../database"
import Book from "../database/models/book.model"

export const createCollection = async ({
  userId,
  author,
  title,
  categories,
  description,
  thumbnail,
  note
} : IBookCardState) => {
  try {
    await connectToDatabase()

    const newCollection = await Book.create({
      userId,
      author,
      title,
      categories,
      description,
      thumbnail,
      note
    })

    return JSON.parse(JSON.stringify(newCollection))
  } catch (error: any) {
    throw new Error(error)
  }
}

export const deleteCollection = async (id: string) => {
  try {
    await connectToDatabase()

    const deletedCollection = await Book.findByIdAndDelete(id)
  } catch (error: any) {
    throw new Error(error)
  }
}

export const updateNote = async (id: string, note:string) => {
  try {
    await connectToDatabase()

    const collectionToUpdate = await Book.findById(id)

    if (!collectionToUpdate) {
      throw new Error('Collection not found')
    }

    const updatedNote = await Book.findByIdAndUpdate(
      id,
      { note },
      { new: true }
    )

    return JSON.parse(JSON.stringify(updatedNote))
  } catch (error: any) {
    throw new Error(error)
  }
}

export const getCollectionByUser = async ({
  userId
}: {
  userId: string
}) => {
  try {
    await connectToDatabase()

    const myCollection = await Book.find({ userId })

    return JSON.parse(JSON.stringify(myCollection))
  } catch (error: any) {
    throw new Error(error)
  }
}