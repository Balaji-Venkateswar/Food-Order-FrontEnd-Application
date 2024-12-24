import {cart} from "./cart.js"; 
import {formatCurrency} from "./utils/currency-formatter.js";
import {finishOrder} from "./utils/checkout-button.js"

let cartHTML = localStorage.getItem('cartHTML');


let totalPrice = 0;
cart.forEach((item) => {
  console.log(item);
  totalPrice += Number(item.priceCents);
});

cartHTML += `<div class="billing">
Total ${ '€'+formatCurrency(totalPrice)}
</div>`;
document.querySelector('.cart-container').innerHTML = cartHTML;


document.querySelector('.amount-paid').addEventListener('click', () => {

  const paidAmount = document.getElementById('box-display').innerText;

  if(paidAmount < totalPrice){
    alert("Insufficient payment")
  }
  else{
    cartHTML += `<div class="billing">
    Paid ${ '€'+formatCurrency(paidAmount)}
    </div>`;

    cartHTML += `<div class="billing">
    Balance ${'€'+formatCurrency(paidAmount - totalPrice)}
    </div>`;

    document.querySelector('.cart-container').innerHTML = cartHTML;

    finishOrder();
  }

});

