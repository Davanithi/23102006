import {link} from "react-router-dom"
export default function Navbar(){
return(
    <ul>
        <li><Link to = "/counter">Home</Link></li>
        <li><Link to = "/first">Home</Link></li>
        <li>Contact</li>
    </ul>
)
}