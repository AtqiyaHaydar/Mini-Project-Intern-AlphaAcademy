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
  id: string
  userId: string
  author: string
  title: string
  categories: string
  description: string
  thumbnail: string
}

export interface IBookCardState {
  id: string
  userId: string
  author: string
  title: string
  categories: string
  description: string
  thumbnail: string
  note: string
}

export interface IBookCollection {
  _id: string
  author: string
  title: string
  categories: string
  description: string
  thumbnail: string
  note: string
}