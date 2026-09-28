import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.rodape}>
        <div className={styles.conteiner_rodape}>
          <div className={styles.apresentacao_rodape}>
            <img
              className={styles.logo_rodape}
              src="src/assets/favicon.svg"
              alt="Logo CineVerso"
            />
            <p>O seu universo de filmes, séries e histórias inesquecíveis.</p>
            <div className={styles.redes_sociais}>
              <a href="#instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#twitter" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#youtube" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#facebook" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div className={styles.coluna_rodape}>
            <h3>Explorar</h3>
            <Link to="/explore">Todos os filmes</Link>
            <Link to="/series">Séries</Link>
            <Link to="/favoritos">Minha lista</Link>
          </div>
          <div className={styles.coluna_rodape}>
            <h3>CineVerso</h3>
            <Link to="/sobre">Sobre nós</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/ajuda">Central de ajuda</Link>
          </div>
          <div className={styles.coluna_rodape}>
            <h3>Legal</h3>
            <Link to="/privacidade">Privacidade</Link>
            <Link to="/termos">Termos de uso</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
        <div className={styles.linha_rodape}>
          <span>© 2026 CineVerso. Todos os direitos reservados.</span>
          <span>Feito para quem ama cinema.</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
