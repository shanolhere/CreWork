import banner from "../assets/banner.png"
import {Link} from "react-router-dom";

const AppHome = ({userName}) => {
    return (
        <div className="container mx-auto m-2 py-2 flex flex-col gap-2 justify-center items-center lg:flex-row">
            <div className="flex flex-col gap-4 justify-center items-start p-2 m-2 mx-2 ">
                <p className="text-3xl font-bold my-2">A one shop stop for all your shopping.</p>
                <p className="text-4xl font-bold my-2">We, at <span className="bg-sky-500 text-white rounded-md px-0.5 text-3xl align-middle"> FakeStore </span> offers you a wide range of popular products.</p>
                {/* <p className="text-3xl font-bold my-2">A one shop stop for all your shopping.</p> */}
                <p className="text-2xl font-bold my-2">Check out the popular products we have to offer!</p>
                {userName && <Link to ="/products"><button className="bg-sky-500 my-2">Browse Products</button></Link>}
                {!userName && <Link to ="/login"><button className="bg-sky-500 my-2">Browse Products</button></Link>}
            </div>
            <div className="banner m-2">
               <img src={banner} alt="banner" className="banner " />
            </div>
        </div>
    )
}

export default AppHome;