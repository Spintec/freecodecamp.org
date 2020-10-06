var count = 0;

function cc(card) {
  // Only change code below this line
  if (card<=6 && card >=2){
    count++;
  } 
  //*else if(card>=7 && card<=9){
  //*  count+=0;
  //*}
  else {
    count--;
  }

  if (count>0){
    return count+" Bet";
  }
  else if (count<=0){
    return count+" Hold";
  }

  // Only change code above this line
}

(cc(2)); 
(cc(3));
(cc(7));
(cc('K'));
(cc('A'));


