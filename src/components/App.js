import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Tour from './Tour';
import Tours from './Tours';

const App = () => {


        const mockTours = [
                {
                    id: 1,
                    name: "Best of Paris in 7 Days Tour",
                    info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and the extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
                    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    price: 1999
                },
                {
                    id: 2,
                    name: "Best of Ireland in 14 Days Tour",
                    info: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
                    image: "https://images.unsplash.com/photo-1531961463838-b2d6c87cd9e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    price: 3899
                },
                {
                    id: 3,
                    name: "Best of Rome in 5 Days Tour",
                    info: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 5 Days!",
                    image: "https://images.unsplash.com/photo-1552832230-c0197047a8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    price: 1799
                },
                {
                    id: 4,
                    name: "Best of Venice in 3 Days Tour",
                    info: "Venice is a city of dreams, a magical place that seems to float between sea and sky. On this tour, you'll navigate the canals by vaporetto and gondola, discovering the stunning architecture of St. Mark's Square, the Doge's Palace, and the Rialto Bridge. You'll also venture beyond the main tourist areas to explore quiet neighborhoods, colorful islands like Murano and Burano, and enjoy the city's incredible seafood cuisine. Join us for the Best of Venice in 3 Days!",
                    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    price: 1299
                }
            ];

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = () => {
    setLoading(true);
   setTimeout(() => {
                    setTours(mockTours);
                    setLoading(false);
                }, 1500);
  }

  const removeTour = (id) => {
    setTours(tours.filter( tour => tour.id !== id))
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if(loading) return <Loading />;

  if(tours.length === 0) {
     return (
      <div>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  return (
    <div id="main">  
    <Tours tours={tours} removeTour={removeTour} />
  </div>
  )
}

export default App