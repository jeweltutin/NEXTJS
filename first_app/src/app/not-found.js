//rafce
import styles from "@/app/styles/common.module.css"
import Link from 'next/link'
 
//https://nextjs.org/docs/app/api-reference/file-conventions/not-found

export default function NotFound() {
  return (
    <section className={styles.container}>
        <div className={styles.error_page}>
            <h1>404</h1>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
      </div>
    </section>
  )
}