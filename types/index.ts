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
  author: string
  title: string
  categories: string
  description: string
  thumbnail: string
}

export interface IBookCardState {
  author: string
  title: string
  categories: string
  description: string
  thumbnail: string
  note: string
}