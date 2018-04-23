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

let navBar = document.getElementsByTagName("a");

navBar[0].innerHTML = "Services";
navBar[1].innerHTML = "Product";
navBar[2].innerHTML = "Vision";
navBar[3].innerHTML = "Features";
navBar[4].innerHTML = "About";
navBar[5].innerHTML = "Contact";
navBar[0].style.color = "green";
navBar[1].style.color = "green";
navBar[2].style.color = "green";
navBar[3].style.color = "green";
navBar[4].style.color = "green";
navBar[5].style.color = "green";

let newNav1 = document.createElement('a');
newNav1.style.color = "green";
let text = document.createTextNode("Pics");
newNav1.appendChild(text);
document.querySelector("nav").appendChild(newNav1);

let newNav2 = document.createElement('a');
newNav2.style.color = "green";
let text2 = document.createTextNode("Forum");
newNav2.appendChild(text2);
document.querySelector("nav").prepend(newNav2);

// end nav

let headerImg = document.querySelector("#cta-img");
headerImg.setAttribute('src', siteContent['cta']['img-src']);

let headerOne = document.querySelector("h1");
headerOne.innerHTML = "DOM <br /> is Awesome!";
headerOne.style.width = "241px";
headerOne.style.height = "216px";
headerOne.style.color = "green";

let btn = document.querySelector("button")
btn.innerHTML = "Get Started";
// end CTA

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let contentT = document.querySelectorAll("h4");
contentT.forEach(function(colr){
  colr.style.color = "green";
});

contentT[0].innerHTML = "Features";
contentT[1].innerHTML = "About";
contentT[2].innerHTML = "Services";
contentT[3].innerHTML = "Product";
contentT[4].innerHTML = "Vision";

let contentP = document.getElementsByTagName("p");
contentP[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contentP[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contentP[2].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contentP[3].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contentP[4].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
// end text content

contentT[5].innerHTML = "Contact";
contentP[5].innerHTML = "123 Way 456 Street <br /> Somewhere, USA" ;
contentP[6].innerHTML = "1 (888) 888-8888";
contentP[7].innerHTML = "sales@greatidea.io";
contentP[8].innerHTML = "Copyright Great Idea! 2018";

