import { Link, useLocation } from "react-router";
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import styles from "./Menu.module.css";

function Menu() {
  const location = useLocation();

  return (
    <>
      <header className={styles.conteiner_menu}>
        <img
          className={styles.img_logo}
          src="src/assets/favicon.svg"
          alt="Uma Claquete com o um play escrito cineverso"
        />
        <div className={styles.conteiner_link}>
          <Link
            className={
              location.pathname === "/" ? styles.link_ativo : styles.link
            }
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              location.pathname === "/explore" ? styles.link_ativo : styles.link
            }
            to="/explore"
          >
            Explore
          </Link>
          <Link
            className={
              location.pathname === "/movies" ? styles.link_ativo : styles.link
            }
            to="/movies"
          >
            Movies
          </Link>
          <Link
            className={
              location.pathname === "/series" ? styles.link_ativo : styles.link
            }
            to="/series"
          >
            Series
          </Link>
          <Link
            className={
              location.pathname === "/favoritos"
                ? styles.link_ativo
                : styles.link
            }
            to="/favoritos"
          >
            Favoritos
          </Link>
        </div>
        <div className={styles.input_busca}>
          <FaSearch className={styles.icones} />
          <input type="text" placeholder="Procure seus filmes aqui..." />
        </div>
        <div className={styles.conteiner_link}>
          <CiUser className={styles.icones} />
          <Link className={styles.link} to="/login">
            Login
          </Link>
          <Link className={styles.link_inscreva_se} to="/inscrevase">
            Inscreva-se
          </Link>
        </div>
      </header>
    </>
  );
}

export default Menu;
