import Image from "next/image"
import{FaSquareInstagram} from 'react-icons/fa'
import{FcLike,FcGoogle} from 'react-icons/fc'
import style from './fruit.module.css'

export default function Fruits({list}) {
    const fruitlist = list.map(fruit =>(
        <section key= {fruit.id} className={`pt-4 ${style.section}`}>
            <Image src= {fruit.image}  alt={fruit.name} width={300} height={300}/>
         
            <h2 className="text-white bg-red-400 rounded-md w-[100px] mt-3 text-center">{fruit.name}</h2>
            <h2>{fruit.botanicalName}</h2>
            <h2>{fruit.season}</h2>
          
            <div className="grid grid-cols-2">
            <FaSquareInstagram/>
            <FcLike/>
            <FcGoogle/>
            </div>
        </section>
    ))
  return (
    <div className="grid grid-cols-3 gap-3 bg-slate-500">
        {fruitlist}
        </div>
  )
}
