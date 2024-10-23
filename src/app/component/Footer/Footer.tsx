export default function Footer(){
    return(
        <div>
            <section className="w-full h-60 bg-gray-700 text-white flex justify-around items-center">
                <div><h1>Footer section</h1></div>
                 
                 <div>
                    <h1>Company</h1>
                    <p className="text-[11px]">Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Exercitationem blanditiis<br/> placeat iste quo ab quidem eaque amet esse vitae.</p>
                </div>
                
                <div>
                    <h1>Product</h1>
                    <p className="text-[11px]">Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Exercitationem blanditiis<br/> placeat iste quo ab quidem eaque amet esse vitae.</p>
                </div>

                <div>
                    <button className="border-solid border-2 text-[18px] p-2 w-32 hover:bg-gray-50 hover:text-black">Download</button>
                </div>
                
                </section>
        </div>
    )
}