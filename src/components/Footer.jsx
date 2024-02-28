import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div id="footer">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="random">Random Color</Link>
      </div>
    </>
  );
}
export default Footer;
