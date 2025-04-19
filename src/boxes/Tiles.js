import { useState } from 'react'
import Card from './Card'

function Tiles() {
    const [items, setItems] = useState([
        { id: 1, img: 'https://res.cloudinary.com/dcw8kvpdm/image/upload/v1745084268/dead_elkxsx.jpg', stat: "" },
        { id: 2, img: 'https://res.cloudinary.com/dcw8kvpdm/image/upload/v1745084268/dead_elkxsx.jpg', stat: "" },
        { id: 3, img: 'https://res.cloudinary.com/dcw8kvpdm/image/upload/v1745084268/report_gutnjb.jpg', stat: "" },
        { id: 4, img: 'https://res.cloudinary.com/dcw8kvpdm/image/upload/v1745084268/report_gutnjb.jpg', stat: "" },
        { id: 5, img: 'https://res.cloudinary.com/dcw8kvpdm/image/upload/v1745084268/adminid_prqqoc.jpg', stat: "" },
        { id: 6, img: 'https://res.cloudinary.com/dcw8kvpdm/image/upload/v1745084268/adminid_prqqoc.jpg', stat: "" },
        { id: 7, img: 'https://res.cloudinary.com/dcw8kvpdm/image/upload/v1745084268/vent_fadf3a.jpg', stat: "" },
        { id: 8, img: 'https://res.cloudinary.com/dcw8kvpdm/image/upload/v1745084268/vent_fadf3a.jpg', stat: "" },
        { id: 9, img: 'https://res.cloudinary.com/dcw8kvpdm/image/upload/v1745084268/sabotage_tq61wj.jpg', stat: "" },
        { id: 10, img: 'https://res.cloudinary.com/dcw8kvpdm/image/upload/v1745084268/sabotage_tq61wj.jpg', stat: "" },
        { id: 11, img: 'https://res.cloudinary.com/dcw8kvpdm/image/upload/v1745084268/emerg_oqldjt.jpg', stat: "" },
        { id: 12, img: 'https://res.cloudinary.com/dcw8kvpdm/image/upload/v1745084268/emerg_oqldjt.jpg', stat: "" },
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

