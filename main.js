  <script>
	  
		// Constants
         const TAX_RATE = 5.5;
         const ZERO = 0.00;
         
		// Function to calculate the Restaurant bill with Tax & Tip
         function calculateBillWithTaxAndTip() {
         
         var amountEntered = document.querySelector('#total').value;
         var rateEntered = document.querySelector('#rate').value ;
         
         // validate fields
         if( isNaN(amountEntered) || amountEntered == 0 ) {
            alert("Please enter amount in $");
            document.querySelector('#total').focus();
            return false;
         } else if( isNaN(rateEntered) || rateEntered == 0) {
           alert("Please enter rate in % ");
           document.querySelector('#rate').focus();
           return false;
         }
         
         var totalAmount = parseFloat(amountEntered);
         var tipPercent = parseFloat(rateEntered);
         
            // logic
            var tip = totalAmount * (tipPercent/100);
            var tax = totalAmount * (TAX_RATE/100);
            var grandTotal = totalAmount + tip + tax;
         
         // Setting results to the fields
            document.querySelector('#tip').innerHTML = tip.toFixed(2);
            document.querySelector('#tax').innerHTML = tax.toFixed(2);
            document.querySelector('#grand-total').innerHTML = grandTotal.toFixed(2);
         }
         
		 // Reset the fields
         function reset() {
         document.querySelector('#total').value = '';
         document.querySelector('#rate').value = '';
         document.querySelector('#tip').innerHTML = ZERO.toFixed(2);
         document.querySelector('#tax').innerHTML = ZERO.toFixed(2);
         document.querySelector('#grand-total').innerHTML = ZERO.toFixed(2);
         }
      </script>