export function checkout(input) {
  if (!input || !Number.isInteger(input.amount) || input.amount <= 0 || input.amount > 100000000) {
    const error = new Error('INVALID_AMOUNT'); error.status = 400; throw error;
  }

  const discountCode = input.user?.discount?.code;

  if (discountCode !== undefined && typeof discountCode !== 'string') {
    const error = new Error('INVALID_DISCOUNT'); error.status = 400; throw error;
  }

  const total = (discountCode && discountCode.toUpperCase() === 'SAVE10')
    ? Math.round(input.amount * 0.9)
    : input.amount;

  return { total, currency: 'IRT' };
}
