import { truncateDescription } from "@/lib/utils"
import { IBookCardProps } from "@/types"
import Image from "next/image"
import PlusIcon from "./icons/PlusIcon"
import { usePathname } from "next/navigation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useToast } from "./ui/use-toast"
import { Button } from "./ui/button"
import { SignedIn, useUser } from "@clerk/nextjs"

const BookCard = ({ 
  author, 
  title, 
  categories, 
  description, 
  thumbnail 
}: IBookCardProps) => {
  const { toast } = useToast()
  const pathname = usePathname()
  const user = useUser()

  const truncatedTitle = truncateDescription(title)
  const truncatedAuthor = truncateDescription(author)
  const truncatedDescription = truncateDescription(description)

  const addCollection = () => {
    toast({
      title: "Book Added",
      description: "The book successfully added to your collection.",
    })
  }

  return (
    <div className="border-2 border-slate-200 min-w-[200px] min-h-[400px] rounded-lg shadow-md px-4 py-2 flex flex-col items-center gap-4 hover:scale-105 transition-all">
      
      {user && pathname === "/" && (
        <div 
        className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-sm text-white cursor-pointer "
        >
          <SignedIn>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button 
                    variant={"default"}
                    onClick={addCollection}
                    size="sm"
                  >
                    <PlusIcon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold p-2 rounded-sm transition-all">Add To Collection</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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