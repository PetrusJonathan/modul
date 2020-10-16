// import app.js
import App from '../App.js'
//buat component navbar
const Navbar = () => {
    return `
    <nav class='navbar' style="
        width : 100vw;
        height :10vh;
        display : flex;
        justify-content : flex-start;
        align-items : center;
        padding : 0 10%;
        background-color : grey;
        color : red;
        font-size : 2rem;
        text-shadow : 5px 5px 5px rgba(0,0,0,0.600);
    ">
    <h1 class='brand'>JRG BALESOFT</h1>
     </nav>
    
    
    `
}
export default Navbar