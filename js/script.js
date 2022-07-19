'use strict';

const arr = [1, 2, 15, -2, 8];
 const positiveCheck = function (arr){
     const positiveArr=[];

     if (arr.length === 0) {
         console.log ('Entered array is empty');
     } else {
         for (let i = 0; i < arr.length; i++){
             if (arr [i] > 0) positiveArr.push(arr [i]);
             }
         }

     if (positiveArr.length === 0) return null;
     return positiveArr;

 }

 console.log(positiveCheck(arr));