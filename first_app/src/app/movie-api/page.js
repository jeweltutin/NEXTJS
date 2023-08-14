
import styles from "@/app/styles/common.module.css"
import Moviecard from "../components/MovieCard";

// Movie data getting from https://rapidapi.com/hub
// IMDB top 100 movies

const Movie = async () => {

    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b827a9f6b7mshffba4a3aff162d6p14f816jsn20b212822692',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    //console.log(data);


    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h2>IMDb Top 100 Movies</h2>
                    <div className={styles.card_section}>
                        {/* {
                            data.map((curElm) => (
                                //  <Moviecard key = {curElm._id} curElm={curElm}/>
                                <Moviecard key = {curElm._id} allData={curElm}/>
                            //  <p>
                            //     {curElm.title}
                            //  </p>
                            ))
                        } */}


                        {
                            data.map((imdbData) => {
                                //return <Moviecard key={imdbData.id} {...imdbData} />  // not working
                                return <Moviecard key={imdbData.id} imdbData={imdbData} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Movie
