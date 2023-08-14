'use client';
import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const Movie = () => {
  // const router = useRouter()
  const [isDelete, setIsDelete] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const getAllMoviesApi = 'http://localhost:5000/api/movies';
      const res = await fetch(getAllMoviesApi);
      const data = await res.json();
      setData(data)
    }
    getData()
  }, [isDelete])

  const deleteMovie = async (mId) => {
    //alert(mId);
    const response = await fetch(`http://localhost:5000/api/movies/${mId}`, {
      method: 'DELETE',
    })
    const data = await response.json();
    setIsDelete(true)
    // router.push('/movies/syx')
  }

  return (
    <div className={styles.container}>
      <h2>Movie Manage</h2>
      <div style={{ "text-align": "right", padding: 40 }}>
        <Link href="/admin/movie/add-new"><button>Add New +</button></Link>
      </div>
      {data.length ?
        data.map((mdata, index) => (
          <table>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Poster</th>
              <th>Director</th>
              <th>Year</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>{index + 1}</td>
              <td>
                {mdata.title}
              </td>
              <td>
                <Image src={mdata.poster} alt={mdata.title} width={100} height={60} />
              </td>
              <td>
                {mdata.director}
              </td>
              <td>
                {mdata.year}
              </td>
              <td>
                {mdata.description}
              </td>
              <td>
                {/* <Link href={`/admin/movie/delete/${mdata._id}`}>
                Delete
              </Link> */}

                <button onClick={(e) => deleteMovie(mdata._id)}>Delete</button>
              </td>
            </tr>
          </table>
        )) : null
      }

    </div >
  )
}

export default Movie
