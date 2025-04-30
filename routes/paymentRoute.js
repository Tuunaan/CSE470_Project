import express from "express";
import Stripe from "stripe";

console.log("var", process.env.NEW_VAR);
const router = express.Router();
const stripe = new Stripe(
  "sk_test_51Qc3Xl2cMEiVuH9DPUlHn6ZGty8BV2TxmPscs7WWFOcwLspp0DVbxBi9Fr0GPdlgduoUoo65QaJ4h7CV61TfsvDs00OUvAO2hs"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router;
