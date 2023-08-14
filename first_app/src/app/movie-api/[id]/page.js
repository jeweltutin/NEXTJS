import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import { resolve } from "styled-jsx/css";

const Page = async ({ params }) => {
  //await new Promise( executor:resolve => setTimeout(resolve, timeout: 2000) );  // not working 
  //Solve source https://javascript.info/promise-basics
  // Loading css source https://loading.io/css/

  let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 2000);
  });

  const id = params.id;
  const url = `https://imdb-top-100-movies.p.rapidapi.com/?id=${id}`;
  //const url = 'https://imdb-top-100-movies1.p.rapidapi.com/?id=top13';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b827a9f6b7mshffba4a3aff162d6p14f816jsn20b212822692',
      'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  //console.log(data.image[0][1]);
  //console.log(data);
  return (
    <div className={styles.container} >
        <h3 className={styles.movie_title}> IMBD \ <span> Rank: {data.rank}</span> </h3>
        <div className={styles.card_image} >
          {/* <Image src={data.image[0][1]} alt={data.title} width={data.image[0][0]} height={148} /> */}
          <Image src={data.image[2][1]} alt={data.title} width={data.image[2][0]} height={148} />
        </div>
        <div className={styles.card_data}>
          <h2>{data.title}</h2>
          <h3>Directed By: {data.director}</h3>
          <h4>Genre: {data.genre}</h4>
          <p>{data.description}</p>

        </div>
      </div>
  )
}

export default Page
