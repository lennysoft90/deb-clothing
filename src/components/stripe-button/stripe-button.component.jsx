import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price}) => {
    const priceForStripe = price * 100 ;
    const publishablekey = 'pk_test_mqEGyqnmgwC4ITN9RvF439UM00p37WF0Jj';

   const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }



    return(
        <StripeCheckout
         label = 'Pay Now'
         name = 'DEB Clothing Nigeria.'
         billingAddress
         shippingAddress
         image = 'https://svgshare.com/i/CUz.svg'
         description ={`Your total is  $${price}`}
         amount ={priceForStripe}
         panelLabel= 'Pay Now'
         token={onToken}
         stripeKey = {publishablekey}
        />

    )
};

export default StripeCheckoutButton