/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: adithya and pranay
      Date:   09/13/24

      Filename: project03-01.js
*/
var menuItems = document.getElementsByClassName("menuItem")

for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", calcTotal);
      }
      
      function calcTotal() {
      var orderTotal = 0;
      
      for (var i = 0; i < menuItems.length; i++) {
      if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
      }
      }
      
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
      }

 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }