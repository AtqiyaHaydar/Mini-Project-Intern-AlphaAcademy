import Image from "next/image"
import Library from "@/public/library1.svg"

const Hero = () => {
  return (
    <div className="wrapper mt-[115px]">
      <div className="w-full mx-auto">
        <Image 
          src={Library}
          alt="My Book Collection"
          className="rounded-lg min-w-full object-cover h-[350px]"
        />
      </div>
    </div>
  )
}

export default Hero