import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

function App() {
  // 1) State for tours, loading, and error
  const [tours, setTours]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  // 2) Fetch function
  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://www.course-api.com/react-tours-project');
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

  // 3) On mount, load tours
  useEffect(() => {
    fetchTours();
  }, []);

  // 4) Remove handler
  const removeTour = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  // 5) Render loading / error / empty / gallery
  return (
    <div className="App">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error: {error}</h2>
      ) : tours.length === 0 ? (
        <button onClick={fetchTours}>Refresh Tours</button>
      ) : (
        <Gallery tours={tours} removeTour={removeTour} />
      )}
    </div>
  );
}

export default App;
