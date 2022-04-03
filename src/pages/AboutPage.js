import React from 'react';

class AboutPage extends React.Component {
    render() {
        return(
            <main>
                <article id="aboutArticle">
                    <section id="cowork"> </section>
                    <section class="card text-black bg-info mb-1" id="about">
                        <h2 class="card-title "id="headingAbout">{this.props.heading}</h2>

                        <p id="about1">{this.props.about1}</p>

                        <p id="about2">{this.props.about2}</p>
                    </section>
                </article>
            </main>
            
        )
    }
}

export default AboutPage;