


//pats salmon cookies

/*We need to  calculate the number of cookies each location must make every day
 so that it can manage its supplies inventory and baking schedule.
  The number of cookies to make depends on the hours of operation 
  (6:00 AM to 8:00 PM for all locations) */

/*The minimum number of customers per hour.
   The maximum number of customers per hour.
  The average number of cookies purchased per customer.*/

  const city = [cityOfSeattle, cityOfTokyo, cityOfDubai, cityOfParis, cityOfLima]; //declare your variables
  const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm",
"3pm", "4pm", "5pm", "6pm", "7pm"];



// City of Seattle



let cityOfSeattle = {
  Location: "Seattle",

  Minimum: 23,

  Maximum: 65,

  Average: 6.3,
  

  randomAmountOfSeattleCustomers: Math.floor(Math.random() * (65 - 23 + 1)) + 23, //This is already a function

  

  cookieSoldPerHour: function(){
      return this.randomAmountOfSeattleCustomers / this.Average; // I created a function


  },
  
  
};

//We want to store our results of the random customer and the cookes sold per hour in an array.



  // We want a method (function) of this object
  //to generate a random number of customers per hour!

  // create a function that has min and mx as its parameters

    // use the math.floor(math.random) property to include both numbers
    // 23 and 65

//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },

 // log the min and max customers here
// console.log(cityOfSeattle.randomAmountOfSeattleCustomers);
// console.log(cityOfSeattle.randomAmountOfCookiesFromSeattle);
let resultOfSeattle = [cityOfSeattle.randomAmountOfSeattleCustomers, cityOfSeattle.cookieSoldPerHour()]
console.log(resultOfSeattle);










// City of Tokyo

let cityOfTokyo = {
  Location: "Tokyo",

  Minimum: "3",

  Maximum: "24",

  Average: "1.2",

  randomAmountOfTokyoCustomers: Math.floor(Math.random() * (24 - 3 + 1)) + 3, //This is already a function

  cookieSoldPerHour: function(){
    
    return this.randomAmountOfTokyoCustomers / this.Average; // I created a function and used a formula to get the average!
},


// tokyo: randomCookiesForCityOfTokyo(randomAmountOfTokyoCustomers, cookieSoldPerHour)

  
};



console.log(cityOfTokyo.randomAmountOfTokyoCustomers);
console.log(cityOfTokyo.cookieSoldPerHour());
let resultOfTokyo = [cityOfTokyo.randomAmountOfTokyoCustomers, cityOfTokyo.cookieSoldPerHour()]

//console.log(cityOfTokyo[i]);





// city of Dubai

let cityOfDubai = {
  Location: "Dubai",

  Minimum: "11",

  Maximum: "38",

  Average: "3.7",

  randomAmountOfDubaiCustomers: Math.floor(Math.random() * (38 - 11 + 1)) + 11,

  cookiesSoldPerhour: function(){
      return this.randomAmountOfDubaiCustomers / this.Average;

  }
};
console.log(cityOfDubai.randomAmountOfDubaiCustomers);
console.log(cityOfDubai.cookiesSoldPerhour());
let resultOfDubai = [cityOfDubai.randomAmountOfDubaiCustomers, cityOfDubai.cookieSoldPerHour]



//city of Paris

let cityOParis = {
  Location: "Paris",

  Minimum: "20",

  Maximum: "38",

  Average: "2.3",

  randomAmountOfParisCustomers: Math.floor(Math.random() * (38 - 20 + 1 ) ) + 20,

  cookieSoldPerHour: function(){
      return this.randomAmountOfParisCustomers / this.Average;
  }

   
};

console.log(cityOParis.randomAmountOfParisCustomers);
console.log(cityOParis.cookieSoldPerHour());
let resultOfParis = [cityOfParis.randomAmountOfParisCustomers, cityOfParis.cookieSoldPerHour]


// city of Lima
let cityOfLima = {
  Location: "Lima",

  Minimum: "2",

  Maximum: "16",

  Average: "4.6",

  randomAmountOfLimaCustomers: Math.floor(Math.random() * (16 - 2 + 1 ) ) + 2,

  cookieSoldPerHour: function(){
      return this.randomAmountOfLimaCustomers / this.Average;
  }
};



  
console.log(cityOfLima.randomAmountOfLimaCustomers);
console.log(cityOfLima.cookieSoldPerHour());
let resultOfLima = [cityOfLima.randomAmountOfLimaCustomers, cityOfLima.cookieSoldPerHour()]

// We have successfully generated a random number from each of the cities
// minimum ansd maximum customers.


/*Calculate and store the simulated amounts of cookies 
purchased for each hour at each location 
using average cookies purchased 
and the random number of customers generated */

//Some info: they are open for 19 hours a day at each location 6AM to 7PM.
// our goal is to get the total cookies sold for each hour using the average cookies 
// and random number of customers generated


/*(min, max){return Math.floor(Math.random() * (max - min + 1)) + min;},*/



// store the results in an array  as a property of the object