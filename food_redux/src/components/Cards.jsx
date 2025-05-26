import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardsData';
import { useState } from 'react';
import './Cards.css'
import './style.css'

const Cards = () => {

    const [data, setData] = useState(Cardsdata);
    // console.log(data)

    return (
        <div className='container'>
            <h2 className="text-center">Add to Cart</h2>
            <div className="row">
                {data.map((e, id) => {
                    return (
                        <>
                            <Card>
                                <Card.Img variant="top" src={e.imgdata} />
                                <Card.Body>
                                    <Card.Title>Restaurant Name : {e.rname}</Card.Title>
                                    <Card.Text>Price : {e.price}₹</Card.Text>
                                    <div className='button_div'>
                                        <Button variant="primary" className='col-lg-12'>Add to Cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default Cards