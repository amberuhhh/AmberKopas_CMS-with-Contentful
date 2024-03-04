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
var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

console.log(id);

var client = contentful.createClient({
    space: 'jhroq6kjrsy4',
    accessToken: 'zV8UhcSE-aekfCyefr5xPGasK30EwPOOTWfm6RBxnt4',
  });
  
var details = document.getElementById('details');
  // gets all the entries as a json
  client.getEntry(id).then(function (entry) {
    console.log(entry);
      // if statement checks that this field exists  
      var imageDiv = document.createElement ('aside');
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

            // var link = document.createElement('button')
            // link.innerHTML = "link to " + entry.fields.name;
            // link.href= entry.fields.link;
            // detailsPage.appendChild(link);

            // do whatever with the info in the field
            console.log(entry.fields.name);
        }  

        details.appendChild(imageDiv);
        details.appendChild(textDiv);
    });