'use client';

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { CreateOrderData, CreateOrderActions, OnApproveData, OnApproveActions } from '@paypal/paypal-js';
import { paypalCheckPayment, setTransactionId } from "@/actions";

interface Props {
    orderId: string;
    amount: number;
}


export const PayPalButton = ({ orderId, amount }:Props) => {

    const [{ isPending }] = usePayPalScriptReducer();

    const roundedAmount = Math.round(amount * 100) / 100;

    if ( isPending ){
        return (
            <div className="animate-pulse mb-16">
                <div className="h-11 bg-gray-300 rounded" />
                <div className="h-11 bg-gray-300 rounded mt-2" />
            </div>
        )
    }

    const createOrder = async( data: CreateOrderData, action: CreateOrderActions): Promise<string> => {
        const transactionId = await action.order.create({
            purchase_units: [
                {
                    invoice_id: orderId,
                    amount: {
                        value: `${ roundedAmount }`,
                    }
                }
            ]
        });

        // Todo: guardar el ID en la order en la base de datos
        // actions/payments/
        const { ok } = await setTransactionId( orderId, transactionId );

        if ( !ok ) {
            throw new Error('No se pudo actualizar la order');
        }

        return transactionId;
    }

    const onApprove = async(data: OnApproveData, actions: OnApproveActions): Promise<void> => {
        // console.log('onApprove');
        const details = await actions.order?.capture();
        if( !details ) return;

        await paypalCheckPayment( details.id );
    }

    return (
        <div className="relative z-0">
            <PayPalButtons
                createOrder={ createOrder }
                onApprove={ onApprove }
            />
        </div>
    )
}
