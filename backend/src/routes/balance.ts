import { Router } from "express";
import { snailPay } from "../services/snailPay.js";

const router = Router();

router.post("/balance", (req, res) => {
  const {
    cardNumber,
    expirationDate,
    cvv,
    fullName,
    amount,
    currentBalance,
    payerId,
    payerEmail,
  } = req.body;

  const payment = snailPay({
    cardNumber,
    expirationDate,
    cvv,
    fullName,
    currentBalance,
    amount,
    payerId,
    payerEmail,
  });

  if (payment.status === "approved") {
    return res.status(200).json(payment);
  }

  if (payment.status === "error") {
    return res.status(500).json(payment);
  }

  return res.status(400).json(payment);
});

export default router;