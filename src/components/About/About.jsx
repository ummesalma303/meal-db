import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate =useNavigate()
    const handleButton = () => {
        navigate('/products')
    }
    return (
        <div className="content" style={{margin:'182px 0'}}>
            <h2>Hi I Am About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati reiciendis aliquam fugiat eveniet vero deleniti mollitia atque ea! Iusto quae officia suscipit facilis! Libero cupiditate et porro nisi repellendus voluptatibus!</p>
            <button style={{borderRadius:'5px'}} onClick={handleButton}>Products</button>
        </div>
    );
};

export default About;