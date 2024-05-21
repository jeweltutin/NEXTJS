import Link from "next/link";
import styles from './about.module.css';

function About () {
  //throw new Error('Not today!');
  return (
    <>
        <h1>About</h1>
        <p  className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur excepturi minima fugit vero deleniti repellendus at, ratione, numquam temporibus, 
          tempora sequi nulla? Enim magni quas qui rerum iusto aperiam. Cum?
        </p>
        <p  className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur excepturi minima fugit vero deleniti repellendus at, ratione, numquam temporibus, 
          tempora sequi nulla? Enim magni quas qui rerum iusto aperiam. Cum?
        </p>
        <p  className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur excepturi minima fugit vero deleniti repellendus at, ratione, numquam temporibus, 
          tempora sequi nulla? Enim magni quas qui rerum iusto aperiam. Cum?
        </p>
        <p  className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur excepturi minima fugit vero deleniti repellendus at, ratione, numquam temporibus, 
          tempora sequi nulla? Enim magni quas qui rerum iusto aperiam. Cum?
        </p>
        
        <Link href="/">Link to Home page</Link>
    </>
  )
}

export default About
