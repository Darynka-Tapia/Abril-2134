export interface AddBalanceResponse {
  id: string;
  status: "approved" | "rejected" | "error";
  status_detail: string;
  transaction_amount: number;
  balance: string;
  date_created: string;
  authorization_code: string | null;
  reference: string;
  payer_id: string;
  payer_email: string;
  card_number: string;
  cvv: string;
}

export const addBalance = async ({
  amount,
  cardNumber,
  expirationDate,
  cvv,
  fullName,
}: {
  amount: number;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  fullName: string;
}): Promise<AddBalanceResponse> => {
  const currentBalance = Number(localStorage.getItem("balance") || 0.00);
  const response = await fetch("http://localhost:3000/api/balance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cardNumber: cardNumber,
      expirationDate: expirationDate,
      cvv: cvv,
      fullName: fullName,
      amount,
      currentBalance,
      payerId: "user-001",
      payerEmail: "user@example.com",
    }),
  });

  const data = await response.json();

  console.log(data)
  return data;
};