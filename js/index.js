const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "new-nav-item-1": "",
    "new-nav-item-2": "Last (new!)",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logoImg = document.getElementById("logo-img");
logoImg.setAttribute('src', siteContent["nav"]["img-src"]);

document.querySelectorAll("a")[0].innerHTML = siteContent["nav"]["nav-item-1"];
document.querySelectorAll("a")[1].innerHTML = siteContent["nav"]["nav-item-2"];
document.querySelectorAll("a")[2].innerHTML = siteContent["nav"]["nav-item-3"];
document.querySelectorAll("a")[3].innerHTML = siteContent["nav"]["nav-item-4"];
document.querySelectorAll("a")[4].innerHTML = siteContent["nav"]["nav-item-5"];
document.querySelectorAll("a")[5].innerHTML = siteContent["nav"]["nav-item-6"];

document.querySelectorAll("a")[0].style.color = "green";
document.querySelectorAll("a")[1].style.color = "green";
document.querySelectorAll("a")[2].style.color = "green";
document.querySelectorAll("a")[3].style.color = "green";
document.querySelectorAll("a")[4].style.color = "green";
document.querySelectorAll("a")[5].style.color = "green";

let newNavItem = document.createElement('a');
newNavItem.textContent = 'First (new!)';
newNavItem.style.color = "green";

let myNav = document.querySelector('nav');
myNav.prepend(newNavItem);

let newNavItem2 = document.createElement(`a`);
newNavItem2.textContent = 'Last (new!)';
newNavItem2.style.color = "green";

let myNav2 = document.querySelector('nav');
myNav2.appendChild(newNavItem2);
//Memo: Refactor this later to be less repetitive, please!


//nav

document.querySelector(".cta-text h1").innerHTML = siteContent["cta"]["h1"];
document.querySelector(".cta-text h1").style.textAlign = "center";

document.querySelector(".cta-text button").innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
//cta

document.querySelectorAll(".top-content .text-content h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
document.querySelectorAll(".top-content .text-content p")[0].innerHTML = siteContent["main-content"]["features-content"];

document.querySelectorAll(".top-content .text-content h4")[1].innerHTML = siteContent["main-content"]["about-h4"];
document.querySelectorAll(".top-content .text-content p")[1].innerHTML = siteContent["main-content"]["about-content"];

document.querySelectorAll(".bottom-content .text-content h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
document.querySelectorAll(".bottom-content .text-content p")[0].innerHTML = siteContent["main-content"]["services-content"];

document.querySelectorAll(".bottom-content .text-content h4")[1].innerHTML = siteContent["main-content"]["product-h4"];
document.querySelectorAll(".bottom-content .text-content p")[1].innerHTML = siteContent["main-content"]["product-content"];

document.querySelectorAll(".bottom-content .text-content h4")[2].innerHTML = siteContent["main-content"]["vision-h4"];
document.querySelectorAll(".bottom-content .text-content p")[2].innerHTML = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//main-content

document.querySelector(".contact h4").innerHTML = siteContent["contact"]["contact-h4"];
document.querySelectorAll(".contact p")[0].innerHTML = siteContent["contact"]["address"];
document.querySelectorAll(".contact p")[1].innerHTML = siteContent["contact"]["phone"];
document.querySelectorAll(".contact p")[2].innerHTML = siteContent["contact"]["email"];
//contact

document.querySelector("footer p").innerHTML = siteContent["footer"]["copyright"];
//footer

/* ASSIGNMENT II STARTS HERE */

let productHeader = document.querySelector(".top-content");

productHeader.addEventListener(`mouseover`, (event) => {
  productHeader.style.color = "purple";
});

productHeader.addEventListener(`mouseleave`, (event) => {
  productHeader.style.color = "black";
});

document.querySelector(".cta-text button").addEventListener('click', (event) => {
  window.alert('Are you sure that you are ready to get started?');
});

document.addEventListener('wheel', (event) => {
  document.querySelector(".cta button").style.backgroundColor = "red";
});

document.addEventListener('keydown', (event) => {
  let keystrokeDiv = document.createElement('div');
  keystrokeDiv.textContent = 'You pressed a key on your keyboard!';
  keystrokeDiv.style.textAlign = "center";
  document.querySelector(".main-content").appendChild(keystrokeDiv);
});

document.addEventListener('auxclick', (event) => {
  document.querySelector('#cta-img').style.backgroundColor = "green";
});

document.addEventListener('dblclick', (event) => {
  document.querySelector('#logo-img').style.backgroundColor = "blue";
});

document.addEventListener('contextmenu', (event) => {
  window.alert(`Hey, I see you bringing up that context menu on this page.`)
});

document.querySelector('#middle-img').addEventListener('drag', (event) => {
  document.querySelector('.main-content').style.backgroundColor = "gray";
})

document.querySelector('#middle-img').addEventListener('dragend', (event) => {
  document.querySelector('.main-content').style.backgroundColor = "white";
})