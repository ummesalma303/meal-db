import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
const Product = ({ card }) => {
    // console.log(card)
    const {idMeal,strMeal,strMealThumb,strArea} = card;

    const navigate = useNavigate();
    const HandleButton = () => {
        navigate('/')
    }

    const HandleSowDetails = () => {
        navigate(`/product/${idMeal}`)
    }
    return (
        <div className='card'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <h4>{ strArea}</h4>
            <button onClick={HandleButton}>Home</button>
            <NavLink to={`/product/${idMeal}`}><button>details</button></NavLink>
            <button onClick={HandleSowDetails}>Show Details</button>

        </div>
    );
};

Product.propTypes = {
    card:PropTypes.object.isRequired
};

export default Product;