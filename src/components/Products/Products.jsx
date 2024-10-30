import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    const cards = useLoaderData();
    // const newCards = card.meals
   console.log(cards)
    return (
        <div className="card-container">
            {/* <h2>{ cards.meals.length}</h2> */}
            {
              cards.meals.map((card)=><Product key={card.idMeal} card={card}></Product>)  
            }
        </div>
    );
};

export default Products;