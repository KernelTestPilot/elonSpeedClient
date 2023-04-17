import React, { useState } from "react";
import UserService from "../services/UserService";





const Register = () => {
    const initialUserState = {
      username: null,
      password: null,
    };

    const [user, setUser] = useState(initialUserState);

    const [handleSubmit, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };

    const saveUser = () => {
        var data = {
          username: user.username,
          password: user.password
        };

        UserService.create(data)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            setSubmitted(true);

            console.log(e);
          });
      };


return(

<div>
      {handleSubmit
        ? <div>Användaren finns redan registerad </div>
        : <div> </div>
      }
   
    <div>
          <div className="form-group">
            <label htmlFor="title">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              required
              value={user.username}
              onChange={handleInputChange}
              name="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              required
              onChange={handleInputChange}
              value={user.password}
              name="password"
            />
          </div>

          <button onClick={saveUser} className="btn btn-success">
            Register
          </button>
          </div>
          
        </div>



)

}



export default Register;