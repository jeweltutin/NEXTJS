import Link from "next/link";
import styles from './about.module.css';
import Button01 from '@/components/button';

function About() {
  //throw new Error('Not today!');
  return (
    <>
      <h3 className="bg-success text-white p-1">About</h3>
      <p className={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur excepturi minima fugit vero deleniti repellendus at, ratione, numquam temporibus,
        tempora sequi nulla? Enim magni quas qui rerum iusto aperiam. Cum?
      </p>
      <p className={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur excepturi minima fugit vero deleniti repellendus at, ratione, numquam temporibus,
        tempora sequi nulla? Enim magni quas qui rerum iusto aperiam. Cum?
      </p>
      <p className={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur excepturi minima fugit vero deleniti repellendus at, ratione, numquam temporibus,
        tempora sequi nulla? Enim magni quas qui rerum iusto aperiam. Cum?

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur excepturi minima fugit vero deleniti repellendus at, ratione, numquam temporibus,
        tempora sequi nulla? Enim magni quas qui rerum iusto aperiam. Cum?
      </p>
      <div className="row">
        <div className="col-md-6">
          <p className={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam rerum cupiditate sunt ipsa vel voluptas soluta amet omnis vero debitis,
            accusantium atque harum quidem recusandae quasi beatae et nisi.
          </p>
          <Button01></Button01>
        </div>
        <div className="col-md-6">
          <p className={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam rerum cupiditate sunt ipsa vel voluptas soluta amet omnis vero debitis,
            accusantium atque harum quidem recusandae quasi beatae et nisi.
          </p>
          <button type="button" className="btn btn-outline-primary btn-sm">Click me</button>
          
        </div>

      </div>



      <Link href="/">Link to Home page</Link>

    </>
  )
}

export default About
