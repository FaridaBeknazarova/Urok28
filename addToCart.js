// Добавление товара в корзину
let addCart=document.getElementsByClassName('add_cart');

let createProduct=function(event){
    'use strict';
    event.preventDefault();
    let title=this.parentNode.parentNode.parentNode.querySelectorAll('.prod_item_title');
    let price=this.parentNode.parentNode.parentNode.querySelectorAll('.prod_item_price .price');
    let oldPrice=this.parentNode.parentNode.parentNode.querySelectorAll('.prod_item_price > del');
    let image=this.parentNode.parentNode.parentNode.querySelectorAll('.prod_item_img > a img');

    let cartItem=document.createElement('div');
    cartItem.classList.add('cart_item');
    
    /*jshint multistr: true */
    cartItem.innerHTML='<div class="item_img">\
                            <img src="'+image[0].src+'" alt="cart_item">\
                        </div>\
                        <div class="item_title">\
                            <p>'+title[0].innerText+'</p>\
                            <p>\
                                <span>$</span><span id="price">'+price[0].innerText+'</span>\
                                <del>'+oldPrice[0].innerText+'</del>\
                            </p>\
                            <a href="#" class="trash"><i class="fas fa-trash-alt"></i></a>';
   
    
    let items=document.querySelector('.dropdown_cart .items');
    items.appendChild(cartItem);
    

    alert('Товар успешно добавлен');

  
    deleteProduct();    

    sumPrice();

    sumQuantity();
    
};
        

for(let i=0; i<addCart.length; i++){
    addCart[i].addEventListener('click', createProduct, false);
}


//Удаление товара из корзины
function deleteProduct(){
    'use strict';
        
    let trash=document.querySelectorAll('.trash');
    
    for(let i=0; i<trash.length; i++){
        trash[i].addEventListener('click', cartItemDelete,false);
    }   


    function cartItemDelete(event){        
            event.preventDefault();
            /*jshint validthis: true */
                        
            this.parentNode.parentNode.remove();
                                              
            sumPrice(); 
            
            sumQuantity();
    }
 
}

//Суммирование цен товаров в корзине
function sumPrice(){
    'use strict';
    let getPrice=document.querySelectorAll('.item_title #price');
        
    let sumPrice=0;
    for(let i=0; i<getPrice.length; i++){        
        
        sumPrice=sumPrice+(+getPrice[i].innerHTML);    
       
        document.getElementsByClassName('sum')[0].innerText=`$ ${sumPrice}`;
        document.querySelectorAll('.cartSum')[0].innerText=`$ ${sumPrice}`;
        
        // console.log(i, getPrice.length, sumPrice);
                
    }
}

function sumQuantity(){
    'use strict';
    let quantity=document.querySelectorAll('.cart_item').length;
    document.querySelectorAll('.quantity')[0].innerText=`${quantity} /  `;
}
