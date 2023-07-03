import React from "react";
import './Research.css';

function Research() {
    const procedure = [
        {

        },
        {

        },
        {
        
        }
    ]
    return (
        <div className="research">
            <h1><b>Our Doctors Specialize in you</b></h1>
            <div>
                <div className='card'>
                    <img src='../img/col-md-6.jpg' alt='placeholder'/>
                    <h2>Painless Procedure</h2>
                    <h2>Cancer Screeening</h2>
                    <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                    <p><b>Free</b></p>
                    <p><img src='blob:https://www.figma.com/001254f2-84f4-447d-9fb6-59d32ca81026' alt='clock'/>1hr 30min</p>
                    <button>Learn More</button>
                </div>
                <div>
                    <img src='../img/col-md-6.jpg' alt='placeholder'/>
                    <h2>Best Oncologists</h2>
                    <h2>Cancer Treatment Options</h2>
                    <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                    <p><b>Free</b></p>
                    <p><img src='blob:https://www.figma.com/001254f2-84f4-447d-9fb6-59d32ca81026' alt='clock'/>1hr</p>
                    <button>Learn More</button>
                </div>
                <div>
                    <img src='blob:https://www.figma.com/a22cab15-7824-4744-89d6-3be1099a57fb' alt='placeholder'/>
                    <h2>Careful Diagnosis</h2>
                    <h2>Cancer Types</h2>
                    <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                    <p><b>Free</b></p>
                    <p><img src='blob:https://www.figma.com/001254f2-84f4-447d-9fb6-59d32ca81026' alt='clock'/>30min</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Research;