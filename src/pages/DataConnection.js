import React from 'react';
import Navbar from './Navbar';

const Prompt = "#FFFFFF";
const Scondary = "#044B55";
const primary = "#000033";

const DataConnection = () => {
    return (
        <div>
            <Navbar/>
            {/* <h2 style={{color: Prompt, marginTop: '30px'}} className='d-flex fw-bold fs-2 justify-content-center'>Evidence</h2> */}
            <h2 style={{color: Prompt, marginTop: '30px'}} className='d-flex fw-bold fs-3 justify-content-center'>প্রমান</h2>

            <div className='d-flex justify-content-center mt-3'>
           <img
            src='https://i.ibb.co/ftjwnBx/button-camera-large-not-selected.png'
            width="120"
            height="100"
            className="d-inline-block align-top"
            alt="Yes"
            />
             <img
            src='https://i.ibb.co/b6wW9LC/button-video-large-not-selected.png'
            width="120"
            height="100"
            className="d-inline-block align-top ms-2"
            alt="Question"
            />
           </div>

            {/* <h2 style={{color: Prompt, marginTop: '30px'}} className='d-flex fw-bold fs-2 justify-content-center'>Narrative</h2> */}
            <h2 style={{color: Prompt, marginTop: '30px'}} className='d-flex fw-bold fs-3 justify-content-center'>বর্ণনামূলক</h2>
            <div className='d-flex justify-content-center mt-3'>
           <img
            src='https://i.ibb.co/zHcCb9j/button-mic-large-not-selected.png'
            width="120"
            height="100"
            className="d-inline-block align-top"
            alt="Yes"
            />
             <img
            src='https://i.ibb.co/tzWzCdq/button-notes-large-not-selected.png'
            width="120"
            height="100"
            className="d-inline-block align-top ms-2"
            alt="Question"
            />
           </div>

           <div className='d-flex justify-content-center mt-5'>

            {/* <p style={{color: Prompt, width: '250px'}} className="align-top fs-6"
            >Labeling or narration should be
             included with each item or group 
             of evidence or documentation, </p> */}

            <p style={{color: Prompt, width: '250px'}} className="align-top fs-6"
            >লেবেলিং বা বর্ণনা প্রতিটি আইটেম বা প্রমাণ বা ডকুমেন্টেশনের গ্রুপের সাথে অন্তর্ভুক্ত করা উচিত, </p>

             <img
            src='https://i.ibb.co/sVTHK5z/button-question-large-selected.png'
            width="60"
            height="70"
            className="d-inline-block align-top ms-2"
            alt="Question"
            />
           </div>

        </div>
    );
};

export default DataConnection;