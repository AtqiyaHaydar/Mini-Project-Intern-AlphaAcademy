import Image from "next/image"
import Library from "@/public/library.jpg"

const Hero = () => {
  return (
    <div className="wrapper mt-[115px]">
      <div className="w-full mx-auto">
        <Image 
          src={Library}
          alt="My Book Collection"
          className="w-full max-h-[550px] bg-cover rounded-lg"
        />
      </div>
    </div>
  )
}

export default Hero