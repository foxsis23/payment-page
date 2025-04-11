import {IPaymentForm} from "@/lib/types/paymentForm";
import {paymentFormErrors} from "@/lib/constants/payment-form-constants";
import {Dispatch, SetStateAction} from "react";
import {cardRegex, cvcRegex, expirationDateRegex} from "@/lib/constants/paymentFormRegex";


export const validateForm = (cardNumber:string,expirationDate:string,cvc:string,setErrors: Dispatch<SetStateAction<IPaymentForm>>) => {
    let formErrors:IPaymentForm = {
        cardNumber:"",
        expirationDate:"",
        cvc:"",
    };
    let valid = true;

    if (!cardRegex.test(cardNumber)) {
        formErrors.cardNumber = paymentFormErrors.cardNumberError;
        valid = false;
    }

    if (!expirationDateRegex.test(expirationDate)) {
        formErrors.expirationDate = paymentFormErrors.expirationDateError
        valid = false;
    }

    if (!cvcRegex.test(cvc)) {
        formErrors.cvc = paymentFormErrors.cvcError
        valid = false;
    }

    setErrors(formErrors);
    return valid;
};


export const submitPaymentForm = async(cardNumber:string,expirationDate:string,cvc:string,setErrors: Dispatch<SetStateAction<IPaymentForm>>,setIsSubmitting: Dispatch<SetStateAction<boolean>>) => {
    setIsSubmitting(true);

    if (validateForm(cardNumber, expirationDate, cvc, setErrors)) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        alert(`Data: Card number: ${cardNumber}, Expiration Date: ${expirationDate}, CVC: ${cvc}`);
    }

    setIsSubmitting(false);
}