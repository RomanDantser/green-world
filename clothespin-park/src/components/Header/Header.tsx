import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <Link to='/' className="main-link">ПАРК ПРИЩЕПКА</Link>
      <div></div>
    </header>
  );
}
