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
 
//Erinc Version;
// const navItems = siteContent.nav //object with 7 children
// const navItemsKeys = Object.keys(navItems)
// const navItemsValues = Object.values(navItems)

// for(let i=0; i<navItemsKeys.length; i++) {
//   if(navItemsKeys[i]!== "img-src") {
//     document.getElementsByTagName("nav")[0].children[i].textContent = navItemsValues[i]
//     } 
//  }

let selectedNavLinks = document.querySelectorAll("nav a");
selectedNavLinks.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
})


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

//Erinc Version
// const mainContentKeys = Object.keys(siteContent["main-content"])
// const h4Keys = mainContentKeys.filter(item => item.includes("h4"))
// const mainContentPs = mainContentKeys.filter(item => item.includes("content"))
// const textContentDivs = document.getElementsByClassName("text-content")

// for(let i=0; i<h4Keys.length; i++) { 
//   textContentDivs[i].getElementsByTagName("h4")[0].textContent = siteContent["main-content"][h4Keys[i]]
//   textContentDivs[i].getElementsByTagName("p")[0].textContent = siteContent["main-content"][mainContentPs[i]]
// }

// const mainContentImage = document.getElementById("middle-img")
// mainContentImage.setAttribute("src", siteContent["main-content"]["middle-img-src"])

let textContentList = document.querySelectorAll(".text-content");

textContentList[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
textContentList[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];
textContentList[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
textContentList[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];
textContentList[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
textContentList[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
textContentList[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
textContentList[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];
textContentList[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
textContentList[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//--------------------------------------------------------


//contact

const contactH4 = document.getElementsByTagName("h4")[5]
contactH4.textContent = siteContent["contact"]["contact-h4"]

const contactAddress = document.getElementsByTagName("p")[5]
contactAddress.textContent = siteContent["contact"]["address"]

const contactPhone = document.getElementsByTagName("p")[6]
contactPhone.textContent = siteContent["contact"]["phone"]


const contactEmail = document.getElementsByTagName("p")[7]
contactEmail.textContent = siteContent["contact"]["email"]

//******************************************** */

//footer

const footer = document.querySelector("footer")
footer.textContent = siteContent["footer"]["copyright"]
//************************************************* */

// Add New Content
// Change navigation text color
selectedNavLinks.forEach((link,i) => {
  link.style.color = "green";
})

// Add two items to navigation
selectedNavLinks = document.getElementsByTagName("nav")[0];
let createNewNode = (name) => {
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode;
}
selectedNavLinks.prepend(createNewNode("Extra Item 1"));
selectedNavLinks.append(createNewNode("Extra Item 2"));

