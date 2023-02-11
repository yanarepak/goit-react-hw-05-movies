import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'api/api';
import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;
    try {
      getSearchMovie(query).then(response => {
        console.log(response);
        if (response.data.results.length === 0) {
          return toast.error(`No results for ${query}`, { theme: 'colored' });
        }
        setMovies(response.data.results);
      });
    } catch (error) {
      console.log(error);
    } 
  }, [query, searchParams]);

  const onHandleChange = event => setQuery(event.target.value);

  const onHandleSubmit = event => {
    event.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <div style={{ marginLeft: '30px' }}>
      <SearchBar onSubmit={onHandleSubmit} onChange={onHandleChange} />
      <ToastContainer icon={false} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
