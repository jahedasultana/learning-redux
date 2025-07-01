import Logo from "@/assets/Logo";
import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">  
            
        <div className="flex items-center">
         <Logo></Logo><span className="font-bold ml-2">Tesk</span>Master
        </div>
        <Link to="/users">Users</Link>
        <Link to="/tasks">Tasks</Link>
        </nav>

    );
};

export default Navbar;