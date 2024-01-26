export const formatCurrency = (cents: number) => `$${(cents / 100).toFixed(2)}`;
export const formatBonus = (cents: number) => `$${(cents / 10000).toFixed(2)}`;
