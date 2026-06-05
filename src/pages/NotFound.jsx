import { Link } from "react-router-dom";
import { Arrow } from "../components/Shared.jsx";

export default function NotFound() {
  return (
    <section className="container notfound">
      <div>
        <div className="big">404</div>
        <p>That page wandered off to build a venture somewhere.</p>
        <Link to="/" className="btn btn-primary">
          Back home <Arrow />
        </Link>
      </div>
    </section>
  );
}
