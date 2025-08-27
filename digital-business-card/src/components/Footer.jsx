import { HiOutlineMail } from "react-icons/hi";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { handleclickEmail, handleClickLkd } from "../utils";

export default function Footer() {
  return (
    <footer>
      <a onClick={handleclickEmail}>
        <HiOutlineMail
          style={{ color: "#918E9B", height: "25px", width: "25px" }}
        />
      </a>
      <a onClick={handleClickLkd}>
        <IoLogoLinkedin
          style={{ color: "#918E9B", height: "25px", width: "25px" }}
        />
      </a>
      <a
        href="https://github.com/sabrinamaral"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub style={{ color: "#918E9B", height: "25px", width: "25px" }} />
      </a>
      <a
        href="https://sabrinamaral.github.io/portfolio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CgWebsite
          style={{ color: "#918E9B", height: "25px", width: "25px" }}
        />
      </a>
    </footer>
  );
}
