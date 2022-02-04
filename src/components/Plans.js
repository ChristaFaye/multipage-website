function Plans() {
    return(
        <div id="membershipPlans">
            <hr id="solid"/>   
            <h1 id="plansLabel">Membership Plans</h1>

            <div id="plans">
                
                <div id="individualPlan">
                    <h1 id="individual">Individual Plan</h1>
                    <h3>19 CAD/month</h3>
                    <p>24hr access to all locations.</p>
                    <p>1hr meeting room time included.</p>
                    <p>1hr conference room time included.</p>
                    <p>Lockers included.</p>
                    <p>10% off on succeeding months.</p>
                    <p>Access to common areas.</p>
                    <button id="plansBtn">Learn More</button>
                </div>
                <div id="teamPlan">
                    <h1 id="team">Team Plan</h1>
                    <h3>399 CAD/month</h3>
                    <p>24hr access to all locations.</p>
                    <p>3hrs/day meeting room time included.</p>
                    <p>3hrs/day conference room time included.</p>
                    <p>Lockers included.</p>
                    <p>20% off on succeeding months.</p>
                    <p>Access to lounge and common areas.</p>
                    <button id="plansBtn">Learn More</button>
                </div>
                <div id="officePlan">
                    <h1 id="office">Office Plan</h1>
                    <h3>599 CAD/month</h3>
                    <p>24hr access to all locations.</p>
                    <p>5hrs/day meeting room time included.</p>
                    <p>5hrs/day conference room time included.</p>
                    <p>Lockers included.</p>
                    <p>40% off on succeeding months.</p>
                    <p>Access to lounge and common areas.</p>
                    <button id="plansBtn">Learn More</button>
                </div>
            </div>

            <hr id="solid"/>
        </div>
    )
}

export default Plans;