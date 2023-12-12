import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/bharathveldi.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <div class="card text-center text-dark card rounded-pill">
  <div class="card-header ">
    <h1 class="display-4 text-center text-primary">Lets Connect</h1>
  </div>
  <div class="card-body">
    <h4 class="card-title">Bharath Sri Vardhan Veldi</h4>
    <p class="card-text">Email1 : bhaveldi@iu.edu</p>
    <p class="card-text">Email2 : bharathveldiusa@gmail.com</p>
    <p class="card-text">PhoneNo : +1 930-333-4106</p>
    <img class="w-25 p-3 rounded-circle"src = {contactImg} ></img>
    <div class = "mt-5">
    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" class="btn btn-primary">Email Me</a>
    </div>
    
  </div>
</div>
      </Container>
    </section>
  )
}
