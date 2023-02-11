import { getTrending } from 'api/api';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      getTrending().then(({ data }) => setTrends(data.results));
    } catch (error) {
      setError(error);
      if (error === null) {
        return toast.error(`Something went wrong`, {
          theme: 'dark',
        })}
    } 
  }, [error]);

  return (
    <section style={{ marginLeft: '30px' }}>
      <h1 style={{ marginBottom: '20px', marginTop: '20px', color:'#412a95' }}>
        Trending today
      </h1>
      <ToastContainer icon={false}/>
      <MovieList movies={trends} />
    </section>
  );
};

export default Home;
