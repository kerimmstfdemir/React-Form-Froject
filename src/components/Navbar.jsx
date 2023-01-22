import { Link } from "react-router-dom"

const Navbar = () => {
    return (

        <div>
            <nav className="relative w-full flex items-center justify-center py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg mx-auto">
                <div className="container w-full flex  items-center justify-center gap-20">
                    <div>
                        <Link
                            className="text-xl   text-black font-semibold"
                            to="/home/product"
                        >
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link
                            className="text-xl   text-black font-semibold"
                            to="/home/contact"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar