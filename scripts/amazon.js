
let productsHtml=``;

products.forEach((product)=>{

  productsHtml+=`

      <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
             ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
       ${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select data-product-id ="${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart" data-product-id="${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary" 
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
      
  `;

  



});


document.querySelector('.js-products-grid').innerHTML=productsHtml;

document.querySelectorAll('.add-to-cart-button').forEach((button) => {

  button.addEventListener('click',()=>
  {   
      const productId=button.dataset.productId;
      const select = document.querySelector(`.product-quantity-container select[data-product-id="${productId}"]`);
      const selectedQuantity = parseInt(select.value,10);
      const added = document.querySelector(`.added-to-cart[data-product-id="${productId}"]`);

      added.classList.add("show");

      setTimeout(()=>
      {
        added.classList.remove("show");

      },5000);


      let matchingItem;
      cart.forEach((item)=>
      {
        if (productId === item.productId)
        {
            matchingItem=item;
        }
      });

      if (matchingItem)
      {
        matchingItem.quantity+=selectedQuantity;
      }
      else {
      cart.push({

        productId:productId,
        quantity:selectedQuantity

      });
    }
  let totalQuant=0;
  cart.forEach((item)=>
  {
      totalQuant+=item.quantity;
  }) ; 
  console.log(cart);
  console.log(totalQuant);

  document.querySelector('.js-cart-quantity').innerHTML=totalQuant;
      
  });

});





