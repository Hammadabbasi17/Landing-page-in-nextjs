import Link from "next/link";

export default function Header(){
    return(
        <div>
          <div className="flex justify-between align-middle w-100% p-7 bg-purple-800 text-white fixed w-full">
          <Link href={"/"}>
          <h2>Hamm<span className="text-black">AD</span></h2>
          </Link>
        

          <ul className="flex gap-5 ">
            <Link className="hover:text-pink-300 transition-all 0.5s hover:underline" href={"/"}><li>Home</li></Link>
            <Link className="hover:text-pink-300 hover:underline" href={"#about"}><li>About</li></Link>
            <Link  className="hover:text-pink-300 hover:underline" href={"#service"}><li>Services</li></Link>
            <Link className="hover:text-pink-300 hover:underline" href={"#project"}><li>Portfolio</li></Link>
            <Link className="hover:text-pink-300 hover:underline" href={"#contact"}><li>Contact</li></Link>
          </ul>
          </div>
            

          

        </div>
    )
}