import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-container">
      <FaTwitterSquare className="icon" />
      <FaInstagramSquare className="icon" />
      <FaGithubSquare className="icon" />
    </div>
  );
}
