//import App.js
import Navbar from './Components/Navbar.js'
import Hero from './Components/Hero.js'
import Headline from './components/Headline.js'
import Slider from './components/Slider.js'
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'

//buat fuction index yang berisi syntax html
const index = () => {
    return `

    ${Navbar()}
    ${Menu()}
    ${Hero()}
    ${Headline()}
    ${Slider()}
    ${Footer()}
    


    `

}

//export updater() agar bisa digunakan difile js lainnya
export default index