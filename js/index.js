const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Blog",
    "nav-item-8": "Sign Up",
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

let headerimg = document.getElementById("cta-img");
headerimg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleimg = document.getElementById("middle-img");
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


let aNode = document.createElement("a");
let bNode = document.createElement("a");
//let blog = document.textTextNode("Blog");
let navBar = document.querySelector("nav");
//aNode.innerHTML = "Blog";
//bNode.innerHTML = "Sign Up";
//nav.appendChild(aNode);
navBar.appendChild(aNode);
navBar.prepend(bNode);

let navText = document.querySelectorAll("nav a");


//navText[0].innerHTML = siteContent["nav"]["nav-item-1"];
//navText[1].innerHTML = siteContent["nav"]["nav-item-2"];
//navText[2].innerHTML = siteContent["nav"]["nav-item-3"];
//navText[3].innerHTML = siteContent["nav"]["nav-item-4"];
//navText[4].innerHTML = siteContent["nav"]["nav-item-5"];
//navText[5].innerHTML = siteContent["nav"]["nav-item-6"];

//changes color of all nav links to green.

let count = 0;
navText.forEach(function(e){
  e.innerHTML = siteContent["nav"][`nav-item-${count+1}`];
  e.style.color = 'green';
  count++;
});

/*for(let i = 0; i < navText.length; i++){

  navText[i].innerHTML = siteContent["nav"][`nav-item-${i+1}`];
  navText[i].style.color = 'green';
  
}*/


let ctaText = document.querySelector(".cta-text");
ctaText.querySelector("h1").innerHTML = siteContent["cta"]["h1"];
ctaText.querySelector("button").innerHTML = siteContent["cta"]["button"];

let mainText = document.querySelector(".main-content");
mainText.querySelectorAll(".top-content .text-content h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
mainText.querySelectorAll(".top-content .text-content p")[0].innerHTML = siteContent["main-content"]["features-content"];
mainText.querySelectorAll(".top-content .text-content h4")[1].innerHTML = siteContent["main-content"]["about-h4"];
mainText.querySelectorAll(".top-content .text-content p")[1].innerHTML = siteContent["main-content"]["about-content"];

mainText.querySelectorAll(".bottom-content .text-content h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
mainText.querySelectorAll(".bottom-content .text-content p")[0].innerHTML = siteContent["main-content"]["services-content"];
mainText.querySelectorAll(".bottom-content .text-content h4")[1].innerHTML = siteContent["main-content"]["product-h4"];
mainText.querySelectorAll(".bottom-content .text-content p")[1].innerHTML = siteContent["main-content"]["product-content"];
mainText.querySelectorAll(".bottom-content .text-content h4")[2].innerHTML = siteContent["main-content"]["vision-h4"];
mainText.querySelectorAll(".bottom-content .text-content p")[2].innerHTML = siteContent["main-content"]["vision-content"];


let contactText = document.querySelector(".contact");
contactText.querySelector("h4").innerHTML = siteContent["contact"]["contact-h4"];
contactText.querySelectorAll("p")[0].innerHTML = siteContent["contact"]["address"];
contactText.querySelectorAll("p")[1].innerHTML = siteContent["contact"]["phone"];
contactText.querySelectorAll("p")[2].innerHTML = siteContent["contact"]["email"];

let footerText = document.querySelector("footer p");
footerText.innerHTML = siteContent["footer"]["copyright"];

//added content

