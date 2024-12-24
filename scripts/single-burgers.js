import {singleProducts} from "../data/single-products.js";
import {cart, saveCart} from "./cart.js"; 
import {formatCurrency} from "./utils/currency-formatter.js";
import {checkoutButton} from "./utils/checkout-button.js"

let singleProductsHTML = '';

singleProducts.forEach((item) => {
  singleProductsHTML += ` 
    <button class="products singleproducts"
    data-product-name = "${item.name}"
     data-product-price = "${item.priceCents}">
        ${item.name}
    </button>`; 
});

document.querySelector('.single-products-grid').innerHTML = singleProductsHTML;

let cartHTML = localStorage.getItem('cartHTML');
document.querySelector('.cart-container').innerHTML = cartHTML;
checkoutButton(cartHTML);


document.querySelectorAll('.singleproducts').
  forEach((button)=>{

    button.addEventListener('click',() => {

      let quantity = Number(document.getElementById('box-display').innerText);
      if(quantity === 0){
        quantity = 1;
      }
      const productName = button.dataset.productName;
      const priceCents = button.dataset.productPrice;


      let matchingItem;
      cart.forEach((item) =>{
        if(productName === item.productName){
          matchingItem = item;
        }
      });

      if(matchingItem){
        matchingItem.quantity += quantity;
        matchingItem.priceCents = matchingItem.quantity * priceCents;
      }else{
        cart.push({
          productName: productName,
          quantity: quantity,
          priceCents: quantity*priceCents,
        });
      }

      saveCart();
      document.getElementById('box-display').innerText = '0';

      cartHTML = '';
      
      cart.forEach((item) => {
        cartHTML += `
        <div class="cart-display">
        <span class="cart-item">
        ${item.quantity}x - ${item.productName} </span>
        ${'€'+formatCurrency(item.priceCents)}
        </div>`
      });

      checkoutButton(cartHTML);
      localStorage.setItem('cartHTML', cartHTML);

      document.querySelector('.cart-container').innerHTML = cartHTML;
    });
});

