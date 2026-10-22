export function checkout(input) {
  if (!input || !Number.isInteger(input.amount) || input.amount <= 0 || input.amount > 100000000) {
    const error = new Error('INVALID_AMOUNT'); error.status = 400; throw error;
  }

  const discountCode = input.user?.discount?.code;

  if (discountCode !== undefined && discountCode !== null) {
    if (typeof discountCode !== 'string') {
      const error = new Error('INVALID_DISCOUNT'); error.status = 400; throw error;
    }

    const code = discountCode.toUpperCase();
    if (code === 'SAVE10') {
      return { total: Math.round(input.amount * 0.9), currency: 'IRT' };
    }
  }

  return { total: input.amount, currency: 'IRT' };
}
