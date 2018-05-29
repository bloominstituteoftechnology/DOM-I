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
    // topcontent break


    // bottom content start
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg"
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
// set navbar
let navBar = document.querySelector("header nav");
for (var i = 0; i < navBar.children.length; i++){
  navBar.children[i].innerHTML = siteContent["nav"]["nav-item-" + (i + 1)];
}
//set cta Image
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
// set cta
let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent["cta"]["h1"];

let ctaTextButton = document.querySelector(".cta-text button");
ctaTextButton.innerHTML = siteContent["cta"]["button"];
// maincontent Image
let mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);








// maincontent top
let textContent = document.querySelectorAll(".text-content");
// console.log(siteContent["main-content"]);
// console.log(textContent);
for(var key in siteContent["main-content"]) {
    if(siteContent["main-content"].hasOwnProperty(key)) {
        var keyValue = siteContent["main-content"][key];
        for (var i = 0; i < textContent.length; i++){
            for (var a = 0; a < 2; a++){
            textContent[i].children[a].innerHTML = keyValue;
          }
        }
        console.log(keyValue);
    }
}







var i = 0;
let contact = document.querySelector(".contact");
for(var key in siteContent["contact"]) {
    if(siteContent["contact"].hasOwnProperty(key)) {
        var value = siteContent["contact"][key];
          contact.children[i].innerHTML = value;
          // console.log(value);
          i++;
        }
    }








let footer = document.querySelector("footer p");
footer.innerHTML = siteContent["footer"]["copyright"]
