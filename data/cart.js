export let cart =[ {

productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
quantity:2

},
{
   productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
   quantity:3
}



];

export function addToCart (productId)
{
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

     localStorage.setItem('cart', JSON.stringify(cart));
}

export function removeFromCart(productId)
{
  const newCart = [];

  cart.forEach((cartItem)=>
 {
       if(cartItem.productId!==productId)
       {
          newCart.push(cartItem);
       }
  });

  cart = newCart ;

}
