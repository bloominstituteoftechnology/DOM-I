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


// nav elements
const navItems = document.querySelectorAll("nav a")
for(let i = 0; i < navItems.length; i++){
  navItems[i].innerHTML = siteContent["nav"][`nav-item-${i + 1}`]
}


//cta elements
let ctaImage = document.getElementById("cta-img")
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])
const ctaHeader = document.querySelector(".cta-text h1")
ctaHeader.innerHTML = siteContent["cta"]["h1"]
const ctaButton = document.querySelector(".cta-text button")
ctaButton.innerHTML = siteContent["cta"]["button"]

//main content elements
//top content
const headItems = document.querySelectorAll(".text-content h4")
for(let i = 0; i < headItems.length; i++){
 if(i === 0){
   headItems[i].innerHTML = siteContent["main-content"]["features-h4"]
 }
 else if(i === 1){
  headItems[i].innerHTML = siteContent["main-content"]["about-h4"]
 }
 else if(i === 2){
  headItems[i].innerHTML = siteContent["main-content"]["services-h4"]
 }
 else if(i === 3){
  headItems[i].innerHTML = siteContent["main-content"]["product-h4"]
 }
 else if(i === 4){
  headItems[i].innerHTML = siteContent["main-content"]["vision-h4"]
 }
}
const bodyItems = document.querySelectorAll(".text-content p")
for(let i = 0; i < bodyItems.length; i++){
  if(i === 0){
    bodyItems[i].innerHTML = siteContent["main-content"]["features-content"]
  }
  else if(i === 1){
   bodyItems[i].innerHTML = siteContent["main-content"]["about-content"]
  }
  else if(i === 2){
   bodyItems[i].innerHTML = siteContent["main-content"]["services-content"]
  }
  else if(i === 3){
   bodyItems[i].innerHTML = siteContent["main-content"]["product-content"]
  }
  else if(i === 4){
   bodyItems[i].innerHTML = siteContent["main-content"]["vision-content"]
  }
}

//middle image
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//contact elements
const contactPTags = document.querySelectorAll(".contact p") // selecting all paragraph tags under content section
for(let i = 0; i < contactPTags.length; i++){
  contactPTags[i].id = `contact-p-${i + 1}`
}//iterating over the newly selected p tags and assigning them IDs
const lineBreak = document.createElement("br")
document.getElementById("contact-p-1").appendChild(lineBreak)
document.getElementById("contact-p-2").innerHTML = siteContent["contact"]["phone"] //tag's id to
document.getElementById("contact-p-3").innerHTML = siteContent["contact"]["email"] // change their innerhtml
//inserting a single line break in the address
const addressPartOneText = siteContent["contact"]["address"].substring(0, 18);
const addressPartOne = document.createTextNode(addressPartOneText)
const addressPartTwoText = siteContent["contact"]["address"].substring(19);
const addressPartTwo = document.createTextNode(addressPartTwoText)
document.getElementById("contact-p-1").insertBefore(addressPartOne, document.getElementById("contact-p-1").childNodes[0])
document.getElementById("contact-p-1").childNodes[1].after(addressPartTwo)

//footer
const footerText = document.querySelector("footer p")
footerText.innerHTML = siteContent["footer"]["copyright"]
