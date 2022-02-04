import { GiLockers, GiVideoConference } from "react-icons/gi";
import { MdOutlineVpnKey, MdHomeWork, MdPlace, MdCoffeeMaker, MdDirectionsCar, MdWifi, MdContactMail} from "react-icons/md";

function Inclusions() {
    return(
        <div id="inclusions">
            <section id="inclusionsLabel">
                <h1 id="headingInclusions">Inclusions</h1>
            </section>

            <section id="inclusionIcons">
                <div id="icons">
                    <MdHomeWork size="3rem"/>
                    <p>Modern Design</p>
                </div>

                <div id="icons">
                    <MdPlace size="3rem"/>
                    <p>Accessible Location</p>
                </div>

                <div id="icons">
                    <MdOutlineVpnKey size="3rem"/>
                    <p>24-hour Access</p>
                </div>

                <div id="icons">
                    <MdCoffeeMaker size="3rem"/>
                    <p>Coffee and Tea</p>
                </div>

                <div id="icons">
                    <MdDirectionsCar size="3rem"/>
                    <p>Parking</p>
                </div>

                <div id="icons">
                    <MdWifi size="3rem"/>
                    <p>Fast Internet</p>
                </div>

                <div id="icons">
                    <GiLockers size="3rem"/>
                    <p>Lockers</p>
                </div>

                <div id="icons">
                    <GiVideoConference size="3rem"/>
                    <p>Conference Rooms</p>
                </div>

                <div id="icons">
                    <MdContactMail size="3rem"/>
                    <p>Mail Service</p>
                </div>
                
            </section>
            </div>
    )
}

export default Inclusions;