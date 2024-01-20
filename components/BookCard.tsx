import { IBookCardProps } from "@/types"
import Image from "next/image"

const BookCard = ({ 
  author, 
  title, 
  categories, 
  description, 
  thumbnail 
}: IBookCardProps) => {
  return (
    <div>BookCard</div>
  )
}

export default BookCard