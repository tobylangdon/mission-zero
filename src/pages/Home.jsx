import Navbar from "../components/Navbar";
import styles from "./Home.module.css";
import testImg from "../assets/test.png";
import DisplayBoxes from "../components/DisplayBoxes";
import heroImg from "../assets/hero.jpg";
import secondImg from "../assets/2.png";
import thirdImg from "../assets/3.jpg";

export default function Home() {
    return (
        <div>
            <Navbar />
            <section className={styles.heroSection}>
                <div className={styles.heroImage} style={{ backgroundImage: `url(${heroImg})` }}></div>
                <div className={styles.heroContainer}>
                    <p className={styles.heroText}>My Life As A LEGO Man</p>
                    <div className={styles.searchbar}>
                        <input type="text" />
                        <button>SEARCH</button>
                    </div>
                </div>
            </section>
            <section className={styles.boxSection}>
                <div className={styles.boxWrapper}>
                    <DisplayBoxes title="First title" description={"A description through a prop"} image={testImg} />
                    <DisplayBoxes title="First title" description={"A description through a prop"} image={thirdImg} />
                    <DisplayBoxes title="First title" description={"A description through a prop"} image={secondImg} />
                    {/* <DisplayBoxes />
                    <DisplayBoxes /> */}
                </div>
            </section>
        </div>
    );
}
