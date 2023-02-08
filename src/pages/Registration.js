import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Yes from '../images/button_yes_not_selected.png';
const Prompt = "#FFFFFF";
const Scondary = "#044B55";
const primary = "#000033";


const Registration = () => {
    return (
        <div>
        <Navbar/>
        {/* <h2 style={{color: Prompt, marginTop: '30px'}} className='d-flex fw-bold fs-2 justify-content-center'>Registration</h2> */}
        <h2 style={{color: Prompt, marginTop: '30px'}} className='d-flex fw-bold fs-2 justify-content-center'>নিবন্ধন</h2>
        <section className='container'>
            <div className='row w-100 d-flex justify-content-center align-items-center'>
            <div className='col-11 col-md-4 col-xxl-4 p-3'>
            <Form>
            <Form.Group className="mb-3">
            {/* <Form.Label style={{color: Prompt}} className='fs-5'>Registration Code</Form.Label> */}
            <Form.Label style={{color: Prompt}} className='fs-5'>নিবন্ধন কোড</Form.Label>

            <Form.Control style={{backgroundColor: Scondary}} type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
            {/* <Form.Label style={{color: Prompt}} className='fs-5'>Login ID</Form.Label> */}
            <Form.Label style={{color: Prompt}} className='fs-5'>লগইন আইডি</Form.Label>

            <Form.Control style={{backgroundColor: Scondary}} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
            {/* <Form.Label style={{color: Prompt}} className='fs-5'>WhatsApp or email</Form.Label> */}
            <Form.Label style={{color: Prompt}} className='fs-5'>হোয়াটসঅ্যাপ বা ই-মেইল</Form.Label>

            <Form.Control style={{backgroundColor: Scondary}} type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
            {/* <Form.Label style={{color: Prompt}} className='fs-5'>Password</Form.Label> */}
            <Form.Label style={{color: Prompt}} className='fs-5'>পাসওয়ার্ড</Form.Label>

            <Form.Control style={{backgroundColor: Scondary}} type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3">
            {/* <Form.Label style={{color: Prompt}} className='fs-5'>Password</Form.Label> */}
            <Form.Label style={{color: Prompt}} className='fs-5'>পাসওয়ার্ড</Form.Label>

            <Form.Control className='mb-5' style={{backgroundColor: Scondary}} type="password" placeholder="Password" />
            </Form.Group>

           
           <div className='d-flex justify-content-center mt-3'>
           <img
            type="submit"
            src='https://i.ibb.co/5kcntLs/button-yes-not-selected.png'
            width="60"
            height="50"
            className="d-inline-block align-top"
            alt="Yes"
            />
             <img
            type="submit"
            src='https://i.ibb.co/KL8rZMS/button-question-small-selected.png'
            width="30"
            height="40"
            className="d-inline-block align-top ms-5"
            alt="Question"
            />
           </div>
           
            </Form>
            </div>
            </div>
        </section>
      </div>
    );
};

export default Registration;