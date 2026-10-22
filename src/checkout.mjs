export function checkout(input) {
  if (!input || !Number.isInteger(input.amount) || input.amount <= 0 || input.amount > 100000000) {
    const error = new Error('INVALID_AMOUNT');
    error.status = 400;
    throw error;
  }

  let total = input.amount;
  const discountCode = input.user?.discount?.code;

  if (discountCode != null) { // Checks for both undefined and null
    if (typeof discountCode !== 'string') {
      const error = new Error('INVALID_DISCOUNT');
      error.status = 400;
      throw error;
    }

    if (discountCode.toUpperCase() === 'SAVE10') {
      total = Math.round(input.amount * 0.9);
    }
  }

  return { total, currency: 'IRT' };
}
