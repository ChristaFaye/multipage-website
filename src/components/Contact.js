function Contact() {
    return (
        <article id="contactInfo">
            <section id="mainOffices">
                <h2 id="officesLabel">Main Offices</h2>
                <div id="north">
                    <h3>North Location</h3>
                    <p>205 Humber College Blvd, Etobicoke, ON, Canada M9W 5L7</p>
                </div>
                <div id="lakeshore">
                    <h3>Lakeshore Location</h3>
                    <p>3199 Lake Shore Blvd. W., Toronto, ON, Canada M8V 1K8</p>
                </div>
                <div id="orangeville">
                    <h3>Orangeville Location</h3>
                    <p>275 Alder Street, Alder Street Recreation Complex, Orangeville, ON, Canada L9W 5A9</p>
                </div>
                
            </section>

            <section id="contact">
                <h2 id="contactDetails">Get in touch!</h2>
                <div>
                    <h4>Email:</h4>
                    <p id="email">info@compeer.ca</p>
                </div>
                <div>
                    <h4>Phone Number:</h4>
                    <p id="phoneNumber">+1 000-000-0000</p>
                </div>

                <section id="subscribe">
                    <h2>Stay informed!</h2>
                    
                    <input id="inputText" placeholder="Email Address" type="text" />
                    <button id="subscribeBtn">Subscribe</button>
                </section>
               
            </section>



            
        </article>
    )
}

export default Contact;