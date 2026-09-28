import { Link } from "react-router";
import Menu from "../../components/Menu/Menu";
import { FaPlay, FaPlus } from "react-icons/fa";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";

const filmes_em_alta = [
  {
    titulo: "Oppenheimer",
    categoria: "Drama • História",
    imagem:
      "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=700&q=85",
  },
  {
    titulo: "Interestelar",
    categoria: "Ficção científica",
    imagem:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85",
  },
  {
    titulo: "A Origem",
    categoria: "Ação • Suspense",
    imagem:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=85",
  },
  {
    titulo: "Duna",
    categoria: "Aventura • Fantasia",
    imagem:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=85",
  },
];

function Home() {
  return (
    <>
      <Menu />
      <main className={styles.conteiner_home}>
        <section className={styles.banner_principal}>
          <div className={styles.conteudo_banner}>
            <span className={styles.etiqueta}>EM DESTAQUE</span>
            <h1>O cinema que vive em você.</h1>
            <p className={styles.descricao_banner}>
              Explore histórias que atravessam universos, descubra novos
              favoritos e encontre seu próximo filme inesquecível.
            </p>
            <div className={styles.informacoes_filme}>
              <span>2024</span>
              <span>16</span>
              <span>2h 46min</span>
              <span>Drama</span>
            </div>
            <div className={styles.acoes_banner}>
              <button className={styles.botao_assistir} type="button">
                <FaPlay />
                Assistir agora
              </button>
              <button className={styles.botao_lista} type="button">
                <FaPlus />
                Minha lista
              </button>
            </div>
          </div>
        </section>

        <section className={styles.secao_filmes}>
          <div className={styles.cabecalho_secao}>
            <div>
              <span className={styles.etiqueta}>DESCUBRA</span>
              <h2>Em alta no CineVerso</h2>
            </div>
            <Link className={styles.ver_todos} to="/explore">
              Ver todos
            </Link>
          </div>
          <div className={styles.grade_filmes}>
            {filmes_em_alta.map((filme) => (
              <article className={styles.card_filme} key={filme.titulo}>
                <img src={filme.imagem} alt={`Pôster de ${filme.titulo}`} />
                <div className={styles.dados_filme}>
                  <h3>{filme.titulo}</h3>
                  <p>{filme.categoria}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
