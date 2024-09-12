import React, { useState, useEffect } from "react";

export default function Jobseeker() {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        resume: ''
    });

    const [alertVisible, setAlertVisible] = useState(false); // State to control alert visibility

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        
        // Show the alert after form submission
        setAlertVisible(true);
    };

    useEffect(() => {
        // Event listener to remove alert when clicking anywhere on the page
        const handleClickOutside = () => {
            setAlertVisible(false);
        };

        if (alertVisible) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [alertVisible]);

    return (
        <>
            <div className="container">
                <h3>Job Seeker Registration</h3>
                <form onSubmit={handleSubmit}>
                    <div id="liveAlertPlaceholder">
                        {alertVisible && (
                            <div className="alert alert-success alert-dismissible" role="alert">
                                <div>Form submitted successfully!</div>
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        )}
                    </div>
                    <div className="Form mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">First Name*</label>
                        <input type="text" className="form-control" id="exampleFormControlTextarea1" placeholder="Enter First Name" name="firstname" onChange={handleChanges} required />
                        
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Last Name*</label>
                        <input type="text" className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Last Name" name="lastname" onChange={handleChanges} required />
                        
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address*</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" onChange={handleChanges} required />
                        
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Upload updated Resume</label>
                            <input className="form-control" type="file" id="formFile" name="resume" onChange={handleChanges} />
                        </div>
                        
                        <input className="btn1 btn-primary" type="reset" value="Reset" />
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    );
}
