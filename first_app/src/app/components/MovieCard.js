import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";

const Moviecard = ({ imdbData }) => {
  const { id, rank, title, thumbnail, image, genre, rating, year, director, description } = imdbData;
  //console.log("hello");
  return (
    <>
      <div className={styles.card} >
        <div className={styles.card_image} >
          {/* <Image src={thumbnail} alt={title} width={100} height={148} /> */}
          <Image src={image} alt={title} width={260} height={200} />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0, 20)}</h2>
          <h3>Directed By: {director}</h3>
          <h4>Genre: {genre}</h4>
          <p>{`${description.substring(0, 66)} ...`}</p>
          <Link href={`/movie-api/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Moviecard
