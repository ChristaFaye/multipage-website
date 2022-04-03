import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import AboutPage from './pages/AboutPage';
import MembershipPage from './pages/MembershipPage';
import InclusionsPage from './pages/InclusionsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>

        <Routes>
            <Route path="/" element={<Home 
                heading="Welcome to your flexible workspace!" 
                button="Request a Tour"
                description1="With over 10 locations all over Canada, home to over 500 professionals, enterpreneurs, teams and small businesses."
                description2="You'll have access to all locations to collaborate, connect and work with your colleagues!"/>}>

            </Route>
            <Route path="/home" element={<Home 
                heading="Welcome to your flexible workspace!" 
                button="Request a Tour"
                description1="With over 10 locations all over Canada, home to over 500 professionals, enterpreneurs, teams and small businesses."
                description2="You'll have access to all locations to collaborate, connect and work with your colleagues!"/>}>
            </Route>
            <Route exact path="/aboutpage" element={<AboutPage 
                heading="About"
                about1="Compeer is a shared workspace that helps people grow their ideas through collaboration and community. We are the top rated coworking space in Canada serving in multiple locations. We envision to provide safe, clean, flexible, friendly and fun place for professionals to enjoy while working, meet with their colleagues and organize important events."
                about2="Our vision is not just to provide you safe, quiet and clean workspace but we are on a mission to help you plan, develop, implement and grow your ideas. Our measure of success is the growth of your business. We promise to grow your ideas by providing the best space for collaboration, connection, education and fun."/>}>
            </Route>
            <Route exact path="/membershippage" element={<MembershipPage 
                heading="We got you! Register with us."
                planHeading="Membership Plans"
                planI="Individual Plan"
                planT="Team Plan"
                planO="Office Plan"
                buttonMember="Be a member" 
                buttonQuote="Request a Quote"
                paragraph="Need your own space for focused work? Looking to host a meeting and collaborate with your colleagues?"/>}>
            </Route>
            <Route exact path="/inclusionspage" element={<InclusionsPage 
                heading="Inclusions"
                modern="Modern Design"
                accessible="Accessible Location"
                hour="24-hour Access"
                coffee="Coffee and Tea"
                parking="Parking"
                internet="Fast Internet"
                lockers="Lockers"
                room="Conference Room"
                mail="Mail Service"/>}>
            </Route>
            <Route exact path="/contactpage" element={<ContactPage 
                mainHeading="Main Offices"
                northHeading="North Location"
                lakeshoreHeading="Lakeshore Location"
                orangevilleHeading="Orangeville Location"
                northAdd="205 Humber College Blvd, Etobicoke, ON, Canada M9W 5L7"
                lakeAdd="3199 Lake Shore Blvd. W., Toronto, ON, Canada M8V 1K8"
                orangeAdd="275 Alder Street, Alder Street Recreation Complex, Orangeville, ON, Canada L9W 5A9"
                contact="Get in touch!"
                eHeading="Email:"
                email="info@compeer.ca"
                pHeading="Phone Number:"
                phone="+1 000-000-0000"
                informed="Stay informed!"
                subscribe="Subscribe"/>}>
            </Route>
        </Routes>
    </>
  );
}

export default App;
