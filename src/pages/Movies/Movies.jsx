import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'api/api';
import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query.trim()) return;
    try {
      getSearchMovie(query).then(response => {
        if (response.data.results.length === 0) {
          return toast.error(`No results for ${query}`, { theme: 'colored' });
        }
        setMovies(response.data.results);
      });
    } catch (error) {
      console.log(error);
    } 
  }, [query]);

  const onHandleSubmit = event => {
    event.preventDefault();
    const {value} = event.currentTarget.search
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <div style={{ marginLeft: '30px' }}>
      <SearchBar onSubmit={onHandleSubmit}  />
      <ToastContainer icon={false} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
