import Image from "next/image"
import Link from "next/link"
const MovieItem = ({item}) => {
    return (
        <div className="item">
            <figure>
                <Link href={`/movies/${item?.id}`}>
                    <Image src={item?.large_cover_image || item?.medium_cover_image || item?.small_cover_image} alt={item?.title} width={186} height={143} />
                </Link>
            </figure>
            <h4><Link href={`/movies/${item?.id}`}>{item?.title}</Link></h4>
            <div className="genres">{item?.genres && item?.genres.map((item)=> item).join(', ')}</div>
            <ul>
                <li>IMDB: <span>{item?.rating}</span></li>
                <li>Release: <span>{item?.year}</span></li>
                <li>Length:<span>{item?.runtime}</span></li>
            </ul>
            <div className="bttn-wrap"><Link href={`/movies/${item?.id}`}>View Detail</Link></div>
        </div>
    )
}

export default MovieItem