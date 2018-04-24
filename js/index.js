const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
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
//window
window.addEventListener('resize', (event) => {
console.log("The window has been resized.")
});

//doc
document.addEventListener('keydown', () => {
  alert('You are moving down!!');
});

document.addEventListener('scroll', (event)  => {
  document.log("You are scrolling")
});

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.addEventListener('mouseup', (event) => {
 console.log("UP!")
});

//nav
let nav1 = document.getElementsByTagName("a")
nav1[0].innerHTML = "Services";

let nav2 = document.getElementsByTagName("a")
nav2[1].innerHTML = "Product";

let nav3 = document.getElementsByTagName("a")
nav3[2].innerHTML = "Vision";

let nav4 = document.getElementsByTagName("a")
nav4[3].innerHTML = "Feautures";

let nav5 = document.getElementsByTagName("a")
nav5[4].innerHTML = "Contact";

let navigation = document.querySelectorAll("a")  //changing color to green in nav links
let i;
for (i = 0; i < navigation.length; i++) {
 navigation[i].style.color = 'green';
}

let nav = document.getElementsByTagName("nav")[0]; //adding 2 new nav links

let inquiry = document.createElement("a");
nav.appendChild(inquiry);
inquiry.innerHTML = "Inquiries";

let Port = document.createElement("a");
nav.prepend(Port);
Port.innerHTML = "portfolio";

//cta
let ctah1 = document.querySelector("h1");
ctah1.innerHTML = "DOM is Awesome";
ctah1.addEventListener('click', (event) => {
  ctah1.classList.add("rotate")
});
ctah1.addEventListener('dblclick', (event) => {
  ctah1.classList.remove("rotate")
});

let ctaButton = document.querySelector("button");
ctaButton.innerHTML = "Click Me";
ctaButton.addEventListener('click', (event) => {
  ctaButton.style.backgroundColor = 'pink';
  ctaButton.innerText = "hello";
});
ctaButton.addEventListener('dblclick', (event) => {
  ctaButton.style.backgroundColor = 'white';
  ctaButton.innerHTML = "Click Me";
});

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', "img/header-img.png")
headerImg.addEventListener('mouseover', (event) => {
  console.log("I am a mouse");
})


//main content
let main1 = document.getElementsByTagName("h4")
main1[0].innerHTML = "Features";

let content1 = document.getElementsByTagName("p")
content1[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let main2 = document.getElementsByTagName("h4")
main2[1].innerHTML = "About";
let content2 = document.getElementsByTagName("p")
content2[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let main3 = document.getElementsByTagName("h4")
main3[2].innerHTML = "Services";
let content3 = document.getElementsByTagName("p")
content3[2].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let main4 = document.getElementsByTagName("h4")
main4[3].innerHTML = "Product";
let content4 = document.getElementsByTagName("p")
content4[3].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let main5 = document.getElementsByTagName("h4")
main5[4].innerHTML = "Vision";
let content5 = document.getElementsByTagName("p")
content5[4].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', "img/mid-page-accent.jpg")
middleImg.addEventListener('mouseenter', (event) => {
  console.log("Hi, I'm here!");
})
middleImg.addEventListener('mouseleave', (event) => {
  console.log("I am leaving now.");
})


//contact 
let contactTitle = document.getElementsByTagName("h4")
contactTitle[5].innerHTML = "Contact";
let addressText = document.getElementsByTagName("p") 
addressText[5].innerHTML = "123 Way 456 Street Somewhere, USA";
let phoneText = document.getElementsByTagName("p") 
phoneText[6].innerHTML = "1 (888) 888-8888";
let emailText = document.getElementsByTagName("p") 
emailText[7].innerHTML = "sales@greatidea.io";

//footer 
let footerText = document.getElementsByTagName("p")
footerText[8].innerHTML = "Copyright Great Idea! 2018";

