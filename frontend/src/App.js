import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Password = () => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    generate();
  }, []);

  const generate = () => {
    axios.get('/api/send-results/')
      .then(response => {
        const result = response.data.result;
        setPassword(result);
      })
      .catch(error => {
        console.error('Error generating password:', error);
      });
  };

  return (
    <div>
      <p>{password}</p>
    </div>
  );
};


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
    <>
      <h1>Testing..</h1>
      <div>
        {data.map(item => (
          <div key={item.id}>
            {JSON.stringify(item)}
          </div>
        ))}
      </div>
      <Password />
    </>
  );
};

export default DataDisplay;
