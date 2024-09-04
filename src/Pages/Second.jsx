import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export const Second = () => {
    return (
        <div className="">
            <Header />

            <div className="pt-16 ">
                <div className="flex w-screen content-center h-[500px] bg-slate-800">
                    <div className="text-center">
                        <img src="/nobg.png" alt="" />
                    </div>
                    <div className="pl-16 content-center">
                        <p className="text-6xl font-medium text-[#D8BFD8]">Explore</p>
                        <p className="text-6xl font-medium text-[#D8BFD8]">Our categories</p>
                        <p className="text-xl font-medium text-[#D8BFD8]">craft your journey</p>
                    </div>
                </div>

                
                <div className="w-screen flex justify-center py-8">
                    <p className="text-4xl font-medium text-red-400">Select your current graduation</p>
                </div>
                <div className="w-screen flex justify-center py-2">
                    <p className="text-2xl font-medium text-gray-600"> Just Like 100’s of student,you can also choose the right career option based on your interest</p>
                </div>

            </div>

            <div className="pt-16 pb-16 ">
                <div className="flex justify-around ">
                    <div className="w-[250px] h-[350px] bg-white rounded-lg shadow-xl flex flex-col items-center p-4">
                        <div className="bg-green-400 rounded mb-4">
                            <img src="/tenth.jpeg" alt="" />
                        </div>
                        <p className="text-2xl font-medium mb-2">10th</p>
                        <div className="px-4 w-[250px] h-[350px] items-start">
                        <p className="text-md font-medium mb-2 text-gray-400">Choose your path after 10th</p>
                        <p className="text-md font-medium mb-2 text-gray-400">Plan your future steps</p>
                        {/* <p className="text-md font-medium mb-2 text-gray-400">choosing for inter</p> */}
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-auto">
                            Select
                        </button>
                    </div>
                    <div className="w-[250px] h-[350px] bg-white rounded-lg shadow-lg flex flex-col items-center p-4">
                        <div className="bg-green-400 rounded mb-4">
                            <img src="/twelve.jpeg" alt="" />
                        </div>
                        <p className="text-2xl font-medium mb-2">12th</p>
                        <div className="px-4 w-[250px] h-[350px] items-start">
                        <p className="text-md font-medium mb-2 text-gray-400">Explore options after 12th</p>
                        <p className="text-md font-medium mb-2 text-gray-400">Guide your next move</p>
                        {/* <p className="text-md font-medium mb-2 text-gray-400">choosing for inter</p> */}
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-auto">
                            Select
                        </button>
                    </div>
                    <div className="w-[250px] h-[350px] bg-white rounded-lg shadow-lg flex flex-col items-center p-4">
                        <div className=" bg-green-400 rounded mb-4">
                            <img src="/grad.jpeg" alt="" />
                        </div>
                        <p className="text-2xl font-medium mb-2">Graduation</p>
                        <div className="px-4 w-[250px] h-[350px] items-start">
                        <p className="text-md font-medium mb-2 text-gray-400">Select your career after graduation</p>
                        <p className="text-md font-medium mb-2 text-gray-400">Shape your future path</p>
                        {/* <p className="text-md font-medium mb-2 text-gray-400">choosing for inter</p> */}
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-auto">
                            Select
                        </button>
                    </div>
                </div>
                {/* <div className="basis-1/4"></div> */}
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};
