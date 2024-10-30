import { Outlet, useNavigation,useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Spinner from "../Spinner/Spinner";

const Header = () => {
    const navigation = useNavigation()
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <Nav></Nav>
            {
                navigation.state === "loading" ?<Spinner></Spinner>:<Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Header;