import {Link} from "react-router-dom";

export default function NavigationComponent() {
    return (
        <nav>
            <h3>Navigation</h3>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    );
}
