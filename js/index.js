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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headerNavA = document.querySelectorAll("header nav a");

for(var i = 0; i < headerNavA.length; i ++) {
  headerNavA[i].innerHTML = siteContent["nav"]["nav-item-" + (i + 1)];
}

let imgLogo = document.getElementById("logo-img");
imgLogo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaH1 = document.querySelector(".cta .cta-text h1");
ctaH1.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta .cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let featuresH4 = document.querySelectorAll(".main-content .top-content .text-content h4");
featuresH4[0].innerHTML = siteContent["main-content"]["features-h4"];

let featuresP = document.querySelectorAll(".main-content .top-content .text-content p");
featuresP[0].innerHTML = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelectorAll(".main-content .top-content .text-content h4");
aboutH4[1].innerHTML = siteContent["main-content"]["about-h4"];

let aboutP = document.querySelectorAll(".main-content .top-content .text-content p");
aboutP[1].innerHTML = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

let servicesH4 = document.querySelectorAll(".bottom-content .text-content h4")[0];
servicesH4.innerHTML = siteContent["main-content"]["services-h4"];

let servicesP = document.querySelectorAll(".bottom-content .text-content p")[0];
servicesP.innerHTML = siteContent["main-content"]["services-content"];

let productH4 = document.querySelectorAll(".bottom-content .text-content h4")[1];
productH4.innerHTML = siteContent["main-content"]["product-h4"];

let productP = document.querySelectorAll(".bottom-content .text-content p")[1];
productP.innerHTML = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelectorAll(".bottom-content .text-content h4")[2];
visionH4.innerHTML = siteContent["main-content"]["vision-h4"];

let visionP = document.querySelectorAll(".bottom-content .text-content p")[2];
visionP.innerHTML = siteContent["main-content"]["vision-content"];

let contactH4 = document.querySelector(".contact h4");
contactH4.innerHTML = siteContent["contact"]["contact-h4"];

let contactAddress = document.querySelectorAll(".contact p")[0];
contactAddress.innerHTML = siteContent["contact"]["address"];

let contactPhone = document.querySelectorAll(".contact p")[1];
contactPhone.innerHTML = siteContent["contact"]["phone"];

let contactEmail = document.querySelectorAll(".contact p")[2];
contactEmail.innerHTML = siteContent["contact"]["email"];

let copyRight= document.querySelector("footer p");
copyRight.innerHTML = siteContent["footer"]["copyright"];

let headerNav = document.querySelector("header nav"); // header nav

let innovation = document.createElement("a"); // created a tag
innovation.innerHTML = "Innovation";  // added innovation to a innerHtml
innovation.href = "#"; // add href to a tag
headerNav.appendChild(innovation); // header nav appendchild innovation

let home = document.createElement("a");
home.innerHTML = "Home";
home.href = "#";
headerNav.prepend(home);

headerNavA = document.querySelectorAll("header nav a");  // select all a in the header nav to a node list
headerNavA.forEach(navItem => {     // iterate through nav nodelist
  navItem.style.color = "green";    // each item reasisgn the color of a to green
});
