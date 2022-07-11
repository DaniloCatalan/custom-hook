import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "danilo",
    email: "danilo@test.cl",
  });
  const { username, email } = formState;
  
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  };
  
  useEffect(() => {
    // console.log('use effect call');
  },[])
  
  useEffect(() => {
    // console.log('formState change');
  },[formState])
  
  useEffect(() => {
    // console.log('formState change');
  },[email])
  
  return (
    <>
      <div>simpleForm</div>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        value={username}
        name="username"
        onChange={onInputChange}
        />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="test@gmail.com"
        value={email}
        name="email"
        onChange={onInputChange}
        />
        {
          (username === 'danilo') && <Message/>
        }
       
    </>
  );
};
