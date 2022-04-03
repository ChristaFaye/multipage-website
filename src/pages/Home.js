import React from 'react';

class Home extends React.Component {
    render() {
        return(
            <main>
                <div class="text-nowrap"  id="welcome">
                    <h1 id="welcomeMessage">{this.props.heading}</h1>
                    <h3 class="text-justify text-center text-light bg-dark"id="description">{this.props.description1}</h3>
                    <h3 class="text-justify text-center text-light bg-dark" id="description">{this.props.description2} </h3>
                    <button id="tourBtn">{this.props.button}</button>
                </div>
            </main>

            
            
        )
    }
}

export default Home;