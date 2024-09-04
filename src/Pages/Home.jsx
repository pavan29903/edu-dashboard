import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"


export const Home = () => {
    return (    
        
        <div className="">
        <Header/>
        <div className="flex sm:flex-row">
        <div className="h-[400px]  ml-[200px]">
        <div>
            <div className="mt-[300px] ">
                <div className="text-left ">
                <p className="text-[20px] ml-[20px] ">Discover,Choose,Succeed</p>
                <p className="text-[60px]">CRAFT YOUR FUTURE</p>
                <p className="text-[55px] "> DISCOVER YOUR PERFECT JOURNEY</p>
                </div>
            </div>
         </div>
         <div className="h-[100px] w-[800px]">
            <p className="text-[15px]"><span>&#8226; </span> 
             Welcome to *something where we guide for explaring and choosing 
                future pathways.Our platform offers comprehensive insights into diverse educational & career oppurtunities,
                helping you make informed decisions about your next steps</p>
         </div>
         <div className="ml-[100px] mt-[50px]">
            <button type="button" class="text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Get Started</button>
            </div>
         </div> 
         <div className="w-[600px] h-[600px] mt-[250px] ml-[150px]  rounded-lg">
            <img  src="/bg2.png" alt=""  className=""/>

         </div>
         </div>
         <Footer/>
        </div>
    )
}