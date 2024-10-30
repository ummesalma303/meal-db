import { useLoaderData } from "react-router-dom";
// {
//     "idCategory": "14",
//     "strCategory": "Goat",
//     "strCategoryThumb": "https://www.themealdb.com/images/category/goat.png",
//     "strCategoryDescription": "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese."
// }
const ProductDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className="card">
            {/* <h1>{ data.categories.length}</h1> */}
            {
                data.meals.map(card => (
                    <div  key={card.idMeal}>
                         <img src={card.strMealThumb} alt="" />
                        <h2>{card.strMeal}</h2>
                        <h3>{card.strArea}</h3>
                        <p style={{ width: '60%', margin: '0 auto' }}>{card.strInstructions}</p>
                        <button style={{margin:'20px 0'}}>Go Back</button>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductDetails;