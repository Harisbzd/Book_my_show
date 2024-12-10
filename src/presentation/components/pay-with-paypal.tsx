

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

export interface CheckOutProps {
    onClose: () => void;
    price: number;
  }

const Checkout = (props :CheckOutProps ) => {
    const [{isPending }] = usePayPalScriptReducer();
    




    const onCreateOrder = (data: any, actions: any) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: `${props.price}`,
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
            const name = details.payer.name.given_name;
            props.onClose()
            alert(`Transaction completed by ${name}`);
            

        });
    }

    return (
        <div className="checkout">
            {isPending ? <p>LOADING...</p> : (
                <>
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data: any, actions: any) => onCreateOrder(data, actions)}
                        onApprove={(data: any, actions: any) => onApproveOrder(data, actions)}
                    />
                </>
            )}
        </div>
    );
}

export default Checkout;