import { Metadata } from 'next';
import styles from './about.module.css';

export const metadata: Metadata = {
    title: 'About',
    description: 'About page'
}


export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>    
            <nav>About NavBar</nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}