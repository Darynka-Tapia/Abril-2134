interface SnailPayRequest {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  fullName: string;
  amount: number;
  currentBalance: number;
  payerId: string;
  payerEmail: string;
}

interface SnailPayResponse {
  id: string;
  status: "approved" | "rejected" | "error";
  status_detail: string;
  transaction_amount: number;
  balance: number;
  date_created: string;
  authorization_code: string | null;
  reference: string;
  payer_id: string;
  payer_email: string;
  card_number: string;
  cvv: string;
}

export const snailPay = (
  payment: SnailPayRequest
): SnailPayResponse => {
  const {
    cardNumber,
    expirationDate,
    cvv,
    fullName,
    amount,
    currentBalance,
    payerId,
    payerEmail,
  } = payment;
  const id = "001";
  const reference = `SP-${Date.now()}`;
  const dateCreated = new Date().toISOString();
  console.log('--',currentBalance)
  const newBalance = currentBalance + amount;
  // Simulación de error del sistema
  if (cardNumber === "9999999999999999") {
    return {
      id,
      status: "error",
      status_detail: "SnailPay no está disponible temporalmente.",
      transaction_amount: amount,
      balance: currentBalance,
      date_created: dateCreated,
      authorization_code: null,
      reference,
      payer_id: payerId,
      payer_email: payerEmail,
      card_number: cardNumber,
      cvv,
    };
  }

  // Validaciones
  if (
    !cardNumber ||
    !expirationDate ||
    !cvv ||
    !fullName ||
    !amount ||
    amount <= 0
  ) {
    return {
      id,
      status: "rejected",
      status_detail: "Los datos de la transacción son inválidos.",
      transaction_amount: amount,
      balance: currentBalance,
      date_created: dateCreated,
      authorization_code: null,
      reference,
      payer_id: payerId,
      payer_email: payerEmail,
      card_number: cardNumber,
      cvv,
    };
  }

  // Tarjeta rechazada
  if (cardNumber === "4000000000000002") {
    return {
      id,
      status: "rejected",
      status_detail: "La tarjeta fue rechazada.",
      transaction_amount: amount,
      balance: currentBalance,
      date_created: dateCreated,
      authorization_code: null,
      reference,
      payer_id: payerId,
      payer_email: payerEmail,
      card_number: cardNumber,
      cvv,
    };
  }

  // Cobro exitoso
  if (
    cardNumber === "1234123412341234" &&
    expirationDate === "12/26" &&
    cvv === "543"
  ) {
    return {
      id,
      status: "approved",
      status_detail: "El cobro fue aprobado correctamente.",
      transaction_amount: amount,
      balance: newBalance,
      date_created: dateCreated,
      authorization_code: "SP543210",
      reference,
      payer_id: payerId,
      payer_email: payerEmail,
      card_number: cardNumber,
      cvv,
    };
  }

  return {
    id,
    status: "rejected",
    status_detail: "Los datos de la tarjeta no son válidos.",
    transaction_amount: amount,
    balance: currentBalance,
    date_created: dateCreated,
    authorization_code: null,
    reference,
    payer_id: payerId,
    payer_email: payerEmail,
    card_number: cardNumber,
    cvv,
  };
}