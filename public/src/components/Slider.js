import Card from './Card.js'

const Slider = () => {
    return `
    
    <section class='slider'>

        <div class='cardContainer'>

            ${Card('https://picsum.photos/seed/100/200', 'Card 1', 'Ini Adalah Card Pertama')}
            ${Card('https://picsum.photos/seed/157/200', 'Card 2', 'Ini Adalah Card Pertama')}
            ${Card('https://picsum.photos/seed/205/200', 'Card 3', 'Ini Adalah Card Pertama')}
            ${Card('https://picsum.photos/seed/102/200', 'Card 4', 'Ini Adalah Card Pertama')}
            ${Card('https://picsum.photos/seed/300/200', 'Card 5', 'Ini Adalah Card Pertama')}
            ${Card('https://picsum.photos/seed/400/200', 'Card 6', 'Ini Adalah Card Pertama')}

        </div>
    </section>
    
    
    `
}
export default Slider