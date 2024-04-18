import React from 'react';
import './CardStyles.css';
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.jpg'
import card4 from '../../assets/card4.jpg'
import card5 from '../../assets/card5.jpg'
import card6 from '../../assets/card6.jpg'
import card7 from '../../assets/card7.jpg'
import card8 from '../../assets/card8.jpg'

const Card = () => {
    return (
        <>

        <h2 className='tt-2'>My Recent <span>Projects</span></h2>

        <div className='card'>
           <div className="contain">
                <div className="cont">
                    <div className="card-2">
            <img src={card1} alt="Project 1"/>
                        <div className='card-tittle'>Travel Website</div>
                        <p>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
                        <button className='btl'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className="contain">
                <div className="cont">
                    <div className="card-2">
                          <img src={card2} alt="Project 2"/>
                        <div className='card-tittle'>Ecommerce Shopping Store</div>
                        <p>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
                        <button className='btl' >Learn More</button>
                    </div>
                </div>
            </div>

            <div className="contain">
                <div className="cont">
                    <div className="card-2">
                      <img src={card3} alt="Project 3"/>
                        <div className='card-tittle'>Portfolio Website</div>
                        <p>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
                        <button className='btl'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className="contain">
                <div className="cont">
                    <div className="card-2">
                         <img src={card4} alt="Project 4"/>
                        <div className='card-tittle'>Grocery Store</div>
                        <p>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
                        <button className='btl'>Learn More</button>
                    </div>
                </div>
            </div>


            <div className="contain">
                <div className="cont">
                    <div className="card-2">
                         <img src={card5} alt="Project 4"/>
                        <div className='card-tittle'>Education Website</div>
                        <p>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
                        <button className='btl'>Learn More</button>
                    </div>
                </div>
            </div>


            <div className="contain">
                <div className="cont">
                    <div className="card-2">
                         <img src={card6} alt="Project 4"/>
                        <div className='card-tittle'>Sneaker Store</div>
                        <p>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
                        <button className='btl'>Learn More</button>
                    </div>
                </div>
            </div>


            <div className="contain">
                <div className="cont">
                    <div className="card-2">
                         <img src={card7} alt="Project 4"/>
                        <div className='card-tittle'>Ecommerce Flowers Shop</div>
                        <p>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
                        <button className='btl'>Learn More</button>
                    </div>
                </div>
            </div>


            <div className="contain">
                <div className="cont">
                    <div className="card-2">
                         <img src={card8} alt="Project 4"/>
                        <div className='card-tittle'>Food Website</div>
                        <p>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
                        <button className='btl'>Learn More</button>
                    </div>
                </div>
            </div>




        </div> 
        </>
    );              
};

export default Card;


