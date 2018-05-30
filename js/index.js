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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navItem0 = document.getElementsByTagName("a");
navItem0.item(0).innerHTML = siteContent["nav"]["nav-item-1"];

let navItem1 = document.getElementsByTagName("a");
navItem1.item(1).innerHTML = siteContent["nav"]["nav-item-2"];

let navItem2 = document.getElementsByTagName("a");
navItem2.item(2).innerHTML = siteContent["nav"]["nav-item-3"];

let navItem3 = document.getElementsByTagName("a");
navItem3.item(3).innerHTML = siteContent["nav"]["nav-item-4"];

let navItem4 = document.getElementsByTagName("a");
navItem4.item(4).innerHTML = siteContent["nav"]["nav-item-5"];

let navItem5 = document.getElementsByTagName("a");
navItem5.item(5).innerHTML = siteContent["nav"]["nav-item-6"];

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let ctah1 = document.querySelector(".cta h1");
ctah1.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta button");
ctaButton.innerHTML = siteContent["cta"]["button"];

document.getElementsByTagName("h4").item(0).innerHTML = siteContent["main-content"]["features-h4"];
document.getElementsByTagName("h4").item(1).innerHTML = siteContent["main-content"]["about-h4"];
document.getElementsByTagName("h4").item(2).innerHTML = siteContent["main-content"]["services-h4"];
document.getElementsByTagName("h4").item(3).innerHTML = siteContent["main-content"]["product-h4"];
document.getElementsByTagName("h4").item(4).innerHTML = siteContent["main-content"]["vision-h4"];

document.getElementsByTagName("p").item(0).innerHTML = siteContent["main-content"]["features-content"];
document.getElementsByTagName("p").item(1).innerHTML = siteContent["main-content"]["about-content"];
document.getElementsByTagName("p").item(2).innerHTML = siteContent["main-content"]["services-content"];
document.getElementsByTagName("p").item(3).innerHTML = siteContent["main-content"]["product-content"];
document.getElementsByTagName("p").item(4).innerHTML = siteContent["main-content"]["vision-content"];

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

document.getElementsByTagName("p").item(5).innerHTML = siteContent["contact"]["address"];
document.getElementsByTagName("p").item(6).innerHTML = siteContent["contact"]["phone"];
document.getElementsByTagName("p").item(7).innerHTML = siteContent["contact"]["email"];
document.getElementsByTagName("p").item(8).innerHTML = siteContent["footer"]["copyright"];

var newLink1 = document.createElement('a');
newLink1.innerHTML = "Blog";
document.querySelector('nav').appendChild(newLink1);

var newLink2 = document.createElement('a');
newLink2.innerHTML = "News";
document.querySelector('nav').prepend(newLink2);

//document.getElementsByTagName("a").item(0).style.color= 'green';

let navColor = document.getElementsByTagName("a");
for(let i=0; i<navColor.length; i++){
navColor.item(i).style.color = 'green';
}


let selected = document.querySelector(".cta h1");

selected.addEventListener("click", () => {
  selected.style.color = "chocolate";
 });

let doubleClick = document.querySelector(".cta button");

doubleClick.addEventListener("dblclick", () => {
  doubleClick.style.color = "yellow";
 });


let mouseEnterImage = document.getElementById("cta-img");

mouseEnterImage.addEventListener("mouseenter", () => {
  mouseEnterImage.style.opacity = 0.2;
 });

let selectText = document.getElementById("featuresText");

selectText.addEventListener("mouseout", () => {
  selectText.style.color = "red";
 });


let mouseOver = document.getElementById("middle-img");

mouseOver.addEventListener("mouseover", () => {
  mouseOver.style.opacity = 0.4;
 });


let textColor = document.getElementById("addressText");

document.addEventListener("keydown", (e) => {
	textColor.style.color = "red";
});


let colorChange = document.getElementsByTagName("h4");

console.log(colorChange);

document.addEventListener("scroll", (e) => {
	for (let i = 0;i < colorChange.length;i++) {
		colorChange[i].style.color = "red";
	}
});

let visionTextColor = document.getElementById("visionText");

document.addEventListener("keypress", (e) => {
        visionTextColor.style.color = "blue";
});
