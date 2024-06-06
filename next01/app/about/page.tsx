import Link from "next/link";
import styles from './about.module.css';
import Button01 from '@/components/button';
import Image from "next/image";

import thumb from "@/public/assets/images/hot-deal-icon.png";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ['cyrillic'], weight: "400" });

import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ['devanagari'], weight: "400" });

function About() {
  //throw new Error('Not today!');
  return (
    <div className={poppins.className}>
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
        <h4 className="text-center p-4">We have 2 sections here</h4>
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
          <div style={{ width: 200, color: 'red'}} className="w-[200px] p-4">
            My Image
            <Image placeholder="blur" src={thumb} alt="thumb" width={200}></Image>
          </div>
        </div>
      </div>



      <Link href="/">Link to Home page</Link>

    </div>
  )
}

export default About
