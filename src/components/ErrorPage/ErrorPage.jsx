import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="content">
             <div id="error-page">
        <h1>Oops!😯</h1>
        <p>Sorry, an unexpected error has occurred.🙏🏼</p>
      </div>
       </div>
    );
}

export default ErrorPage;