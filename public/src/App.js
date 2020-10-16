//import sytantax dari file js lain
import index from './index.js'
//membuat sebuah fuction render
const App = () => {
    document.getElementById('root').innerHTML = index()
}


//export app() agar bisa digunakan difile js lainnya
export default App
//menjalankan fuction rendernya
App()
