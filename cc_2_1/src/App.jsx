import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

function App() {
  // 1) Your existing state + fetch logic:
  const [tours, setTours]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://course-api.com/react-tours-project');
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json();
      setTours(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // 2) Add this remover function:
  const removeTour = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  // 3) Replace your old return(...) with this:
  return (
    <div className="App">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error: {error}</h2>
      ) : (
        <Gallery tours={tours} removeTour={removeTour} />
      )}
    </div>
  );
}

export default App;
