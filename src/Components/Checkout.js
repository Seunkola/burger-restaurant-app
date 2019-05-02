import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

const currency = 'usd';

class Checkout extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            description: '',
            amount: 0
        }
    }

    componentDidMount(){
        const mealDetails = this.props.location.mealDetails;
        if(mealDetails){
            this.setState({
                name: mealDetails.name,
                description: mealDetails.description,
                amount: mealDetails.amount
            });
        } 
    }

    fromNairaToDollar = amount => amount / 365;

    successPayment = data => {
        alert('Payment Successful');
    };

    errorPayment = data => {
        alert('Payment Error');
    };

    onToken = (amount, description) => token => {
        axios.post(PAYMENT_SERVER_URL, {
            description,
            source: token.id,
            currency: currency,
            amount: this.fromNairaToDollar(amount)
        })
        .then(this.successPayment)
        .catch(this.errorPayment);
    }

    render(){
        const {name, description, amount} = this.state;
        return(
            <StripeCheckout
                name={name}
                description={description}
                amount={amount}
                token={this.onToken(amount,description)}
                currency={currency}
                stripeKey={STRIPE_PUBLISHABLE}
            />
        )
    }
}

export default Checkout;
