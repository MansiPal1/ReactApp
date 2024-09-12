import React from "react";

export default function Main() {
    return (
        <>
            <div className="firstpara">
                <h1>BeingChoice</h1>
                <p>Welcome to Recruitment Startup, your go-to destination for exceptional talent and outstanding opportunities. We <br /> connect top-tier professionals with leading companies, empowering careers <br />and driving business growth. Its a Dummy text.</p>
            </div>

            <div className="button">
                <a href="/jobseeker">
                    <button type="button" class="btn btn-outline-dark">Job Seeker</button>
                </a>
                <a href="/FAQ">
                    <button type="button" class="btn btn-outline-dark">FAQ</button>
                </a>
            </div>


        </>
    )
}