import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Details = () => {
  const [logindata, setLoginData] = useState([]);
  const [userbirth, setUserBirth] = useState([]);
  console.log(logindata);

  const [show, setShow] = useState(false);

  const todayDate = new Date().toISOString().slice(0, 10);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);

      const userbirth = user.filter(el => el.date === todayDate);
      setUserBirth(userbirth);
    }
  };

  useEffect(() => {
    Birthday();
  }, []);

  useEffect(() => {
    if (userbirth.length > 0) {
      setTimeout(() => {
        console.log("ok");
        handleShow();
      }, 3000);
    }
  }, [userbirth]);

  return (
    <>
      {
        logindata.length === 0 ? "error" : (
          <>
            <h1>details</h1>
            <h2>{logindata[0].name}</h2>

{
  logindata[0].date === todayDate ? 
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{logindata[0].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Wish you many many happy treturns of the day!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>:""
}

          </>
        )
      }
    </>
  );
}

export default Details;
