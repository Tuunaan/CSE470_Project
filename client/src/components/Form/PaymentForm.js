import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment({ total }) {
  console.log(total);
  const navigate = useNavigate();
  const KEY =
    "pk_test_51Qc3Xl2cMEiVuH9DPMuvygrpg8jRzPNja57mYFcmo3vus8p18vZ32HsyTgVuaMeQnLnOcPPJf2LBmoy1O6o38Zdw00OzSvICra";

  const amountInCents = parseInt(total.substring(1)) * 100;
  const [stripeToken, setStripeToken] = useState("");
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetch(
        "http://localhost:8080/api/v1/checkout/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: amountInCents,
            tokenId: stripeToken.id,
          }),
        }
      );

      console.log(response);

      const data = await response.json();
      console.log(data);
      navigate("/success");
      console.log(data);
    };

    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div className="flex justify-center items-center h-screen">
      {stripeToken ? (
        <span>Processing</span>
      ) : (
        <StripeCheckout
          name="TAKA"
          image="https://i.imgur.com/chhXCKW.png"
          billingAddress={true}
          shippingAddress={true}
          description={`Your total is ${total}`}
          amount={total}
          token={onToken}
          stripeKey={KEY}
        >
          <button className="bg-black text-white px-4 py-2 rounded">Pay</button>
        </StripeCheckout>
      )}
    </div>
  );
}
