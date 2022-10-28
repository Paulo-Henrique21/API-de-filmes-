import './Home.css'

function Home () {

    const movies = [

        {   id: 1,
            title: 'Spider Man',
            image_url: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c7/Maze_runner.jpg/250px-Maze_runner.jpg"
        },
        {   id: 2,
            title: 'Maze Runner',
            image_url: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c7/Maze_runner.jpg/250px-Maze_runner.jpg"
        },
        {   id: 3,
            title: 'Iron man',
            image_url: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c7/Maze_runner.jpg/250px-Maze_runner.jpg"
        }

    ]

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