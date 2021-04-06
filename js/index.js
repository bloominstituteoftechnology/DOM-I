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



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// node list into an array


let atag = document.getElementsByTagName("container");
atag.setAttribute( "href", siteContent["nav"]["nav-item-1"])

let atag2 = document.getElementsByTagName("container");
atag.setAttribute( "href", siteContent["nav"]["nav-item-2"])

let atag3 = document.getElementsByTagName("container")
atag3.setAttribute("href", siteContent["nav"]["nav-item-3"]) 

let atag4 = docuemnt.getElementByTagName("container")
atag4.setAttribute   ("href", siteContent ["nav"]["nav-item-4"])

let atag5 = document.getElementByTagName("container")
atag5.setAttribute ("href",siteContent ["nav"]["nav-item-5"])

let atag6 = document.getElementByTagName("container")
atag6.setAttribute("href", siteContent["nav"]["nav-item-6"])

let main1 = document.getElementByTagName("cta-text")
main1.setAttribute("href", siteContent["cta"]["h1"])

let main2 = document.getElementByTagName("cta-text")
main2.setAttribute("href", siteContent["cta"]["button"])


let main3 = document.getElementByTagName("cta-text")
main3.setAttribute("href", siteContent["cta"]["img-src"])




let newBox = document.getElementsByTagName("text-content")
newBox.setAttribute("href", siteContent["main-content"][ "features-content"])


let newBox9 = document.getElementsByTagName("text-content")
newBox9.setAttribute("href", siteContent["main-content"]["features-h4"])

let newBox2 = document.getElementsByTagName("text-content")
newBox2.setAttribute("href", siteContent["main-content"]["about-h4"])


let newBox3 = document.getElementsByTagName("text-content")
newBox3.setAttribute("href", siteContent["main-content"]["about-content"])


let newBox4 = document.getElementsByTagName("text-content")
newBox4.setAttribute("href", siteContent["main-content"]["middle-img-src"])


let newBox5 = document.getElementsByTagName("text-content")
newBox5.setAttribute("href", siteContent["main-content"]["services-h4"])


let newBox6 = document.getElementsByTagName("text-content")
newBox6.setAttribute("href", siteContent["main-content"]["services-content"])


let newBox7 = document.getElementsByTagName("text-content")
newBox7.setAttribute("href", siteContent["main-content"]["product-h4"])


let newBox8 = document.getElementsByTagName("text-content")
newBox8.setAttribute("href", siteContent["main-content"]["product-content"])



let newBox10 = document.getElementsByTagName("text-content")
newBox10.setAttribute("href", siteContent["main-content"]["vision-h4"])


let newBox11 = document.getElementsByTagName("text-content")
newBox11.setAttribute("href", siteContent["main-content"]["vision-content"])



let contacts = document.getElementsByTagName("contact")
contacts.setAttribute("href", siteContent["main-content"]["contact-h4"])

let contacts2 = document.getElementsByTagName("contact")
contacts2.setAttribute("href", siteContent["contact"]["address"])

let contacts3 = document.getElementsByTagName("contact")
contacts3.setAttribute("href", siteContent["main-content"]["phone"])


let contacts3 = document.getElementsByTagName("contact")
contacts3.setAttribute("href", siteContent["main-content"]["email"])


let footer1 = document.getElementsByTagName("")
footer1.setAttribute("href", siteContent["footer"]["copyright"])