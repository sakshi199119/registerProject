import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: ""
  });

  const [data,setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval({
      ...inpval,
      [name]: value
    });
  }

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inpval;

    if (name === "") {
      alert("Name field is required");
    } else if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (date === "") {
      alert("Date field is required");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length must be greater than five");
    } else {
      console.log("Data added successfully");

      localStorage.setItem("registration",JSON.stringify([...data,inpval]));
    }
  }

  return (
    <>
      <div className="container mt-3">
        <section className='d-flex justify-content-between'>
          <div className='left_data mt-3' style={{ width: "100%" }}>
            <h3 className='text-center col-lg-6'>Signup</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Control type="text" onChange={getdata} name="name" placeholder="Enter your Name" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" onChange={getdata} name="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6">
                <Form.Control type="date" onChange={getdata} name="date" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" onChange={getdata} name="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                Submit
              </Button>
  </Form>
            <p className='mt-3'>Already have an Account <span><NavLink to="/login">SignIn</NavLink></span></p>
          </div>
          <div className='right_data mt-5' style={{ maxWidth: "100%" }}>
            <div className='sign_img mt-5'>
              <img src=".image/imge.jpg" style={{ maxWidth: "400px" }} />
            </div>
          </div>
          
        </section>
      </div>
    </>
  );
};

export default Home;
