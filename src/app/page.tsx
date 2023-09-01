import Link from "next/link";
import  {FiSun} from  "react-icons/fi";
import {AiOutlineException} from "react-icons/ai"

export default function Home() {
  return (
    <main>
      <div className={" flex items-center justify-center mt-[400px]"}>
        <div className={"w-20 h-20 bg-neutral shadow-xl m-10 rounded-full flex justify-center text-gray-300 items-center hover:text-black hover:bg-amber-300 transform transition-transform hover:-translate-y-2"}>
          <Link href={"./clima"} ><FiSun/></Link>
        </div>
        <div className={"w-20 h-20 bg-neutral shadow-xl m-10 rounded-full flex justify-center text-gray-300 items-center  hover:bg-indigo-500 transform transition-transform hover:-translate-y-1"}>
          <Link href={"./cep"}>CEP</Link>
        </div>
        <div className={"w-20 h-20 bg-neutral m-10 shadow-xl rounded-full flex justify-center text-gray-300 items-center   hover:bg-black transform transition-transform hover:-translate-y-1"}>
          <Link href={"./form"}><AiOutlineException/></Link>
        </div>
      </div>
    </main>
  )
}
