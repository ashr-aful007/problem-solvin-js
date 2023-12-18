// 1.problem

var giveHisMom = 1000;
var apple = 400;
var orange = 300;
// total apple and orange price
var toatalCost = apple + orange;
console.log(toatalCost)
// back amount claclution
var backMony = giveHisMom - toatalCost;
// console.log(backMony)

// 2.problem
//subject number
var subNumber = [75.25, 65.80, 35.45, 99.50];
var totalNumber = 75.25 + 65.80 + 35.45 + 99.50;
console.log(totalNumber)
//average number 
var averageNumber = totalNumber / 5;
console.log(averageNumber)
//convert intiger Number
 var averageNumberConvert = parseInt(averageNumber);
 console.log(averageNumberConvert)

//3.problem
var frstLine = ['i am going to be'];
var secendLine = ['an awesome web developer'];
console.log(frstLine+' '+secendLine)

//4.problem
var mainNumber = 119;
var dividedNumber = 5;
// remainder number
var remainderNumber = mainNumber % dividedNumber;
console.log(remainderNumber)

//5.problem
var arry = ['banana', 'orange']
console.log(positionIndex)
var positionIndex = arry.indexOf('banana')

arry[0] = 'mango'

//cut dawn orange
var replese = arry.splice(1,1)

// add items in arry
arry.push('watermelon')
// console.log(arry)

//6.problem
var number = 95;
if(number<=100 && number>=80){
     console.log('congress you got A grade')
}
else if(number<=79 && number>=60){
     console.log('congress you got B grade')
}
else if(number<=59 && number>= 40){
     console.log('congress you got C grade')
}
else if(number<=39 && number){

}

//7. problem solve another way
var frinedScore = [85, 66, 95, 56, 40];
var friendsName = ['tom', 'janne', 'peter', 'jhon'];

for(var i =0, j=0; i<frinedScore.length; i++, j++){
     if(frinedScore[i]>=80){
          console.log(friendsName[j],'Grade is A');
     }
     else if(frinedScore[i]>=60){
          console.log(friendsName[j],'Gride is B');
     }
     else if(frinedScore[i]>=50){
          console.log(friendsName[j], 'Gride is C');
     }
     else if(frinedScore[i]>=40){
          console.log(friendsName[j],'Gride is D');
     }
     else if(frinedScore[i]>=39){
          console.log(friendsName[j], 'Gride F')
     }
     else{
          console.log(friendsName[j],'your are faill')
     }
}

//8.problem
var item1 = 13;
var item2 = 79;
var item3 = 45;
if(item1>item2){
     console.log(item1, '13 is begger than other')
}
else if(item2>item1){
     console.log(item2, '79 is begger than other')

}
else if(item3>item2){
     console.log(item3, '45 is begger than other')
}
else if(item3<item1){
     console.log(item3, '13 is begger than other')
}
else{
     console.log('no one is the bigger')
}

//9.problem
var angleOne = 9;
var angleTwo = 8;
var angleThree = 9;

if(angleOne>=angleTwo){
     console.log('it is triangle')
}
else if(angleTwo>=angleThree){
     console.log('it is triangle')
}
else if(angleOne>=angleThree){
     console.log('it is triangle')
}
else{
     console.log('it is not triangle')
}

//10.problem
var num = 1;
while(num <= 10){
     console.log(num);
     num++;
}
for(var i= 1; i <= 10; i++){
     console.log(i);
     if(i == 5){
          break;
     }
}
// 11.problem
var taka = 50000;
if(taka<= 80000){
     console.log('I can bay laptop')
}
else if(taka<= 60000){
     console.log('i can bay gaming laptop')
}
else if(taka<= 40000){
     console.log('i can bay lenovo youga')
}
else if(taka<= 20000){
     console.log('i can bay secend hand laptop')
}

// 12.problem
for(var i=1; i<=39; i++){
     console.log('ajke amar mon valo ney')
}

// 13.problem
for(var i=58; i<=98; i++){
     console.log(i)
}

// 14.problem
var num = 412;
while(num <= 456){
     console.log(num)
     num +=2;
}

// 15.problem
for(var i=581; i<=623; i +=2){
     console.log(i)
} 
var corseModiul =['Html', 'bootstrap', 'Css', 'javascript'];
for(var i=0; i<=corseModiul.length; i++){
     console.log(corseModiul[i])
} 

