import { FaLinkedin } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { handleclickPortfolio, handleClickLkd } from "../utils";

export default function Info() {
  return (
    <section className="content">
      <img src="src/assets/Avatar_3.jpeg" />
      <div className="info">
        <h1>Sabrina Amaral</h1>
        <h2>Frontend Developer</h2>
        <div className="btn-container">
          <button onClick={handleclickPortfolio}>
            <FaFolderOpen
              style={{ marginRight: "8px", height: "16px", width: "16px" }}
            />
            Portfolio
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
