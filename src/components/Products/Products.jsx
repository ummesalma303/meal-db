import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    const cards = useLoaderData();
    return (
        <div className="card-container">
            {
              cards.meals.map((card)=><Product key={card.idMeal} card={card}></Product>)  
            }
        </div>
    );
};

export default Products;