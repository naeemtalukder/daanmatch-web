import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Prompt = "#FFFFFF";
const Scondary = "#044B55";
const primary = "#000033";


const Login = () => {
    return (
      <div>
        <Navbar/>
        {/* <h2 style={{color: Prompt, marginTop: '30px'}} className='d-flex fw-bold fs-2 justify-content-center'>Welcome back!</h2> */}
        <h2 style={{color: Prompt, marginTop: '40px'}} className='d-flex fw-bold fs-3 justify-content-center'>ফিরে আসার জন্য স্বাগতম!</h2>

        <section className='container mt-5'>
            <div className='row w-100 d-flex justify-content-center align-items-center'>
            <div className='col-11 col-md-4 col-xxl-4 p-3'>
            <Form>
            <Form.Group className="mb-3">
            {/* <Form.Label style={{color: Prompt}} className='fs-5'>Login ID</Form.Label> */}
            <Form.Label style={{color: Prompt}} className='fs-5'>লগইন আইডি</Form.Label>

            <Form.Control style={{backgroundColor: Scondary}} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
            {/* <Form.Label style={{color: Prompt}} className='fs-5'>Password</Form.Label> */}
            <Form.Label style={{color: Prompt}} className='fs-5'>পাসওয়ার্ড</Form.Label>

            <Form.Control style={{backgroundColor: Scondary}} type="password" placeholder="Password" />
            </Form.Group>

            <a href="#" style={{color: Prompt, textDecoration: "none"}} className='d-flex fs-5 justify-content-center'>Do you need to register?</a>
            <a href="#" style={{color: Prompt, textDecoration: "none"}} className='d-flex fs-5 justify-content-center'>Forget Password?</a>

            {/* <a href="#" style={{color: Prompt, textDecoration: "none"}} className='d-flex fs-6 justify-content-center mb-2 mt-4'>আপনার কি নিবন্ধন করা প্রয়োজন?</a>
            <a href="#" style={{color: Prompt, textDecoration: "none"}} className='d-flex fs-6 justify-content-center'>পাসওয়ার্ড ভুলে গেছেন?</a> */}

           
            <div className='d-flex justify-content-center mt-3'>
           <img
            type="submit"
            src='https://i.ibb.co/5kcntLs/button-yes-not-selected.png'
            width="60"
            height="50"
            className="d-inline-block align-top"
            alt="Yes"
            />
           </div>
           
            </Form>
            </div>
            </div>
        </section>
      </div>
    );
};

export default Login;