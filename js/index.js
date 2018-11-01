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
    "h1": "DOM<br> Is<br> Awesome",
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


// prepend and append
const ourTeamElement = document.createElement('a');

ourTeamElement.href = '#';
ourTeamElement.textContent = 'Our Team';

const privacyPolicy = document.createElement('a');

privacyPolicy.href = "#";
privacyPolicy.textContent = 'Privacy Policy';


const mainNav = document.querySelector('nav');
console.log(mainNav);
mainNav.prepend(ourTeamElement);
mainNav.append(privacyPolicy);




// change links to green

let links = document.querySelectorAll('a');
for (i = 0; i < links.length; i++){
  links[i].style.color = "green";
}


let serviceLink = document.querySelectorAll("a")[1];
serviceLink.textContent = siteContent["nav"]["nav-item-1"]

let productLink = document.querySelectorAll("a")[2];
productLink.textContent = siteContent["nav"]["nav-item-2"]

let visionLink = document.querySelectorAll("a")[3];
visionLink.textContent = siteContent["nav"]["nav-item-3"]

let featuresLink = document.querySelectorAll("a")[4];
featuresLink.textContent = siteContent["nav"]["nav-item-4"]

let aboutLink = document.querySelectorAll("a")[5];
aboutLink.textContent = siteContent["nav"]["nav-item-5"]

let contactLink = document.querySelectorAll("a")[6];
contactLink.textContent = siteContent["nav"]["nav-item-6"]

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let ctaText = document.querySelector("h1");
ctaText.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

let textH4 = document.querySelectorAll(".text-content h4");

textH4[0].textContent = siteContent["main-content"]["features-h4"]
textH4[1].textContent = siteContent["main-content"]["about-h4"]
textH4[2].textContent = siteContent["main-content"]["services-h4"]
textH4[3].textContent = siteContent["main-content"]["product-h4"]
textH4[4].textContent = siteContent["main-content"]["vision-h4"]

let contentP = document.querySelectorAll(".text-content p");

contentP[0].textContent = siteContent["main-content"]["features-content"];
contentP[1].textContent = siteContent["main-content"]["about-content"];
contentP[2].textContent = siteContent["main-content"]["services-content"];
contentP[3].textContent = siteContent["main-content"]["product-content"];
contentP[4].textContent = siteContent["main-content"]["vision-content"];

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4']

let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];
