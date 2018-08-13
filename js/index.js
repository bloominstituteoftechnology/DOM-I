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



let navigationButtons1 = document.querySelectorAll("a");
navigationButtons1.forEach((element, i) => {
  // navigationButtons1.innerHTML = siteContent["nav"]["nav-item-1"];
  navigationButtons1[i].innerHTML = siteContent["nav"][`nav-item-${i + 1}`];
  navigationButtons1[i].style.color = "green";
});

let newNavigationElement1 = document.createElement("a");
let newNavigationElement2 = document.createElement("a");


let homeElement = document.querySelector("nav");


homeElement.appendChild(newNavigationElement1);
homeElement.prepend(newNavigationElement2);


newNavigationElement1.innerText = "Social";
newNavigationElement1.style.color = "green";
newNavigationElement1.style.cursor = "pointer";


newNavigationElement2.innerText = "Blog";
newNavigationElement2.style.color = "green";
newNavigationElement2.style.cursor = "pointer";





// CTA SECTION START
let callToActionHeader = document.querySelector("h1");
callToActionHeader.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector("button");
ctaButton.innerHTML = siteContent["cta"]["button"];

let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"]);
// CTA SECTION END


// MAIN CONTENT START



let topContentHeader = document.querySelectorAll("h4");
topContentHeader.forEach((element, i) => {
  topContentHeader[0].innerHTML = siteContent["main-content"]["features-h4"];
  topContentHeader[1].innerHTML = siteContent["main-content"]["about-h4"];
  topContentHeader[2].innerHTML = siteContent["main-content"]["services-h4"];
  topContentHeader[3].innerHTML = siteContent["main-content"]["product-h4"];
  topContentHeader[4].innerHTML = siteContent["main-content"]["vision-h4"];
  


  topContentHeader[5].innerHTML = siteContent["contact"]["contact-h4"];
});



let topContentParagraph = document.querySelectorAll("p");
topContentParagraph.forEach((element, i) => {
  topContentParagraph[0].innerHTML = siteContent["main-content"]["features-content"];
  topContentParagraph[1].innerHTML = siteContent["main-content"]["about-content"];
  topContentParagraph[2].innerHTML = siteContent["main-content"]["services-content"];
  topContentParagraph[3].innerHTML = siteContent["main-content"]["product-content"];
  topContentParagraph[4].innerHTML = siteContent["main-content"]["vision-content"];




  topContentParagraph[5].innerHTML = siteContent["contact"]["address"];
  topContentParagraph[6].innerHTML = siteContent["contact"]["phone"];
  topContentParagraph[7].innerHTML = siteContent["contact"]["email"];
  topContentParagraph[8].innerHTML = siteContent["footer"]["copyright"];
});

let crossImage = document.getElementById("middle-img");
crossImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// MAIN SECTION END


