import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
    const navigate =useNavigate()
    const error = useRouteError();
    console.log(error);
    const handleButton = () => {
        navigate('/products')
    }
    return (
        <div className="errorPage">
             <div id="error-page">
        <h1>Oops!😯</h1>
                <p>Sorry, an unexpected error has occurred.🙏🏼</p>
                <button onClick={handleButton}>Home</button>
      </div>
       </div>
    );
}

export default ErrorPage;