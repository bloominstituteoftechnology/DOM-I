const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);

document.getElementById("logo-img").setAttribute('src', siteContent["nav"]["img-src"]);

// document.getElementsByTagName('a')[0].innerText = "Services";

// document.getElementsByTagName('a')[1].innerText = "Product";

// document.getElementsByTagName('a')[2].innerText = "Vision";

// document.getElementsByTagName('a')[3].innerText = "Features";

// document.getElementsByTagName('a')[4].innerText = "About";

// document.getElementsByTagName('a')[5].innerText = "Contact";

//refactor
let links = document.querySelectorAll("a");
links.forEach((element, i) => element.innerText = siteContent["nav"][`nav-item-${i+1}`]);


// // add unique classes to 'a' tags
// let navigationItems = document.querySelectorAll('a');
// for (let i = 0; i < navigationItems.length; i++) {
//   navigationItems[i].classList.add([i]);
// }

// document.getElementsByClassName([0]).innerHTML = "Services";


// //assign different different object key-values to each unique class
// let navigationLinks = document.getElementsByClassName(`i`);
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].innerText = siteContent["nav"][`nav-item-${i}`];
// }


// Utilize .appendChild() to add two new items to the navigation system
const navItemSeven = document.createElement('a');
const homeElement = document.querySelector('nav');
homeElement.appendChild(navItemSeven);
navItemSeven.innerText = "People";

const navItemEight = document.createElement('a');
const homeElement2 = document.querySelector('nav');
homeElement2.prepend(navItemEight);
navItemEight.innerText = "Jobs";

//Task 4: Add new content

let navAllItems = document.querySelectorAll('a');
for (let i = 0; i < navAllItems.length; i++) {
  navAllItems[i].style.color = 'goldenrod';  //'#66ff66'
  navAllItems[i].style.backgroundColor = 'ghostwhite';
}




document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);
document.getElementById("cta-img").style.filter = "sepia(100%)";

let circle = document.getElementById("cta-img");
//this handler will be executed every time the cursor is moved over the circle
circle.addEventListener("mouseover", function(event) {
    // highlight the mouseover target
    event.target.style.filter = "sepia(0%)";
    
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.filter = "sepia(100%)";
    }, 500);
});



document.querySelector("button").innerHTML = "Get Started";

document.querySelector('h1').innerHTML = `DOM <br> Is <br> Awesome`;

// document.getElementsByTagName('h4')[0].innerText = "Features";

// document.getElementsByTagName('p')[0].innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// document.getElementsByTagName('h4')[1].innerText = "About";

// document.getElementsByTagName('p')[1].innerText = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);
document.getElementById("middle-img").style.filter = "sepia(100%)";

let middlepic = document.getElementById("middle-img");
middlepic.addEventListener("mouseover", function(event){
  event.target.style.filter = "sepia(0%)";
  setTimeout(function(){
    event.target.style.filter = "sepia(100%)";
  }, 500);
});


// document.getElementsByTagName('h4')[2].innerText = "Services";

// document.getElementsByTagName('p')[2].innerText = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// document.getElementsByTagName('h4')[3].innerText = "Product";

// document.getElementsByTagName('p')[3].innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// document.getElementsByTagName('h4')[4].innerText = "Vision";

// document.getElementsByTagName('p')[4].innerText = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// document.getElementsByTagName('h4')[5].innerText = "Contact";


// code to grab h4 tags
let grabh4tags = document.querySelectorAll('h4');
// grab all values of siteContent, set array to newObj; Object.keys(siteContent) --> [ 'nav', 'cta', 'main-content', 'contact', 'footer' ]
let newObj = Object.values(siteContent);
// loop through newObj array; N.B. this array has five objects, 
// this loop goes through the five objects to grab the [2] index AND only the keys of the object in [2] index
function nextObj(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    let newArr = Object.keys(arr[2]);    // ---> [ 'features-h4', 'features-content', 'about-h4', 'about-content', 'middle-img-src', 'services-h4', 'services-content', 'product-h4','product-content','vision-h4','vision-content' ]
    return newArr;
  }
}

let secondArrayInNewObj = nextObj(newObj); //nextObj function returns array, set it to secondArrayInNewObj variable
secondArrayInNewObj;

let thirdArrayInNewObj = secondArrayInNewObj.filter((element,index) => {   //filter through secondArrayInNewObj variable 
  if (element.includes('-h4')) {                                           //for string that includes '-h4'
    return element;
  }
})

// querySelectorAll return array-like element, use .forEach to loop through, set innerText of each h4 tag to = bracket notation
// bracketnotation siteContent["main-content"][thirdArrayInNewObj[i]] <--- array containing Object KEYS that have 'h4'; 
grabh4tags.forEach((element, i) => element.innerText = siteContent["main-content"][thirdArrayInNewObj[i]]);


////////// Repeat Above for Contact h4 tag only

let grabh4contact = document.getElementById('con');    //use .getElementById - but add id="con" to h4 tag in contact section

function nextObjContact(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    let newArr = Object.keys(arr[3]);
    return newArr;
  }
}

let secondArrayInNewObjContact = nextObjContact(newObj);
secondArrayInNewObjContact;

let thirdArrayInNewObjContact = secondArrayInNewObjContact.filter((element,index) => {
if (element.includes('-h4')) {
  return element;
}
})

grabh4contact.innerText = siteContent["contact"][thirdArrayInNewObjContact];

///////// Repeat Above, but for ALL paragraph content in main-content

let grabPTags = document.querySelectorAll('p');

let anotherNewObj = Object.values(siteContent);

function nextObjPTags(arr, obj) {
    for (let i = 0; i < arr.length; i++) {
      let newArr = Object.keys(arr[2]);
      return newArr;
    }
}


let pTagArray = nextObjPTags(anotherNewObj);
pTagArray;

let anotherPTagArray = pTagArray.filter((element,index) => {
  if (element.includes('-content')) {
    return element;
  }
})

// console.log(anotherPTagArray);
// console.log(grabPTags);
grabPTags.forEach((element, i) => element.innerText = siteContent["main-content"][anotherPTagArray[i]]);  


// let circle = document.getElementById("cta-img");
// circle.setAttribute('src', siteContent["cta"]["img-src"]);

document.getElementsByTagName('p')[5].innerText = "123 Way 456 Street Somewhere, USA";

// let phone = document.getElementsByClassName("contact").getElementsByTagName('p');
document.getElementsByTagName('p')[6].innerText = "1 (888) 888-8888";
// phone.innerText = setContent["contact"]["phone"];

document.getElementsByTagName('p')[7].innerText = "sales@greatidea.io";

document.getElementsByTagName('p')[8].innerText = "Copyright Great Idea! 2018";


//Am I on the right track?
// function beDry(str, i) {
//   let str = document.getElementsByTagName('p')[i];
//   str.innerText = "${str} content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
//   return str.innerText;
// }

// beDry(vision, 4);