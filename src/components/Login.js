import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: ""
  });

  const [data, setData] = useState([]);
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

    const getuserArr = localStorage.getItem("registration");
    console.log(getuserArr);

    const { email, password } = inpval;

    if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length must be greater than five");
    } else {
     if(getuserArr && getuserArr.length) {
      const userdata = JSON.parse(getuserArr);
      const userlogin = userdata.filter((el,k)=>{
        return el.email === email && el.password === password
      });

     if(userlogin.length === 0) {
      alert("invalid details")
     }else {
      console.log("user login successfully");
      localStorage.setItem("user_login",JSON.stringify(userlogin))
      history("./details")
     }

     }
    }
  }

  return (
    <>
      <div className="container mt-3">
        <section className='d-flex justify-content-between'>
          <div className='left_data mt-3' style={{ width: "100%" }}>
            <h3 className='text-center col-lg-6'>Sign IN</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" onChange={getdata} name="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" onChange={getdata} name="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                Submit
              </Button>
            </Form>
            <p className='mt-3'>Already have an Account <span>SignIn</span></p>
          </div>
          <div className='right_data mt-5' style={{ maxWidth: "100%" }}>
            <div className='sign_img mt-5'>
           
              <img src="/image/imge.jpg" style={{ maxWidth: "400px" }} alt="Sign Image" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Login;
