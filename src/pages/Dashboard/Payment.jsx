import { Helmet } from 'react-helmet-async';
import CheckoutForm from '../../pages/Dashboard/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div className='w-full'>
            <Helmet>
                <title>Summer Camp | Payment</title>
            </Helmet>
            <h3 className='text-3xl font-semibold text-center mb-8'>Payment</h3>
            <div className="divider"></div>

            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;