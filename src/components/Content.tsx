import { MovieCard } from "./MovieCard";
interface TitleProps{
Title:string
}
interface ArrayMovieProps{
  ArrayMovieProps : MovieProps[]
  Title:string
  
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}


export function Content( props:ArrayMovieProps) {


  return(
<>
    <header>
    <span className="category">Categoria:<span> {props.Title}</span></span>
  </header>
    <main>
 
    <div className="movies-list">
      {props.ArrayMovieProps.map(movie => (
        <MovieCard 
        key ={movie.imdbID} 
        title={movie.Title} 
        poster={movie.Poster} 
        runtime={movie.Runtime} 
        rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
  </> 
  )

}