// import { useLocation, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { NavLink as Link } from "react-router-dom";

// samane wie verwindet mit die pages;
export default function programs() {
  // const location = useLocation();
  // const params = useParams();
  // console.log("Params", location, params);

  return (
    <>
      <Link
        to="/programs"
        className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
      >
        Programs
      </Link>
      <Link
        to="/programs"
        className={({ isActive }) =>
          isActive ? "stroke-red-900" : "font-normal"
        }
      >
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8562 2.29347L2.47977 9.47202C1.98545 9.85046 1.69556 10.4375 1.69556 11.0601L1.69556 17.0178L1.69556 21.6372C1.69556 22.7418 2.59099 23.6372 3.69556 23.6372L7.43398 23.6372C8.53855 23.6372 9.43398 22.7418 9.43398 21.6372L9.43398 16.6504C9.43398 15.5458 10.3294 14.6504 11.434 14.6504L14.4023 14.6504C15.5069 14.6504 16.4023 15.5458 16.4023 16.6504L16.4023 21.6372C16.4023 22.7418 17.2978 23.6372 18.4023 23.6372L22.4485 23.6372C23.5531 23.6372 24.4485 22.7418 24.4485 21.6372L24.4485 11.0601C24.4485 10.4375 24.1586 9.85046 23.6643 9.47202L14.2878 2.29347C13.5704 1.74418 12.5737 1.74418 11.8562 2.29347Z"
            // stroke="#3A4151"
            stroke-width="2"
          />
        </svg>
      </Link>
      {/* <NavLink to="/">home</NavLink> */}
      <br />
      {/* <NavLink to="/programs">programs</NavLink> */}
      <br />
      <a href={`/program/1`}>program 1</a>
      <br />
      <a href={`/program/2`}>program 2</a>
      <br />
      <Navbar />
    </>
  );
}
