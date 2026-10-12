// Tiny cart module used by the sandbox.
export function addItem(cart, item) {
  const existing = cart.items.find((i) => i.id === item.id);
  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.items.push({ ...item });
  }
  return cart;
}

export function total(cart) {
  return cart.items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

export function removeItem(cart, id) {
  cart.items = cart.items.filter((i) => i.id !== id);
  return cart;
}

// Discount codes. A code is either a percentage off the whole cart
// ({ type: 'percent', value: 10 }) or a fixed amount off ({ type: 'fixed', value: 500 }).
export function applyDiscount(cart, code) {
  cart.discount = code;
  return cart;
}

export function totalAfterDiscount(cart) {
  const subtotal = total(cart);
  const code = cart.discount;
  if (!code) return subtotal;

  if (code.type === 'percent') {
    const pct = Math.min(Math.max(code.value, 0), 100);
    return subtotal - (subtotal * pct) / 100;
  }

  return subtotal - code.value;
}
