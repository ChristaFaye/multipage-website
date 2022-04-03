
import React, { useState } from "react";
// import ReactDOM from "react-dom";

function Contact(props) {
    const northAdd = "205 Humber College Blvd, Etobicoke, ON M9W 5L7"
    const lakeshoreAdd = "3199 Lake Shore Blvd. W., Toronto, ON, Canada M8V 1K8"
    const orangevilleAdd = "275 Alder Street, Alder Street Recreation Complex, Orangeville, ON, Canada L9W 5A9"
    const [north, setNAddress] = useState("");
    const [lakeshore, setLAddress] = useState("");
    const [orangeville, setOAddress] = useState("");
    return (
        <article id="contactInfo">
            <section id="mainOffices">
                <h2 id="officesLabel">{props.mainHeading}</h2>
                <div id="north">
                    <h3>{props.northHeading}</h3>
                    <p>{north}</p>
                    <button id="showAdd" type="button" onClick={() => setNAddress(`${northAdd}`)}>Show Address</button>
                </div>
                <div id="lakeshore">
                    <h3>{props.lakeshoreHeading}</h3>
                    <p>{lakeshore}</p>
                    <button id="showAdd" type="button" onClick={() => setLAddress(`${lakeshoreAdd}`)}>Show Address</button>
                </div>
                <div id="orangeville">
                    <h3>{props.orangevilleHeading}</h3>
                    <p>{orangeville}</p>
                    <button id="showAdd" type="button" onClick={() => setOAddress(`${orangevilleAdd}`)}>Show Address</button>
                </div>
                
            </section>

            <section id="contact">
                <h2 id="contactDetails">{props.contact}</h2>
                <div>
                    <h4>{props.eHeading}</h4>
                    <p id="email">{props.email}</p>
                    
                </div>
                <div>
                    <h4>{props.pHeading}</h4>
                    <p id="phoneNumber">{props.phone}</p>
                </div>

                <section id="subscribe">
                    <h2>{props.informed}</h2>
                    <div class="input-group flex-nowrap w-50 mx-auto">
                        <span class="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" class="form-control" placeholder="Email Address" aria-label="Username" aria-describedby="addon-wrapping"/>
                        <button id="subscribeBtn">{props.subscribe}</button>
                    </div>
                    
                </section>
               
            </section>



            
        </article>
    )
}

export default Contact;