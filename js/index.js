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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//could you use a switch for this? Or for loop to do this quicker?
const navSelector = document.querySelectorAll("a");

//one way to do it...
// navChange[0].textContent = (siteContent["nav"]["nav-item-1"]);
// navChange[1].textContent = (siteContent["nav"]["nav-item-2"]);
// navChange[2].textContent = (siteContent["nav"]["nav-item-3"]);
// navChange[3].textContent = (siteContent["nav"]["nav-item-4"]);
// navChange[4].textContent = (siteContent["nav"]["nav-item-5"]);
// navChange[5].textContent = (siteContent["nav"]["nav-item-6"]);

//another... --> make this function reusable elsewhere? add selector arg, obj, propName
//try using a counter or for loop and .toString
let navChangeFunc = (index, propNum) => navSelector[index].textContent = (siteContent["nav"]["nav-item-" + propNum]);
navChangeFunc(0, "1");
navChangeFunc(1, "2");
navChangeFunc(2, "3");
navChangeFunc(3, "4");
navChangeFunc(4, "5");
navChangeFunc(5, "6");


//bad form to do this as one line?
//for 'h1', need to add <br>s
const title = document.querySelector("h1").textContent = (siteContent["cta"]["h1"]);
// document.querySelector("h1").textContent = ("Dom "+ <br>+ "Is "+ <br> + "Awesome");

const button = document.querySelector("button").textContent = (siteContent["cta"]["button"]);

const mainImage = document.getElementById("cta-img").setAttribute("src", siteContent["cta"]["img-src"]);

//add h4 titles
const h4Selector = document.querySelectorAll("h4");
let h4Adder = (index, prop) => h4Selector[index].textContent = (siteContent["main-content"][prop + "-h4"]);

h4Adder(0, "features");
h4Adder(1, "about");
h4Adder(2, "services");
h4Adder(3, "product");
h4Adder(4, "vision");

h4Selector[5].textContent = (siteContent["contact"]["contact-h4"]);

//add paragraphs
const pSelector = document.querySelectorAll("p");

let paragraphAdder = (index, prop) => pSelector[index].textContent = (siteContent["main-content"][prop + "-content"]);

paragraphAdder(0, "features");
paragraphAdder(1, "about");
paragraphAdder(2, "services");
paragraphAdder(3, "product");
paragraphAdder(4, "vision");

pSelector[5].textContent = (siteContent["contact"]["address"]);
pSelector[6].textContent = (siteContent["contact"]["phone"]);
pSelector[7].textContent = (siteContent["contact"]["email"]);
pSelector[8].textContent = (siteContent["footer"]["copyright"]);


//add middle image
const middleImg = document.getElementById("middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);


//adding Log In button to nav
const newLogIn = document.createElement('a');
newLogIn.textContent = "Log In";
newLogIn.style.color = "green";
newLogIn.href = "#";

document.querySelector('nav').append(newLogIn);

//adding Archive button to nav
const newPortfolio = document.createElement('a');
newPortfolio.textContent = "Portfolio";
newPortfolio.style.color = "green";
newPortfolio.href = "#";

document.querySelector('nav').prepend(newPortfolio);


//make nav green
//could expand this to shorten paragraphAdder, etc.
function makeGreen(selector) {
  for (let i = 0; i < selector.length; i++) {
    selector[i].style.color = "green";
  }
}

makeGreen(navSelector);

