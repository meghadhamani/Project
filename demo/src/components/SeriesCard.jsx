import styles from "./Netflix.module.css";
import styled from "styled-components";

const SeriesCard = ({ data }) => {
    // console.log(props);
    const { name, img_url, rating, description, cast, genre, watch_url } = data;

    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

    // const btn_style = {
    // // const ButtonNetflix=styled.button({ })
    //     padding: "1.2rem 2.4rem",
    //     border: "none",
    //     fontSize: "1.6rem",
    //     backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"} `,
    //     color: "var(--bg-color)",
    //     fontweight:"bold",
    //     cursor:"pointer"
    // };

    const ButtonNetflix=styled.button`
        padding: 1.2rem 2.4rem;
        border: none;
        fontSize: 1.6rem;
        background-color: ${(props)=>props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"} ;
        color: var(--btn-color);
        font-weight:bold;
        cursor:pointer;`;

    return (<li className={styles.card}>
        <div>
            <img src={img_url}
                alt={name}
                width="40%"
                height="40%"
            />
        </div>
        <div className={styles["card-content"]}>
            <h2>Name:{name}</h2>
            <h3>Rating:<span className={`${styles.rating} ${ratingClass}`}>{rating}</span></h3>
            <p>Summary:{description}</p>
            <p>Genre:{genre.join(",")}</p>
            <p>Cast:{cast.join(",")}</p>
            <a href={watch_url} target="_blank">
                {/* <button style={btn_style}> Watch Now </button> */}
                <ButtonNetflix rating={+rating} > Watch Now </ButtonNetflix>
            </a>
        </div>
    </li>);

}

export default SeriesCard;