import { IMG_URL } from "../utils/constants";
import logo from "../Assets/hindgrecoLogo.png"
const Body = () => {
    return (
        <div>
            <div className="flex items-center m-4 p-4">
            <div className="m-4 p-4">
                <img className="" src={logo} ></img>
            </div>
            <div className="m-8 p-8 flex">
               <div>
                <p className="font-bold text-5xl">It's Your World </p>
                </div>
               <div className="text-xl items-center my-5">
                <div className="">
                 <p className="">Hindustan Green Company stands at the forefront of</p>
                 <p>technology-driven waste management, bringing together</p>
                 <p>expertise in engineering, AI, and data analytics. Our holistic</p>
                 <p>approach not only ensures safe disposal but also focuses on</p>
                 <p>generating employment, enhancing ecological balance, and</p>
                 <p>creating a resilient business ecosystem.</p>
                 </div>
                 </div>
                 <div className="">
                    <button className="px-4 py-2 border-solid rounded-lg border-2 bg-blue-600 text-white">Learn More</button>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Body;