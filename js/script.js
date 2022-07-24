'use strict';

const arr = [1, 2, 3, -1, -2, -3];
 const positiveCheck = function (arrForCheck){
     const defaultResult=[];

     if (!Array.isArray(arrForCheck) || !arrForCheck.length) return defaultResult;

     const positiveArr=[];

     for (let i = 0; i < arrForCheck.length; i++){

         if (typeof arrForCheck [i] !== 'number') continue;
         if ( isNaN(arrForCheck [i])) continue;

         if (arrForCheck [i] > 0) positiveArr.push(arrForCheck [i]);
         }

     return positiveArr.length > 0 ? positiveArr : null;

 }

 console.log(positiveCheck(arr));