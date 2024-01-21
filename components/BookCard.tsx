"use client"

import { truncateDescription } from "@/lib/utils"
import { IBookCardProps, IBookCardState } from "@/types"
import Image from "next/image"
import PlusIcon from "./icons/PlusIcon"
import { usePathname } from "next/navigation"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { useToast } from "./ui/use-toast"
import { Button } from "./ui/button"
import { SignedIn, useUser } from "@clerk/nextjs"
import { useState } from "react"
import { Input } from "./ui/input"
import { createCollection, deleteCollection } from "@/lib/actions/book.action"
import MinusIcon from "./icons/MinusIcon"

const BookCard = ({
  id,
  userId,
  author, 
  title, 
  categories, 
  description, 
  thumbnail 
}: IBookCardProps) => {
  const router = useRouter()
  const { toast } = useToast()
  const pathname = usePathname()

  const [collection, setCollection] = useState<IBookCardState>({
    id: id,
    userId: userId,
    author: author,
    title: title,
    categories: categories,
    description: description,
    thumbnail: thumbnail,
    note: ""
  })

  const truncatedTitle: string = truncateDescription(title)
  const truncatedAuthor: string = truncateDescription(author)
  const truncatedDescription: string = truncateDescription(description)

  const addToCollection = async () => {
    const collectionData: IBookCardState = {
      id: collection.id,
      userId: collection.userId,
      author: collection.author,
      title: collection.title,
      categories: collection.categories,
      description: collection.description,
      thumbnail: collection.thumbnail,
      note: collection.note
    }

    await createCollection(collectionData)
    
    toast({
      title: "Book Added",
      description: "The book successfully added to your collection.",
    })

    router.refresh()
  }

  const deleteFromCollection = async () => {
    await deleteCollection(collection.id)

    toast({
      title: "Book Deleted",
      description: "The book successfully deleted from your collection.",
    })

    router.refresh()
  }

  const handleChangeNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCollection(prevState => ({
      ...prevState,
      note: e.target.value
    }))
  }

  return (
    <div className="border-2 border-slate-200 min-w-[200px] min-h-[400px] rounded-lg shadow-md px-4 py-2 flex flex-col items-center gap-4 hover:scale-105 transition-all">
      
      {pathname === "/" && (
        <div 
        className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-sm text-white cursor-pointer "
        >
          <SignedIn>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant={"default"}
                  size="sm"
                >
                  <PlusIcon />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
                      Add to Collection
                    </span>
                  </DialogTitle>
                  <DialogDescription>
                    Write a note about this book
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-3">
                  <label htmlFor="note" className="text-left">
                    Note
                  </label>
                  <Input 
                    id="note"
                    type="text"
                    defaultValue={collection.note}
                    placeholder="Write a note about this book"
                    onChange={handleChangeNote}
                    className="focus-visible:ring-transparent"
                  />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button 
                      className="hover:bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
                      onClick={addToCollection}
                      type="submit"
                    >
                      Add to Collection
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          
          </SignedIn>
        </div>
      )}

      {pathname === "/collection" && (
        <div 
        className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-sm text-white cursor-pointer "
        >
          <SignedIn>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant={"default"}
                  size="sm"
                >
                  <MinusIcon />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-bold">
                      Delete from Collection
                    </span>
                  </DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete this book from your collection?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <div className="flex flex-row gap-4 items-center justify-center">
                      <Button variant={"ghost"}>
                        Cancel
                      </Button>
                      <Button 
                        variant={"destructive"}
                        onClick={deleteFromCollection}
                      >
                        Yes, Im Sure!
                      </Button>
                    </div>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          
          </SignedIn>
        </div>
      )}
      
      <div className="w-[175px] max-h-[175px] flex justify-center">
        <Image 
          src={thumbnail}
          alt={title}
          width={175}
          height={175}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h5 className="text-center text-[14px] font-medium">{truncatedTitle}</h5>
        <p className="text-center text-[12px]">{truncatedAuthor}</p>
        <p className=" text-center text-[10px] text-slate-400">{truncatedDescription}</p>
      </div>
      <p className="text-center text-[14px] mt-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent hover:font-medium">#{categories}</p>
    </div>
  )
}

export default BookCard