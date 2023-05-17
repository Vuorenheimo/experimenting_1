import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('/api/get-data/')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          {JSON.stringify(item)}
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
