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


// Navigation 
let services = document.getElementsByTagName("a")[0];
services.innerHTML = "Services";

let product = document.getElementsByTagName("a")[1];
product.innerHTML = "Products";

let vision = document.getElementsByTagName("a")[2];
vision.innerHTML = "Vision";

let features = document.getElementsByTagName("a")[3];
features.innerHTML = "Features";

let about = document.getElementsByTagName("a")[4];
about.innerHTML = "About";

let contact = document.getElementsByTagName("a")[5];
contact.innerHTML = "Contact"; 

//End of Navigation


// CTA
let h1 = document.getElementsByTagName("h1")[0];
h1.innerHTML = "DOM IS AWESOME";

let button = document.getElementsByTagName("button")[0];
button.innerHTML = "Get Started";

let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"]);
//CTA


// Main Content
let get = document.getElementsByTagName;
let getImg = document.getElementById

let featuresHeader = document.getElementsByTagName("h4")[0];
featuresHeader.innerHTML = "Features";

let featuresGraph = document.getElementsByTagName("p")[0];
featuresGraph.innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let aboutHeader = document.getElementsByTagName("h4")[1];
aboutHeader.innerHTML = "About";

let aboutGraph = document.getElementsByTagName('p')[1];
aboutGraph.innerHTML =  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


let codeBanner = document.getElementById('middle-img');
codeBanner.setAttribute('src', "img/mid-page-accent.jpg");

let servicesHeader = document.getElementsByTagName("h4")[2];
servicesHeader.innerHTML = "Services";

let servicesGraph = document.getElementsByTagName('p')[2];
servicesGraph.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let productHeader = document.getElementsByTagName("h4")[3];
productHeader.innerHTML = "Product";

let productGraph = document.getElementsByTagName('p')[3];
productGraph.innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let visionHeader = document.getElementsByTagName("h4")[4];
visionHeader.innerHTML = "Vision";

let visionGraph = document.getElementsByTagName('p')[4];
visionGraph.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// End of main content



//Contact
let contactHeader = document.getElementsByTagName("h4")[5];
contactHeader.innerHTML = "Contact";

let somewhere = document.getElementsByTagName('p')[5];
somewhere.innerHTML = "123 Way 456 Street Somewhere, USA";

let phone = document.getElementsByTagName('p')[6];
phone.innerHTML = "1 (888) 888-8888";

let email = document.getElementsByTagName('p')[7];
email.innerHTML = "sales@greatidea.io";

//End Contact

// Footer
let footer = document.getElementsByTagName('p')[8];
footer.innerHTML = "Copyright Great Idea! 2018";
// End of Footer
