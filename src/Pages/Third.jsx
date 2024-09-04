import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export const Third = () => {
    

    // const handleCardClick = (path) => {
    //     
    // };

    return (
        <div className="">
            <Header />
            <div className="">
                <div className="flex-row h-screen content-center pt-16 pb-16">
                    <div className="text-center mb-[100px]">
                    <div className="font-medium text-6xl">Explore Your Categories</div>
                    </div>
                    <div className="flex justify-around space-x-4">
                    
                        <div 
                            className=" w-[350px] h-[350px] bg-white rounded-lg shadow-lg flex flex-col items-center p-4 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            // onClick={() => handleCardClick()}
                        >
                            <div className="w-full h-full rounded mb-4 truncate">
                                <img 
                                    src="/education.jpeg" 
                                    alt="education" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-2xl font-medium">Education</p>
                        </div>

                    
                        <div 
                            className="w-[350px] h-[350px] bg-white rounded-lg shadow-lg flex flex-col items-center p-4 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            // onClick={() => handleCardClick()}
                        >
                            <div className="w-full h-full rounded mb-4 truncate">
                                <img 
                                    src="/sports.jpeg" 
                                    alt="sports" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-2xl font-medium">Sports</p>
                        </div>

                        
                        <div 
                            className="w-[350px] h-[350px] bg-white rounded-lg shadow-lg flex flex-col items-center p-4 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            // onClick={() => handleCardClick()}
                        >
                            <div className="w-full h-full rounded mb-4 truncate">
                                <img 
                                    src="/travel.jpeg" 
                                    alt="other" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-2xl font-medium">Others</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
