$("<h1>")

// var eventName = document.getElementById("event-name");
// var ticket = document.getElementById("num-tickets");
// var date = document.getElementById("date");
// var saveButton = document.getElementById("save");
// var savedName = document.getElementById("saved-name");

//saveButton.addEventListener("click", function(event) {
//event.preventDefault();


//var event = {
//eventname: event.value,
//date: date.value,
// numTickets: numTickets.value.trim()
// };
// var events = JSON.parse(localStorage.getItem("events"));
//console.log......
// events.push(event)
// localStorage.setItem("events", JSON.stringify(events));
// renderMessage();

// });

// function renderMessage() {
//   var lastGrade = JSON.parse(localStorage.getItem("event"));
//   if (lastGrade !== null) {
//     document.querySelector(".message").textContent = lastGrade.student + 
//     " received a/an " + lastGrade.grade
//   }
// }
1. GET INSIDE LOCAL STORAGE AND SAV INTO EMPTY VAR ( AN ARRAY OF OBJECTS WHIXH IS YOUR TICKETS.)
2.PUSH NEW TIOCKET TO ARRAY WITH OLD TICKETS. AFTER THAT, TAKE ARRAY AND SAVE INTO LOCAL STORAGE (THE ARRAY).


$(document).ready(function() {

    /* Set rates + misc */
    var taxRate = 0.06;
    var fadeTime = 300;
  
    $('.pass-quantity input').change(function() {
      updateQuantity(this);
    });
  
    $('.remove-item button').click(function() {
      removeItem(this);

    });
  
  
    /* Recalculate cart */
    function recalculateCart() {
      var subtotal = 0; //need to find a way to select the product price and 
      //calculate the subtotal based on the amount of tickets 
      
      // $(this).value();
      console.log(subtotal);
      
  
  
      /* Sum up row totals */
      $('.item').each(function() { 
        console.log(subtotal);
        parseInt (subtotal += $(this).children('.product-price').text());
        console.log(subtotal);
      });
  
      /* Calculate totals */
      var tax = subtotal * taxRate;
      var total = subtotal + tax;
      console.log(total);
  
      /* Update totals display */
      $('.totals-value').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal);
        $('#cart-tax').html(tax);
        $('.cart-total').html(total);
        if (total == 0) {
          $('.checkout').fadeOut(fadeTime);
        } else {
          $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
      });
    }
  
    /* Update quantity */
    function updateQuantity(quantityInput) {
      /* Calculate line price */
      var productRow = $(quantityInput).parent().parent();
      var price = parseInt(productRow.children('.product-price').text());
      var quantity = $(quantityInput).val();
      var linePrice = price * quantity;
  
      /* Update line price display and recalc cart totals */
      productRow.children('.product-line-price').each(function() {
        $(this).fadeOut(fadeTime, function() {
          $(this).text(linePrice.toFixed(2));
          recalculateCart();
          $(this).fadeIn(fadeTime);
        });
      });
    }
  
    /* Remove item from cart */
    function removeItem(removeButton) {
      /* Remove row from DOM and recalc cart total */
      var productRow = $(removeButton).parent().parent();
      productRow.slideUp(fadeTime, function() {
        productRow.remove();
        recalculateCart();
      });
    }
  
  });
  