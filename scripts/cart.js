export let cart = JSON.parse(localStorage.getItem('cartKey')) || [];

export const saveCart = () => {
  localStorage.setItem('cartKey', JSON.stringify(cart));
};





