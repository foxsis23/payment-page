'use client'

import Image from "next/image";
import {useState} from "react";

import {IPaymentForm} from "@/lib/types/paymentForm";
import {submitPaymentForm} from "@/components/payment-form/PaymentForm.funcs";

export const PaymentForm = () =>{
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvc, setCvc] = useState('');

    const [isSubmitting,setIsSubmitting] = useState(false);

    const [errors, setErrors] = useState<IPaymentForm>({
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    });

    const handleSubmit = async(event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submitPaymentForm(cardNumber,expirationDate,cvc,setErrors,setIsSubmitting)
    };


    return (
        <div className="flex flex-col items-center justify-center m-auto max-w-[420px] gap-6">
            <div className="text-center">
                <p className="text-semibold text-2xl">5 days free</p>
                <p className="text-sm">then 299.99 UAH per 14 days</p>
            </div>
            <button className="flex items-center justify-center rounded bg-black w-full p-3.5 hover:bg-black/80 ease-in duration-200 transition-all">
                <Image src="applePay.svg" alt="applePayIcon"  width={48} height={20} />
            </button>
           <div className="flex flex-col gap-4">
               <div className="flex items-center justify-center gap-4 w-full">
                   <hr className="border-gray-300 flex-grow" />
                   <p className="text-gray-500 text-sm">or pay with card</p>
                   <hr className="border-gray-300 flex-grow" />
               </div>

               <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
                   <div className="flex flex-col gap-3">
                       <div className="flex flex-col gap-1 w-full">
                           <label className={`text-xs text-gray-600 ${errors.cardNumber && "text-rose-500"}`}>Card Number</label>
                           <input
                               className={`px-3 py-2.5 rounded-md border border-gray-400 placeholder-gray-500 shadow-md hover:border-gray-500 transition-all ease-in duration-200 ${errors.cardNumber && "border-rose-500 placeholder-rose-500"}`}
                               type="text"
                               value={cardNumber}
                               onChange={(e) => setCardNumber(e.target.value)}
                               maxLength={16}
                               placeholder="1234 1234 1234 1234"
                           />
                           {errors.cardNumber && <p className="text-sm text-rose-500">{errors.cardNumber}</p>}
                       </div>

                       <div className="flex flex-row gap-2 w-full justify-stretch">
                           <div className="flex flex-col gap-1 w-full">
                               <label className={`text-xs text-gray-600 ${errors.expirationDate && "text-rose-500"}`}>Expiration Date</label>
                               <input
                                   className={`px-3 py-2.5 rounded-md border border-gray-400 placeholder-gray-500 shadow-md hover:border-gray-500 transition-all ease-in duration-200 ${errors.expirationDate && "border-rose-500 placeholder-rose-500"}`}
                                   type="text"
                                   value={expirationDate}
                                   maxLength={5}
                                   onChange={(e) => setExpirationDate(e.target.value)}
                                   placeholder="MM/YY"
                               />
                               {errors.expirationDate && <p className="text-sm text-rose-500">{errors.expirationDate}</p>}
                           </div>

                           <div className="flex flex-col gap-1 w-full">
                               <label className={`text-xs text-gray-600 ${errors.cvc && "text-rose-500"}`}>CVC</label>
                               <div className="relative">
                                   <input
                                       className={`px-3 py-2.5 rounded-md border border-gray-400 placeholder-gray-500 shadow-md hover:border-gray-500 transition-all ease-in duration-200 ${errors.cvc && "border-rose-500 placeholder-rose-500"}`}
                                       type="password"
                                       value={cvc}
                                       onChange={(e) => setCvc(e.target.value)}
                                       maxLength={3}
                                       placeholder="CVC"
                                   />
                                   <Image src="info.svg" alt="infoIcon" width={18} height={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 " />
                               </div>

                               {errors.cvc && <p className="text-sm text-rose-500">{errors.cvc}</p>}
                           </div>
                       </div>
                   </div>

                   <div className="flex flex-col gap-2">
                       <button type="submit" className="bg-[#028837] hover:bg-[#029C3F] active:bg-[#02742F] text-white py-3 px-4 rounded-md w-full text-base font-semibold transition-all ease-out duration-100">
                           {isSubmitting ? (
                               <div className="flex flex-row gap-3 items-center justify-center">
                                   <Image src="loader.svg" alt="loader" width={18} height={18} className="animate-spin" />
                                   <p>Processing payment</p>
                               </div>
                           ): "Start Trial"}
                       </button>
                       <p className="border border-gray-300 px-4 py-3 rounded-lg text-xs text-gray-500">
                           You'll have your <span className="font-bold">Plan Pro during 1 year.</span> After this period of time, your plan will be <span className="font-bold">automatically renewed</span> with its original price without any discounts applied.
                       </p>
                   </div>

               </form>
           </div>

            <div className="bg-gray-100 px-4 py-3 flex flex-col gap-4 rounded-lg w-full">
                <p className="font-semibold text-lg">Order info &lt;= 100 char.</p>
                <p className="text-sm">Description &lt;= 400 char.</p>

                <hr className="border-gray-200 w-full" />

                <div className="flex flex-col">
                    <p className="text-sm">Lamel Professional Smart Skin Compact Powder</p>
                    <p className="text-xs text-gray-500">Пудра для лица</p>
                </div>

                <hr className="border-gray-200 w-full" />

                <p className="font-semibold text-base self-end">299.99 UAH / <span className="text-sm">month</span></p>
            </div>
        </div>
    )
}