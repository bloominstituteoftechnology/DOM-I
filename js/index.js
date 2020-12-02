const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// ---- Navigation Bar ----
let anchors = document.querySelectorAll('nav a');
for(var i=0; i<anchors.length; i++) {
  anchors[i].innerHTML = siteContent["nav"][`nav-item-${i + 1}`]
};


// ---- CTA -----------
let h1 = document.querySelector(".cta-text h1");
h1.innerHTML = siteContent["cta"]["h1"];

let button = document.querySelector(".cta-text button");
button.innerHTML = siteContent["cta"]["button"];

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

// ---- Main Content (Top) ------
let h4Features = document.querySelector(".main-content .top-content h4");
h4Features.innerHTML = siteContent["main-content"]["features-h4"];

let featuresContent = document.querySelector(".main-content .top-content p");
featuresContent.innerHTML = siteContent["main-content"]["features-content"];

let aboutHeader = document.querySelector(".main-content .top-content h4");
aboutHeader.innerHTML = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelector(".main-content .top-content p");
aboutContent.innerHTML = siteContent["main-content"]["about-content"];



// ---- Contact ---------


// ---- Footer -------


// --------------------------------


//Top Bar
//-- Nav Bar
//-- Logo

//Header (CTA)
//-- Header Txt
//-- Button

//Main Content
//-- Top Content
//-- Middle Content
//-- Bottom Content

//Contact

//Footer
