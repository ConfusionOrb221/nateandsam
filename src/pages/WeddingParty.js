import React, { Component } from 'react';
import Katie from '../Imgs/party/Katie.jpg'; // Watson
import Robert from '../Imgs/party/Robert.jpg'; //Rolson
import Caitlyn from '../Imgs/party/Caitlyn.jpg'; //Roof
import Susie from '../Imgs/party/Susie.jpg'; //Gostomski
import Lucas from '../Imgs/party/placeholder.png';
import Mark from '../Imgs/party/Mark.jpg';
import Zach from '../Imgs/party/Zach.jpg';
import RobertG from '../Imgs/party/placeholder.png';
// Caitlyn Katie Susie Robert standing order
class WeddingParty extends Component {
    render() {
        return (
            <div className='wedding-party'>
                <h2> Bridal Party </h2>
                <div className='gallery'>
                    <div>
                        <img src={Caitlyn} alt='Caitlyn' />
                        <h2>Caitlyn - Maid of Honor 1</h2>
                    </div>
                    <div>
                        <img src={Katie} alt='Katie' />
                        <h2>Katie - Maid of Honor 2</h2>
                    </div>
                    <div>
                        <img src={Susie} alt='Susie' />
                        <h2>Susie - Brides Maid</h2>
                    </div>
                    <div>
                        <img src={Robert} alt='Robert' />
                        <h2>Robert - Brides Man</h2>
                    </div>
                </div>
                <h2> Grooms Party </h2>
                <div className='gallery'>
                    <div>
                        <img src={Lucas} alt='Lucas' />
                        <h2>Lucas - Best Man</h2>
                    </div>
                    <div>
                        <img src={Mark} alt='Mark' />
                        <h2>Mark - Grooms Men</h2>
                    </div>
                    <div>
                        <img src={Zach} alt='Zach' />
                        <h2>Zach - Grooms Men</h2>
                    </div>
                    <div>
                        <img src={RobertG} alt='Robert' />
                        <h2>Robert - Grooms Men</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeddingParty;