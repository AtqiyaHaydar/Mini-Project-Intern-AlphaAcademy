import { Schema } from "mongoose"

export interface IBook {
  id: string
  volumeInfo: {
    authors: string[]
    title: string
    categories: string[]
    description: string
    imageLinks: {
      thumbnail: string
    }
  }
}

export interface IBookCardProps {
  userId: string
  author: string
  title: string
  categories: string
  description: string
  thumbnail: string
}

export interface IBookCardState {
  userId: string
  author: string
  title: string
  categories: string
  description: string
  thumbnail: string
  note: string
}