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

//navigation
let navItems = document.querySelectorAll("a");
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

navItems.forEach(element => {
  element.style.color = "green";
  element.style.fontFamily = "Schoolbell";
});

let newItemOne = document.createElement("a");
newItemOne.textContent = "Dog";
newItemOne.style.fontFamily = "Schoolbell";

let newItemTwo = document.createElement("a");
newItemTwo.textContent = "muffin";
newItemTwo.style.fontFamily = "Schoolbell";

let navNavNav = document.querySelector("nav");
navNavNav.append(newItemTwo);
newItemTwo.style.color = "green";
navNavNav.prepend(newItemOne);
newItemOne.style.color = "green";
navNavNav.style.justifyContent = "space-between";


//cta
let titleText = document.querySelector("h1");
let buttonGadget = document.querySelector("button");
let heroImage = document.getElementById("cta-img");
let colorBackground = document.querySelector("body");

titleText.textContent = siteContent["cta"]["h1"];
titleText.style.fontFamily = "Barriecito";
buttonGadget.textContent = siteContent["cta"]["button"];
heroImage.src = siteContent["cta"]["img-src"];

titleText.addEventListener("mouseenter", () => {
  titleText.textContent = "Manipulate that DOM!!!";
});

titleText.addEventListener("mouseleave", () => {
  titleText.textContent = siteContent["cta"]["h1"];
})

const shenanigan = document.createElement("h1");
shenanigan.textContent = "Why not make it ridiculous?";
const cta = document.querySelector(".cta");
const ctaText = document.querySelector(".cta-text");

buttonGadget.addEventListener("click", () => {
  cta.append(shenanigan);
  titleText.style.color = "red";
  colorBackground.style.backgroundColor = "lime";
  ctaText.style.width = "45%";
  shenanigan.style.fontFamily = "Barriecito";
  shenanigan.style.padding = "50px";
  shenanigan.style.fontSize = "60px";
  shenanigan.style.backgroundColor = "pink";
  shenanigan.style.width= "100%";
  shenanigan.style.textAlign = "center";
  cta.style.flexWrap = "wrap";
  
  navItems.forEach(element => {
    element.style.fontFamily = "Barriecito";
  }); //end forEach

});//end button gadget

const newButton = document.createElement("button");
newButton.textContent = "back to professional please!";
const daFooter = document.querySelector("footer");
daFooter.append(newButton);
newButton.addEventListener("click", () => {
  titleText.style.color = "black";
  colorBackground.style.backgroundColor = "white";
  shenanigan.style.display = "none";
  navItems.forEach(element => {
    element.style.fontFamily = "Schoolbell";
  });//end forEach
}); //end button

heroImage.addEventListener("mouseenter", () => {
  heroImage.src = "../img/whoodle-pup.jpg";
});

heroImage.addEventListener("mouseleave", () => {
  heroImage.src = siteContent["cta"]["img-src"];
})


//middle image

let midPhoto = document.getElementById("middle-img");
midPhoto.src = siteContent["main-content"]["middle-img-src"]

///h4

let headerFour = document.querySelectorAll("h4");
headerFour[0].textContent = siteContent["main-content"]["features-h4"];
headerFour[1].textContent = siteContent["main-content"]["about-h4"];
headerFour[2].textContent = siteContent["main-content"]["services-h4"];
headerFour[3].textContent = siteContent["main-content"]["product-h4"];
headerFour[4].textContent = siteContent["main-content"]["vision-h4"];
headerFour[5].textContent = siteContent["contact"]["contact-h4"];

headerFour.forEach (element => {
  element.style.fontFamily = "Barriecito";
});

//p

let paraTag = document.querySelectorAll("p");
paraTag[0].textContent = siteContent["main-content"]["features-content"];
paraTag[1].textContent = siteContent["main-content"]["about-content"];
paraTag[2].textContent = siteContent["main-content"]["services-content"];
paraTag[3].textContent = siteContent["main-content"]["product-content"];
paraTag[4].textContent = siteContent["main-content"]["vision-content"];
paraTag[5].textContent = siteContent["contact"]["address"];
paraTag[6].textContent = siteContent["contact"]["phone"];
paraTag[7].textContent = siteContent["contact"]["email"];
paraTag[8].textContent = siteContent["footer"]["copyright"];

paraTag.forEach(element => {
  element.style.fontFamily = "Schoolbell";
});


