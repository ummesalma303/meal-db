import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const data = useLoaderData();
    // console.log(data)
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className="card">
            {
                data.meals.map(card => (
                    <div  key={card.idMeal}>
                         <img src={card.strMealThumb} alt="" />
                        <h2>{card.strMeal}</h2>
                        <h3>{card.strArea}</h3>
                        <p style={{ width: '60%', margin: '0 auto' }}>{card.strInstructions}</p>
                        <button onClick={handleBack} style={{margin:'20px 0'}}>Go Back</button>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductDetails;