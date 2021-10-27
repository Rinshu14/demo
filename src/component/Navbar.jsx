import {Link } from "react-router-dom"
import Cart from "./Cart"
let Navbar=()=>{
    return(
      
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="./Cart">Shopping Cart</Link>
        </div>
      </nav>
      
      
    )
}
export default Navbar