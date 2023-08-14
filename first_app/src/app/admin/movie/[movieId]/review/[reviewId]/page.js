import styles from "@/app/styles/common.module.css"


const page = ({params}) => {
    const mId = params.movieId;
    const rId = params.reviewId;

  return (
    <div className={ styles.container }>
      MovieId : {mId}
      ReviewId : {rId}
    </div>
  )
}

export default page