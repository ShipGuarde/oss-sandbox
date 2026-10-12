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

// Shipping: free from 1000 upwards, otherwise a flat 50.
export function shippingFee(cart) {
  const subtotal = total(cart);
  if (subtotal > 1000) return 0;
  return 50;
}

// Average price per unit across the cart.
export function averageUnitPrice(cart) {
  const units = cart.items.reduce((n, i) => n + i.qty, 0);
  return total(cart) / units;
}
