import { useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

export const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [errorMessage, setErrorMessage] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (elements == null) {
      return
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit()
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message)
      return
    }

    const client_secret = import.meta.env.VITE_PLAT

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      client_secret,
    })

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message)
    } else {
      setShowSuccess(true)
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex bg-white flex-col w-full max-w-md mx-auto">
        <PaymentElement />

        <button
          className="text-white bg-gray-300 hover:bg-gray-400 text-lg font-bold py-2 px-4 "
          type="submit"
          disabled={!stripe || !elements}
        >
          Pay
        </button>

        {/* Show error message to your customers */}
        {errorMessage && <div>{errorMessage}</div>}
      </form>
      {showSuccess && (
        <div className="text-3xl flex-col w-full max-w-md mx-auto">
          <div className="flex justify-center">Payment was successful</div>
          <div className="flex justify-center">Thank you for your purchase!</div>
          <div className="p-5 text-base italic flex justify-center">
            Please check your email for a receipt, location and details
          </div>
        </div>
      )}
    </>
  )
}
