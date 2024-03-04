//HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



//GRAB FROM CONTENTFUL
console.log("Hello World!");

var client = contentful.createClient({
    space: 'jhroq6kjrsy4',
    accessToken: 'zV8UhcSE-aekfCyefr5xPGasK30EwPOOTWfm6RBxnt4',
  });

var placeForContent = document.getElementById('place-for-content');


  // gets all the entries as a json
  client.getEntries().then(function (entries) {
    console.log("entries:");
    console.log(entries);
    // loops through the json to look at one entry at a time
    entries.items.forEach(function (entry) {
        console.log("entry:");
        console.log(entry);
      // if statement checks that this field exists  
      var imageDiv = document.createElement ('div');
      var textDiv = document.createElement ('div');

        if (entry.fields.name) {

            var bookImage = document.createElement('img');
            bookImage.src = entry.fields.bookImage.fields.file.url;
            imageDiv.appendChild(bookImage);

            var name = document.createElement('h2');
            name.innerHTML = entry.fields.name;
            textDiv.appendChild(name);

            var bookTags = document.createElement('h5');
            bookTags.innerHTML = entry.fields.bookTags;
            textDiv.appendChild(bookTags);

            var cost = document.createElement('h4');
            cost.innerHTML = entry.fields.cost;
            textDiv.appendChild(cost);

            var description = document.createElement('p');
            description.innerHTML = entry.fields.description;
            textDiv.appendChild(description);

            var button = document.createElement('button');
            button.innerHTML = entry.fields.button;
            textDiv.appendChild(button);

            // var link = document.createElement('a')
            // link.innerHTML = "link to " + entry.fields.name;
            // link.href= entry.fields.link;
            // placeForContent.appendChild(link);

            // do whatever with the info in the field
            console.log(entry.fields.name);
        }            
            placeForContent.appendChild(imageDiv);
            placeForContent.appendChild(textDiv);
    });
  });



//   var students = [
//                 {name:"Greg", grade:"A", subject:"AI", courses:[
//                                                 {name:"web Tech"}, {name:"Logo"}
//                                             ]}, 
//                 {name:"Alice", grade:"B+", subject:"Marketing", courses:[
//                                                 {name:"Biz"}, {name:"AI"}
//                                             ]}
//             ];
  
//   console.log(students[1].courses[0].name);

// // students.forEach(function (student){
// //     console.log (student.name);
// // });
          
// students.forEach(function (student){
//   console.log ("student name is " + student.name);
//   student.courses.forEach(function (course){
//       console.log("Course is "+ course.name);
//   })
// });



            

//   //Comment

// //   console.log(client);

  
// // //   client is helper to connect to contentful
// // //   getEntries is a method to get all entries from contentful
// // //   entries is an object that contains all the entries
// // client.getEntries().then(function (entries) {
// //     console.log(entries);
// //     // for each entry run the function
// //     entries.items.forEach(function (entry) {
// //         //  fields are the fields we named in contentful
// //     //   if (entry.fields.name) {
// //         console.log("entry name: " + entry.fields.name);
// //         console.log("entry link: " + entry.fields.image);
// //         console.log("entry link: " + entry.fields.cost);
// //         console.log("entry link: " + entry.fields.description);

// //         if (entry.fields.mainImage){
// //             console.log("entry image url: " + entry.fields.mainImage.fields.file.url);
// //         }
// //     //   }
// //     });
// //   });

// // /*
// //     var cars = [{type:"Fiat", model:"500", color:"white"}, 
// //                 {type:"Volvo", model:"XC90", color:"black"}]
// //     // console.log(cars[0]); // to get all info on first car
// //     // console.log(cars[0].type); // to get type of first car
// //     // console.log(cars[1].model);

// //     cars.forEach (function (car) {
// //         console.log("Car Type is " + car.type);
// //     });
// // */