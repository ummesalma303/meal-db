import { NavLink } from "react-router-dom";
import '../../App.css'
const Nav = () => {
    return (
        <div className="nav">
            <h2>Tasty HUT</h2>
            <div className="navlink">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/products'>Products</NavLink>
            </div>
            <button>Sign in</button>
        </div>
    );
};

export default Nav;