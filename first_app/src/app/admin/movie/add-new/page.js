'use client'
import { Mulish } from 'next/font/google';
import { redirect } from 'next/navigation';

import styles from "@/app/contact/contact.module.css";
import cstyle from "@/app/styles/common.module.css";


const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})

function handleChange() {

}

async function handleSubmit(e) {
    e.preventDefault()

    const movie = {
        title: e.target.title.value,
        poster: e.target.poster.value,
        rank: e.target.rank.value,
        genre: e.target.genre.value,
        director: e.target.director.value,
        year: e.target.year.value,
        description: e.target.description.value
    }
    const addMoviesApi = 'http://localhost:5000/api/movies/add';
    const res = await fetch(addMoviesApi,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(movie)
        })
    const data = await res.json();
    //console.log(data);
    //router.push(`/channel/${inputValue}`)
    if (data) {
        redirect('/admin/movie');
    }

}


const page = () => {
  return (
	<section className={cstyle.movieSection}>
		<div className={cstyle.container}>
			<h2>Add New Movie</h2>
			<form className={styles.contact_form} onSubmit={(e) => handleSubmit(e)}>
				<div className={styles.input_field}>
					<label htmlFor="title" className={styles.label}>
						Enter Title
						<input type="text" name="title" id="title" placeholder="Movie Title" className={mulish.className} required />
					</label>
				</div>

				<div className={styles.input_field}>
					<label htmlFor="poster" className={styles.label}>
						Movie Poster Url
						<input type="url" name="poster" id="poster" placeholder="Movie Poster Url" className={mulish.className} />
					</label>
				</div>

				<div className={styles.input_field}>
					<label htmlFor="rank" className={styles.label}>
						Rank
						<input type="number" name="rank" id="rank" placeholder="Rank" className={mulish.className} />
					</label>
				</div>

				<div className={styles.input_field}>
					<label htmlFor="genre" className={styles.label}>
						Genre
						<input type="text" name="genre" id="genre" placeholder="Movie genre" className={mulish.className} />
					</label>
				</div>

				<div className={styles.input_field}>
					<label htmlFor="director" className={styles.label}>
						Director
						<input type="text" name="director" id="director" placeholder="Movie director" className={mulish.className} />
					</label>
				</div>

				<div className={styles.input_field}>
					<label htmlFor="year" className={styles.label}>
						Year
						<input type="number" name="year" id="year" placeholder="Year" className={mulish.className} />
					</label>
				</div>

				<div className={styles.input_field}>
					<label htmlFor="description" className={styles.label}>
						description
						<textarea name="description" id="description" rows={5}
							placeholder="Enter your description"
							className={mulish.className}
							autoComplete="off"
						/>
					</label>
				</div>

				<div>
					<button type="submit" className={mulish.className}>Add Movie</button>
				</div>
			</form>

		</div>
	</section>
  )
}

export default page
