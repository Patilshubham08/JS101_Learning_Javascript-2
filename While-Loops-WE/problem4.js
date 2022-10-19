//Problem 4: Print the average of even numbers from 1 to 100 (both included)
let sum=0;
let count =0
let x=1;
let avg;
 while(x<=100){
   if(x%2===0){
     count++
     sum+=x
     
   }
   
   x++
 }console.log(sum/count)