// 16.problem
var phone = ['samsang', 'shawmi', 'symphoni'];
var count = 0;
while(count < phone.length){
     console.log(phone[count]);
     count++;
}

// 17.problem
var bookPrice = [100, 65, 150, 180, 190, 200, 300, 400];
for(var i = 0; i< bookPrice.length; i++){
     if(bookPrice[i] > 200){
          continue;         
     };
     console.log(bookPrice[i])
}

//18.problem
function foo(){
     console.log(foo);
}
foo()

function bar(){
     console.log(bar);
     foo()
}
bar()

function make_avg(num1, num2, num3){
     totalParamiatr = num1 + num2 + num3;
     avarageNumber = totalParamiatr / 3;
     backAvarageNumber = parseFloat(avarageNumber);
     console.log(backAvarageNumber);
    
}

// make_avg(45, 20, 15);

//19.problem
// inchs to convert fit
const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

// convert inch to feet
const dataInches = 144;
const dataFeet = dataInches /12;
console.log('data feet', dataFeet)

// convert inch to feet
const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log('dadiFeet', dadiFeet)

// inch to feet convater
function inchToFeet(inches){
     const feet = inches / 12;
     return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
// console.log('nana feet',nanaFeet);


//20. mils to kilomitar js
function milsTokilomitar(mils){
     const kiloMitar = mils / 1.609;
     return kiloMitar;
}

const milsToConvert = 1500;
// const kiloMitar = milsTokilomitar(mils);
console.log(kiloMitar)

const milsToConvert = 1400;
// const kiloMitar = milsTokilomitar(milsToConvert);
console.log(kiloMitar)

// mils to km converter
function milsToConvert(mils){
     kilomiter = mils*1.606;
     return kilomiter;
}

const milsToKm = 2500;
const kiloMitar = milsToConvert(milsToKm);
// console.log(kiloMitar)

//21.problem even and odd number cheker

function evenAndOdd(number){
   const reminder = number % 2;
     if(reminder === 0){
          console.log('it is a even number')
          return true;
     }
     else{
          return false;
     }
}

const inputNumber = 780;
const evenOrOd = evenAndOdd(inputNumber);
// console.log(inputNumber +'number is '+evenOrOd)


//22.problem check leap year or not

function leapYear(year){
     const remainder = year % 4;
     if(remainder=== 0){
          return true
     }
     else{
          return false
     }
}

const yearValue = 2024;
// const leapYearOrNot = leapYear(yearValue);
console.log(leapYearOrNot);


// another way 

function leapYear(year){
     reminder1 = year % 4;
     reminder2 = year % 100;
     reminder3 = year % 400;
     if((reminder1 === 0) && (reminder2 != 0)||reminder3 === 0){
          return true;
     }
     else{
          return false;
     }   
}
const GivenYear = 2065;
const leapYearOrNot = leapYear(GivenYear);
// console.log(leapYearOrNot)


//23.problem arry even and odd number sum
function getSumOfAnArry(numbers){

     sum = 0;
     for(let i = 0; i < myNumbers.length; i++){
          let index = i;
          let arryItems = myNumbers[index];
          sum = sum + arryItems;
          console.log(sum)
     }    
}

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSumOfAnArry(myNumbers);

// how to add arry odd number
function getOddNumbersOfArry(number){
     const oddNumber = [];
     for(let i =0; i<myNumbers.length; i++){
          const index = i;
          const element = number[index];
          if(element % 2 === 1){
               console.log(index, element)
               oddNumber.push(element);
          }
     }
     return oddNumber;
     
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumber = getOddNumbersOfArry(myNumbers);
getSumOfAnArry(oddNumber)
const oddNumberSum = console.log(oddNumber);
// console.log('odd number sum ', sum)

//24.multification in javascript factorial
function factorial(number){
    let result = 1;
     for(let i=1; i<=number; i++){
          result = result * i;
     }
     return result;
}

const result = factorial(9);
// console.log(result)


// 25.problem factorial reverse js
function factorial(number){
     let result =1;
     for(let i=number; i>=1 ; i--){
          result = result*i;
          console.log(i);         
     }
     return result;
}
const number = 6;
const fact = factorial(number);
console.log('factorial of 9:',number, fact);

// factorial while js
function factorial(number){
     let num = 1;
     let result = 1;
     while(num <= 7){
          result = result * num;
          num++;

     }
     return result;
}
const givenNumber = 10;
const factorialAns = factorial(givenNumber);
console.log(factorialAns);

// while loop reverse way
function factorial(number){
     let i= number;
     let result= 1;
     while(i>=1){
          result =result * i;
          i--;
     }
     return result;
}

const revFactorialNumber = 7;
const factorialNumber = factorial(revFactorialNumber);
// console.log(factorialNumber);

//26.problem find the large number
const jim = 84;
const dela = 75;

if(jim > dela){
     console.log('jim will get the cake');
}
else{
     console.log('dela will get the cake')
}

// find large number out of three

// const jim = 84;
// const dela = 99;
// const chinku = 77;

if(jim > dela && jim > chinku){
     console.log('jim will get the cake');
}
else if(dela > jim && dela > chinku){
     console.log('dela will get the cake')
}
else{
     console.log('chinku will get the cake')
}

// min and max number use Math and write a function

function maxandMinNumber(number1, number2, number3){
     result = Math.max(number1, number2, number3)
     return result;
}

let number1 = 89;
let number2 = 79;
let number3 = 69;

const numberMinAndMax = maxandMinNumber(number1, number2, number3);
console.log(numberMinAndMax)



function minNumber(number1, number2, number3 ){
     result = Math.min(number1, number2, number3);
     return result;
}

// let number1 = 36;
// let number2 = 100;
// let number3 = 69;

const numberMin = minNumber(number1, number2, number3 );
console.log(numberMin);

// min and max number if elase
let num1 = 120;
let num2 = 140;
let num3 = 150;

if(num1 > num2 && num1 > num3){
     console.log('num1 bigger then other number');
}
else if(num2 > num1 && num2 > num3 ){
     console.log('num2 bigger then other number');
}
else{
     console.log('num3 bigger then other number');
}

// 27.problem how to find max number in arry

function maxArray(numbers){
     let largest = numbers[0]
   for(let i= 0; i<numbers.length; i++){
     const index = i;
      const element = numbers[index];
      if(element > largest){
          largest = element;
      }
   }
   return largest;

}

const heights = [167, 170, 120, 165, 137];
const tallest = maxArray(heights);
console.log(tallest)

// write a function to get min number
function minArry(numbers){
      let minNumber = numbers [0];
    for(let i =0; i <numbers.length; i++){
       const index = i;
       const element = numbers[index];
       if(element < minNumber){
           minNumber = element;
       }
    
     }
    return minNumber;

}
const numbrsArry = [120, 110, 130, 140, 150]
const getMinNumber = minArry(numbrsArry);
console.log(getMinNumber)

//28.problem reversd String  and join
function reverseString(text){
     const words = text.split(' ');
     let reversed =[];
     for(let i = words.length-1; i>= 0; i--){
          const element =words[i];
          reversed.push(element)
     }
     const rverseAdd = reversed.join(' ');
     return reversed;
     
}

const myString = 'I am a good boy';
const reversed = reverseString(myString);
// console.log('reversd output:', reversed)

//29. if the number is divisible by 3 then instead of the number show 'foo'
for( let i =0; i<=50 ; i++){
      if(i % 3 ===0 && i % 5===0){
          console.log('foobar')
     }
     else if(i % 3 === 0){
          console.log('foo');
     }
     else if(i % 5 === 0){
          console.log('bar')
     }
     else{
          console.log(i)
     }

}

// 30.redian to Degree converter 
function radianToDegree(radian){
     //validation
     if(typeof radian !== 'number'){
          return 'please enter valid number'
     }
     //redian to Degree convert
     let degree = radian * (180 / Math.PI);
     let result  = degree.toFixed(2)
     return result;
}

let givePramitar = radianToDegree(30);
// console.log(givePramitar);


//32.check js file or not if its javascript file return true.
function isJavaScriptFile(String){
     //validation for case number and string
     if(typeof String !== 'string'){
          return 'please enter valid file name!'
     }
    //validation lowerCase and value store *string.
   let string = String.toLowerCase();
   //chack .js Extension  exist or not.
   let checkString = String.endsWith('.js');
   if(checkString == true){
     return true;
   }
   else{
     return false;
   }
}

let checkValue = isJavaScriptFile('hello.js.jpg');
// console.log(checkValue);


//33.calculation oil price
function oilPrice(diesel, petrol, octane){
     //validation for case
     if(typeof diesel == 'string' || typeof petrol == 'string' || typeof octane == 'string' ){
          return 'please enter valid quantity'
     }
     // given data per litter price
     const perLitterDieselPrice = 114;
     const perLitterPetrolPrice = 130;
     const perLitterOctanePrice = 135;
     //multiply quantity and price
     let dieselPrice = diesel * perLitterDieselPrice;
     let petrolPrice = petrol * perLitterPetrolPrice;
     let octanePrice = octane * perLitterOctanePrice;
     let totlalOilprice = dieselPrice + petrolPrice + octanePrice;
     return totlalOilprice;
}

let contity = oilPrice(1, 1, 1);
// console.log(contity);

//34.cal publice bus fare total cost
function publicBusFare(candidate){
     //validation
     if(candidate == 'string'){
          return 'please enter valid number'
     }
     const busCapasity = 50;
     const microBusCapasity = 11;
     const publicBusFarePrice = 250;
    //cal publicBus fare
     let reminder = candidate % busCapasity;
     let reservedCandidate = reminder % microBusCapasity;
     let totalpublicBusFare = reservedCandidate * publicBusFarePrice;
     return totalpublicBusFare;

}

let candidatenumber = publicBusFare(235);
// console.log(candidatenumber)



//35.write a function for bestfriend or not
function isBestFriend(FirstObject, secondObject){
     //validation case
     // if(FirstObject.name == 'number' ||  secondObject.friend == 'number'){
     //      return 'plase enter valid name'
     // }
     //find same name in different key and compare. 
     let findSameName = FirstObject.name;
     let findFriendName = secondObject.friend; 
     let findSameName2 = FirstObject.friend;
     let findFriendName2 = secondObject.name;
     
     if(findSameName == findFriendName){
          return true;
     }
     else if(findSameName2 == findFriendName2){
          return true;
     }
     else{
          return false;
     } 
}
const FirstObject = {name:'kabul', friend:'cabul'};     
const secondObject ={name:'cabul', friend: 'khalik'};

let isBestFriendOrNot = isBestFriend(FirstObject, secondObject);
// console.log(isBestFriendOrNot);
// console.log(isBestFriendOrNot);


// cal factorial !4 = 24 
function factorial(n){
     //base case
     if(n==0 || n==1){
          return 1;
     }else{
          return n * factorial(n-1)
     }
}

// factorial(4)

//cal greade prient D when pramiter is 11
function gradeCal(score){
     let grade;
     const scores = [0, 5, 10, 15, 20, 25, 30];
     const grades = ['F','E','D','C','B','A'];
      for(let i = 0; i < scores.length; i++){
      if(score<=scores[i+1] && score>scores[i]){
        grade = grades[i]
     }    
  }
  return grade;
}

// const result = gradeCal(11)
// console.log(result)


//case when number 2 - 6 increse 1.
//10 'j', 'Q', 'k', 'A'  decrse 1
//when count less than 0 return count spece Bet other Hold


//soluation 
// let count = 0;

function cc(card){
     switch(card){
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          count ++;
          break;
          case 10:
          case 'j':
          case 'Q':
          case 'k':
          case 'A':
          count --;
          break;         
     }

     if(count > 0){
          return count + 'Bet'
     }else{
          return count + 'Hold'
     }
}

// cc(2);  cc(A);


//another soluation

// let count = 0;

function bb(card){
     let regex = /[jQKA]/;

     if(card > 1 && card < 7){
          count ++;
     }else if(card === 10 || regex.test(card)){
          count --;
     }

     if(count > 0) return count + "Bet";
     return count + "Hold"
}


bb(5)


let count = 0

function dd(card){
       let cardValue 
     if(typeof card === 'number' || /^\d + $/.test(card)){
          cardValue = parseInt(card)
     }else if(['J', 'Q', 'K', '10', 'A'].includes(card)){
          cardValue = -1
     }else{
          cardValue = 1
     }

     if(count > 0){
          return `${count} Bet`
     }else{
          return `${count} Hold`
     }
}

// dd(2)