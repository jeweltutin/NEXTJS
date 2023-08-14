import Link from "next/link";

const page = ({ params }) => {
    const movId = params.movieId;
  return (
    <div>
      Movie Id is : {movId}

      <Link href="/admin/movie/1/review/1">Review 1</Link><br/>
      <Link href="/admin/movie/2/review/11">Review 2</Link><br/>
      <Link href="/admin/movie/3/review/5" replace>Review 3</Link>
    </div>
  )
}

export default page
