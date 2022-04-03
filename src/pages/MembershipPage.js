import React from 'react';

class Membership extends React.Component {
    render() {
        const cad = "CAD/month"
        const access = "access to all locations."
        const meeting = "meeting room time included."
        const room = "conference room time included."
        const locker = "Lockers included."
        const off = "off on succeeding months."
        const common = "Access to common areas."
        const learn = "Learn More"

        return(
            
            <main>

                <div id="membershipPlans">
                    {/* <hr id="solid"/>    */}
                    <h1 id="plansLabel">{this.props.planHeading}</h1>

                    <div id="plans">
                        
                        <div class="card text-white bg-success mb-3" id="individualPlan">
                            <h1 class="text-warning" id="individual">{this.props.planI}</h1>
                            <h3>19 {cad}</h3>
                            <p>24hr {access}</p>
                            <p>1hr {meeting}</p>
                            <p>1hr {room}</p>
                            <p>{locker}</p>
                            <p>10% {off}</p>
                            <p>{common}</p>
                            <button id="plansBtn">{learn}</button>
                        </div>
                        <div class="card text-white bg-danger mb-3" id="teamPlan">
                            <h1 class="text-warning" id="team">{this.props.planT}</h1>
                            <h3>399 {cad}</h3>
                            <p>24hr {access}</p>
                            <p>3hrs/day {meeting}</p>
                            <p>3hrs/day {room}</p>
                            <p>{locker}</p>
                            <p>20% {off}</p>
                            <p>{common}</p>
                            <button id="plansBtn">{learn}</button>
                        </div>
                        <div class="card text-white bg-primary mb-3" id="officePlan">
                            <h1 class="text-warning" id="office">{this.props.planO}</h1>
                            <h3>599 {cad}</h3>
                            <p>24hr {access}</p>
                            <p>5hrs/day {meeting}</p>
                            <p>5hrs/day {room}</p>
                            <p>{locker}</p>
                            <p>40% {off}</p>
                            <p>{common}</p>
                            <button id="plansBtn">{learn}</button>
                        </div>
                    </div>

                    <hr id="solid"/>
                </div>

                <div id="membership">
                    <p id="member">{this.props.paragraph}</p>
                    <h2 id="register">{this.props.heading}</h2>
                    <button id="memberBtn">{this.props.buttonMember}</button>
                    <button id ="quoteBtn">{this.props.buttonQuote}</button>
                    <hr id="solid"/>
                </div>
            </main>

            

            
        )
    }
}

export default Membership;