import { useState } from "react";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <header className={styles.conteiner_menu}>
        <img
          className={styles.img_logo}
          src="src/assets/favicon.svg"
          alt="Uma Claquete com o um play escrito cineverso"
        />
        <div className={styles.conteiner_link}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/explore">
            Explore
          </Link>
          <Link className={styles.link} to="/movies">
            Movies
          </Link>
          <Link className={styles.link} to="/series">
            Series
          </Link>
          <Link className={styles.link} to="/favoritos">
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

export default Home;
