import React from 'react';
import Navbar from './Navbar';
const Prompt = "#FFFFFF";

const AudioRecoders = () => {
    return (
        <div>
             <Navbar/>
            {/* <h2 style={{color: Prompt, marginTop: '30px'}} className='d-flex fw-bold fs-2 justify-content-center'>Audio Records</h2> */}
            <h2 style={{color: Prompt, marginTop: '30px'}} className='d-flex fw-bold fs-2 justify-content-center'>অডিও রেকর্ড</h2>

            <div className='d-flex justify-content-center mt-3' mb-5>
            {/* <p style={{color: Prompt, width: '290px'}} 
            className="align-top fs-5">To save time, record your report. 
             Please include the following:
             Project, location, date of service, 
             activity, number of clients, etc...blah blah</p> */}

            <p style={{color: Prompt, width: '290px'}} className="align-top fs-5">
                সময় বাঁচাতে, আপনার রিপোর্ট রেকর্ড করুন। নিম্নলিখিত অন্তর্ভুক্ত করুন: প্রকল্প, অবস্থান, পরিষেবার তারিখ,
              কার্যকলাপ, ক্লায়েন্ট সংখ্যা ইত্যাদি।</p>

           </div>
           <div className='d-flex justify-content-center mt-5'>
           <img
            type="submit"
            src='https://i.ibb.co/zHcCb9j/button-mic-large-not-selected.png'
            width="120"
            height="100"
            className="d-inline-block align-top"
            alt="Yes"
            />
           </div>

        </div>
    );
};

export default AudioRecoders;