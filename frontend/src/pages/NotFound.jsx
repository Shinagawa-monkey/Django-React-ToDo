import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h2>404: Task Not Found</h2>
            <p>Our apologies, but this task seems to be on a permanent vacation. We are still under construction, so some features might be a little...lost.</p>
            <p>Go to <Link to="/login">Login Page</Link>.</p>
        </div>
    )
}