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