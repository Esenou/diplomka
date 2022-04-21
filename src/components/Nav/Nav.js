import Logo from "../ui/Logo/Logo";
import "./Nav.css";
import NavItem from "./NavItem/NavItem";

function Nav() {
   return (
      <nav className="Nav">
         <div className="container">
         <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap" rel="stylesheet"/>
         <Logo/>
         <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap" rel="stylesheet"/>
         <ul>
            <NavItem url="/">Home</NavItem>
            <NavItem url="/categories">Categories</NavItem>
            <NavItem url="/about" >About</NavItem>
            <NavItem url="/products">Products</NavItem>
            <NavItem url="/contacts">Contacts</NavItem>
         </ul>
         </div>
      </nav>
   );
}

export default Nav;