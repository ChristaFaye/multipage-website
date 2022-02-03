import React from 'react';

class Welcome extends React.Component {
    render() {
        return(
            <div id="welcome">
                
                <h1 id="welcomeMessage">Welcome to your flexible workspace!</h1>
               
                <h3 id="description">With over 10 locations all over Canada, home to over 500 professionals, enterpreneurs, teams and small businesses. You'll have access to all locations to collaborate, connect and work with your colleagues! </h3>
               
                <button id="tourBtn">Request a Tour</button>
            </div>
        )
    }
}

export default Welcome;