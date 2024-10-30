import { useLoaderData } from "react-router-dom";

const Products = () => {
    const card = useLoaderData();
    console.log(card);
    // const { strMeal } = card;
    return (
        <div>
            <h2></h2>
            <h2>Total card: {card.length}</h2>
        </div>
    );
};

export default Products;