import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { handleclickEmail, handleClickLkd } from "../utils";

export default function Info() {
  return (
    <section className="content">
      <img src="src/assets/Avatar_3.jpeg" />
      <div className="info">
        <h1>Sabrina Amaral</h1>
        <h2>Frontend Developer</h2>
        <a
          href="https://sabrinamaral.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          sabrinamaral website
        </a>
        <div className="btn-container">
          <button onClick={handleclickEmail}>
            <MdEmail
              style={{ marginRight: "8px", height: "16px", width: "16px" }}
            />
            Email
          </button>
          <button onClick={handleClickLkd} className="lkd">
            <FaLinkedin
              style={{
                color: "white",
                marginRight: "8px",
                height: "16px",
                width: "16px",
              }}
            />
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
}
