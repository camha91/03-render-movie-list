import RenderMovieList from "./component/RenderMovieList";
import movieData from "./Data/MovieData.json";

function App() {
    return (
        <div className="app">
            <RenderMovieList arrMovie={movieData} />
        </div>
    );
}

export default App;
