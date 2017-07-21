var price = [0,0,0,0,0];
var numOfItemArray = [0,0,0,0,0];
var total = 0;
var items = 0
var line1 = "";
var line2 = "";
var line3 = "";
var line4 = "";
var line5 = "";
var number = 0;


function addBanana() {
  price[0] += 1.50;
  numOfItemArray[0] ++;
  number = numOfItemArray[0];
  alert("You added a banana to your list.");
  if(price[0] > 0) {
     line1 = "Bananas (" + number ++ + "): " + "$" + price[0];
  } else {
    line1 ="";
  }
}
function addOrange() {
  price[1] += 1.00;
  number1 = numOfItemArray[1]++;
  alert("You added a orange to your list.")
  if(price[1] > 0) {
     line2 = "Orange (" + (number1 + 1) + "): " + "$" + price[1];
  } else {
    line2 ="";
  }
}
function addCoffee() {
  price[2] += 2.50;
  numOfItemArray[2]++;
  alert("You added coffee to your list.")
  if(price[2] > 0) {
     line3 = "Coffee (" + numOfItemArray[2]++ + "): " + "$" + price[2] + "\n";
  } else {
    line3 ="";
  }
}
function addEggs() {
  price[3] += 3.25;
  numOfItemArray[3]++;
  alert("You added eggs to your list.")
  if(price[3] > 0) {
     line4 = "Egg (" + numOfItemArray[3]++ + "): " + "$" + price[3];
  } else {
    line4 ="";
  }
}
function addMilk() {
  price[4] += 1.50;
  numOfItemArray[4]++;
  alert("You added milk to your list.")
  if(price[4] > 0) {
     line5 = "Milk (" + numOfItemArray[4]++ + "): " + "$" + price[4];
  } else {
    line5 ="";
  }
}
function totalPrice() {
 for(i = 0; i <price.length; i++){
   total = total + price[i];
 }

  alert(line1 + "\n"+ line2 + "\n" + line3 +
       + "\n" + line4 + "\n" + line5 +
       "\n Total Price: " + "$" + total);
}
