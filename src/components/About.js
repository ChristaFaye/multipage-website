import React from 'react';
import Cowork from '../img/about.jpg';

class About extends React.Component {
    render() {
        return(
            <article id="aboutArticle">
                <section>
                    <img id="coworkPhoto" src={Cowork} alt="Cowork" />
                </section>
                <section id="about">
                    <h2 id="headingAbout">About</h2>

                    <p id="about1">Compeer is a shared workspace that helps people grow their ideas through collaboration and community. We are the top rated coworking space in Canada serving in multiple locations. We envision to provide safe, clean, flexible, friendly and fun place for professionals to enjoy while working, meet with their colleagues and organize important events. </p>

                    <p id="about2">Our vision is not just to provide you safe, quiet and clean workspace but we’re on a mission to help you plan, develop, implement and grow your ideas. Our measure of success is the growth of your business. We promise to grow your ideas by providing the best space for collaboration, connection, education and fun.

We grow ideas.</p>
                </section>
            </article>
        )
    }
}

export default About;