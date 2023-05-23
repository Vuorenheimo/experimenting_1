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


const MyForm = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the Python function
    axios.post('/api/my-function/', { selectedValues })
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          value="#"
          onChange={handleCheckboxChange}
        />
        #
      </label>

      <label>
        <input
          type="checkbox"
          value="!"
          onChange={handleCheckboxChange}
        />
        !
      </label>

      <label>
        <input
          type="checkbox"
          value="_"
          onChange={handleCheckboxChange}
        />
        _
      </label><br></br>

      <button type="submit">Submit</button>
    </form>
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
      <MyForm />
    </>
  );
};

export default DataDisplay;
