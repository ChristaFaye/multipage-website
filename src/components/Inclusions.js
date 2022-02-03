import { GiLockers, GiVideoConference } from "react-icons/gi";
import { MdOutlineVpnKey, MdLocationCity, MdShareLocation, MdCoffeeMaker, MdDirectionsCar, MdWifi} from "react-icons/md";

function Inclusions() {
    return(
        <div id="inclusions">
            <h1 id="headingInclusions">Inclusions</h1>
            <div id="inclusionIcon">
                <MdLocationCity />
                <p>Modern Design Workspace</p>
            </div>
            
            <div id="inclusionIcon">
                <MdShareLocation />
                <p>Multiple Location</p>
            </div>
            <div id="inclusionIcon">
                <MdOutlineVpnKey />
                <p>24hr Access</p>
            </div>

            <div id="inclusionIcon">
                <MdCoffeeMaker />
                <p>Coffee and Tea</p>
            </div>

            <div id="inclusionIcon">
                <MdDirectionsCar />
                <p>Parking</p>
            </div>

            <div id="inclusionIcon">
                <MdWifi />
                <p>Fast Internet</p>
            </div>

            <div id="inclusionIcon">
                <GiLockers />
                <p>Lockers</p>
            </div>

            <div id="inclusionIcon">
                <GiVideoConference />
                <p>Conference Rooms</p>
            </div>

        </div>
    )
}

export default Inclusions;