import { useState } from 'react'
import Card from './Card'

function Tiles() {
    const [items, setItems] = useState([
        { id: 1, img: '/img/adminid.png', stat: "" },
        { id: 2, img: '/img/adminid.png', stat: "" },
        { id: 3, img: '/img/emerg.png', stat: "" },
        { id: 4, img: '/img/emerg.png', stat: "" },
        { id: 5, img: '/img/sabotage.png', stat: "" },
        { id: 6, img: '/img/sabotage.png', stat: "" },
        { id: 7, img: '/img/dead.png', stat: "" },
        { id: 8, img: '/img/dead.png', stat: "" },
        { id: 9, img: '/img/vent.png', stat: "" },
        { id: 10, img: '/img/vent.png', stat: "" },
        { id: 11, img: '/img/report.png', stat: "" },
        { id: 12, img: '/img/report.png', stat: "" },
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current) {
        if (items[current].id % 2 === 0 ) {
            if (items[current].id - 1 === items[prev].id) {
                items[current].stat = "correct"
                items[prev].stat = "correct"
                setItems([...items])
                setPrev(-1)
            } else {
                items[current].stat = "wrong"
                items[prev].stat = "wrong"
                setItems([...items])
                setTimeout(() => {
                    items[current].stat = ""
                    items[prev].stat = ""
                    setItems([...items])
                    setPrev(-1)
                }, 1000)
            }
        } else {
            if (items[current].id + 1 === (items[prev].id)) {
                items[current].stat = "correct"
                items[prev].stat = "correct"
                setItems([...items])
                setPrev(-1)
            } else {
                items[current].stat = "wrong"
                items[prev].stat = "wrong"
                setItems([...items])
                setTimeout(() => {
                    items[current].stat = ""
                    items[prev].stat = ""
                    setItems([...items])
                    setPrev(-1)
                }, 1000)
            }
        }
    }

    function handleClick(id) {
        if (prev === -1) {
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        } else {
            check(id)
        }
    }

    return (
        <div className="container">
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    )
}

export default Tiles;

