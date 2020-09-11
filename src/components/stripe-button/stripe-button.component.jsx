import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HLsgfIQDrcRAe6SE4HUIs5PxgUHO4XKNlJGzfJ9fUSlHDvARveNclIvj3FzdzfYmdPSHvNTZV3tRGkg7MUKhHME001wqO3maB';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Ecommerce'
      billingAddresss
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;