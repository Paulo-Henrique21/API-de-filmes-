import './Home.css'
import {useEffect, useState} from 'react'
import {APIKey} from '../../config/key'

function Home () {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        // consumir a api...

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
    }, [])

    return (
        <div>
            <h1>Movies</h1>
            <ul>

                {movies.map(movie => {
                    return (
                        <li key={movie.id}>
                            <a href='#'><img src={movie.image_url} alt={movie.title}/></a>
                            <span>{movie.title}</span>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Home;