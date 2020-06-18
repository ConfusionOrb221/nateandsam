import React, { Component } from 'react';
import IamgeSlider from './components/IamgeSlider';

class HomePage extends Component {
    render() {
        return (
            <>
                <div className='main-body'>
                    <IamgeSlider />
                    <div className='donation'>
                        <h1> Donations Are Welcome </h1>
                        <p> We request that if you want to give us anything for the wedding instead of a gift we would much perfer money to cover the expenses of the wedding.
                            <br/>
                            If you feel the need to do so feel free to click the button below and donate securely through paypal (a paypal account is not required to donate) Thank You.    
                        </p>
                        <form className='donateForm' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_donations" />
                            <input type="hidden" name="business" value="52U7N3TRJCCNQ" />
                            <input type="hidden" name="item_name" value="Wedding" />
                            <input type="hidden" name="currency_code" value="USD" />
                            <input className='donate' type='submit' value='Donate to Nate and Sam'></input>
                        </form>
                    </div>
                </div>
                
            </>
        );
    }
}

export default HomePage;