export function checkoutButton(cartHTML){
  if(cartHTML){
    document.querySelector('.checkout').innerHTML = `<button class="checkout-button" onclick = "location.href='checkout.html'">Checkout</button>`;
  }
}

export function finishOrder(){
  document.querySelector('.finish-order').innerHTML = `<button class="checkout-button" onclick = "
    localStorage.setItem('cartCleared', 'true');
    location.href='menu-burgers.html'
    ">Finish Order</button>`;
}