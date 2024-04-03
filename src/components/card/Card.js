import React from 'react';
import './CardStyles.css';

const Card = () => {
    return (
        <>

        <h2 className='tt-2'>My Recent Projects</h2>

        <div className='card'>
           <div className="contain">
                <div className="cont">
                    <div className="card-2">
            <img src="https://picsum.photos/200/300" alt="Project 1"/>
                        <div className='card-tittle'>Travel Website</div>
                        <p>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
                        <button className='btl'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className="contain">
                <div className="cont">
                    <div className="card-2">
                          <img src="https://picsum.photos/200/300" alt="Project 2"/>
                        <div className='card-tittle'>Travel Website</div>
                        <p>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
                        <button className='btl' >Learn More</button>
                    </div>
                </div>
            </div>

            <div className="contain">
                <div className="cont">
                    <div className="card-2">
                      <img src="https://picsum.photos/200/300" alt="Project 3"/>
                        <div className='card-tittle'>Travel Website</div>
                        <p>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
                        <button className='btl'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className="contain">
                <div className="cont">
                    <div className="card-2">
                         <img src="https://picsum.photos/200/300" alt="Project 4"/>
                        <div className='card-tittle'>Travel Website</div>
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


