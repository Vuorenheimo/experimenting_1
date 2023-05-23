import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const MyForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Serialize the form data
    const serializedData = JSON.stringify(data);

    // Send the data to the backend
    axios.post('/api/endpoint', serializedData)
      .then((response) => {
        // Handle success response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form inputs */}
      <input type="text" name="username" ref={register({ required: true })} />
      {errors.username && <span>This field is required</span>}

      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
