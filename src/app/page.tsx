

import Link from "next/link";
import about from "../../image/about.avif"
import Image from "next/image";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
export default function Home() {

  return (
    <div>
     <Hero/>

    <div id="about" className="text-3xl p-44 flex justify-around gap-20 bg-gray-500">
      <Image src={about} alt="about image" className="w-80 h-80"/>
      <div>
    <h1 className="text-2xl" >ABOUT PAGE</h1>
    <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae debitis, obcaecati magni, reiciendis veritatis itaque culpa beatae asperiores perspiciatis similique iusto iure harum perferendis ab. Ducimus minus error optio?
    Sint soluta, fuga temporibus, iure cumque dolores dicta, atque quod neque iste quia id facere distinctio earum mollitia. Ut aliquid corrupti ullam laborum blanditiis sit debitis perspiciatis quos quas corporis!</p>
    </div>

    </div>

<h1 id="service" className="text-5xl p-44 text-center bg-slate-600">Services PAGE</h1>
<div id="project" className="h-[600px] bg-gray-300 ">
<h1 className="text-4xl text-center pt-32 font-serif">-Portfolio-</h1>
<div className="w-full h-96 flex justify-around items-center text-white">
  <div className="w-72 bg-slate-500 h-44 text-center pt-2 "><h3>Project-1</h3><p className="text-sm pt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ab. Nostrum maiores eos cum quis eaque voluptate amet nesciunt obcaecati esse voluptates, aut deleniti inventore possimus quos, molestiae tenetur sequi.</p></div>
  <div  className="w-72 bg-slate-500 h-44 text-center pt-2"><h3>Project-2</h3><p className="text-sm pt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ab. Nostrum maiores eos cum quis eaque voluptate amet nesciunt obcaecati esse voluptates, aut deleniti inventore possimus quos, molestiae tenetur sequi.</p></div>
  <div  className="w-72 bg-slate-500 h-44 text-center pt-2"><h3>Project-3</h3><p className="text-sm pt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ab. Nostrum maiores eos cum quis eaque voluptate amet nesciunt obcaecati esse voluptates, aut deleniti inventore possimus quos, molestiae tenetur sequi.</p></div>
</div>
</div>
<h1 id="contact" className="text-5xl p-44 text-center bg-neutral-500">Contact PAGE</h1>
<Footer/>
     {/* <About/>
     <Services/>
     <Feedback/>
     <Contact/> */}
    </div>
  );
}
