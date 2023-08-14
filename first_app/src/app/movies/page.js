
import styles from "@/app/styles/common.module.css"
import Image from "next/image";

const Movie = async () => {
    const getAllMoviesApi = 'http://localhost:5000/api/movies';
    const res = await fetch(getAllMoviesApi);
    const data = await res.json();
    //console.log(data);
    return (
        <section className={styles.movieSection}>
            <div className={styles.container}>
                <h2>Movie List</h2>
                <div className={styles.card_section}>
                    {
                        data.map((movData) => (

                            <div className={styles.card} >
                                <div className={styles.card_image} >
                                    {/* <Image src={thumbnail} alt={title} width={100} height={148} /> */}
                                    <Image src={movData.poster} alt={movData.title} width={260} height={200} />
                                </div>
                                <div className={styles.card_data}>
                                    <h2>{movData.title}</h2>
                                    <h3>Directed By: {movData.director}</h3>
                                    <h4>Genre: {movData.genre}</h4>
                                    <p>{movData.description}</p>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Movie
