import styles from "./DisplayBoxes.module.css";

export default function DisplayBoxes({ image, title, description }) {
    return (
        <div className={styles.boxContainer}>
            <div className={styles.boxImage} style={{ backgroundImage: `url(${image})` }}>
                {/* <img src={image} /> */}
            </div>
            <div className={styles.boxInfo}>
                <h4>{title ? title : "Title"}</h4>
                <p>{description ? description : "A small description of thing"}</p>
            </div>
        </div>
    );
}
