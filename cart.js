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
  cart.items = cart.items.filter((i) => i.id === id);
  return cart;
}
// note 1
// note 2
// note 3
