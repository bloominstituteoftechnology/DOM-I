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
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
 

const navItems = siteContent.nav //object with 7 children
const navItemsKeys = Object.keys(navItems)
const navItemsValues = Object.values(navItems)

for(let i=0; i<navItemsKeys.length; i++) {
  if(navItemsKeys[i]!== "img-src") {
    document.getElementsByTagName("nav")[0].children[i].textContent = navItemsValues[i]
    } 
 }

//--------------------------------------------------------

//cta

const ctaText = document.querySelector('h1');
ctaText.textContent = "DOM Is Awesome";

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute("src", siteContent["cta"]["img-src"])

//--------------------------------------------------------

//main-content

const mainContentKeys = Object.keys(siteContent["main-content"])
const h4Keys = mainContentKeys.filter(item => item.includes("h4"))
const mainContentPs = mainContentKeys.filter(item => item.includes("content"))
const textContentDivs = document.getElementsByClassName("text-content")

for(let i=0; i<h4Keys.length; i++) { 
  textContentDivs[i].getElementsByTagName("h4")[0].textContent = siteContent["main-content"][h4Keys[i]]
  textContentDivs[i].getElementsByTagName("p")[0].textContent = siteContent["main-content"][mainContentPs[i]]
}

const mainContentImage = document.getElementById("middle-img")
mainContentImage.setAttribute("src", siteContent["main-content"]["middle-img-src"])


//--------------------------------------------------------


//contact




