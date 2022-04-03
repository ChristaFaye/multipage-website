import { GiLockers, GiVideoConference } from "react-icons/gi";
import { MdOutlineVpnKey, MdHomeWork, MdPlace, MdCoffeeMaker, MdDirectionsCar, MdWifi, MdContactMail} from "react-icons/md";

function Inclusions(props) {
    return(
        <main>
            <div id="inclusions">
                <section id="inclusionsLabel">
                    <h1 id="headingInclusions">{props.heading}</h1>
                </section>

                <section id="inclusionIcons">
                    <div id="icons">
                        <MdHomeWork size="3rem"/>
                        <p>{props.modern}</p>
                    </div>

                    <div id="icons">
                        <MdPlace size="3rem"/>
                        <p>{props.accessible}</p>
                    </div>

                    <div id="icons">
                        <MdOutlineVpnKey size="3rem"/>
                        <p>{props.hour}</p>
                    </div>

                    <div id="icons">
                        <MdCoffeeMaker size="3rem"/>
                        <p>{props.coffee}</p>
                    </div>

                    <div id="icons">
                        <MdDirectionsCar size="3rem"/>
                        <p>{props.parking}</p>
                    </div>

                    <div id="icons">
                        <MdWifi size="3rem"/>
                        <p>{props.internet}</p>
                    </div>

                    <div id="icons">
                        <GiLockers size="3rem"/>
                        <p>{props.lockers}</p>
                    </div>

                    <div id="icons">
                        <GiVideoConference size="3rem"/>
                        <p>{props.room}</p>
                    </div>

                    <div id="icons">
                        <MdContactMail size="3rem"/>
                        <p>{props.mail}</p>
                    </div>
                    
                </section>
            </div>
        </main>
        
    )
}

export default Inclusions;