import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/" style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}>
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
