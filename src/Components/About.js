import Profile from "./Profile";
import { Outlet } from "react-router-dom";

const About = () => {
    return (
    <div>
        <Outlet />
        <h1>Hello This is my Profile(Image)</h1>
        </div>)
}

export default About;