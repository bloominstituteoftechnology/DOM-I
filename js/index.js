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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navitem1 = document.getElementsByTagName("a")[0];
navitem1.innerHTML = siteContent["nav"]["nav-item-1"]
const navitem2 = document.getElementsByTagName("a")[1];
navitem2.innerHTML = siteContent["nav"]["nav-item-2"]
const navitem3 = document.getElementsByTagName("a")[2];
navitem3.innerHTML = siteContent["nav"]["nav-item-3"]
const navitem4 = document.getElementsByTagName("a")[3];
navitem4.innerHTML = siteContent["nav"]["nav-item-4"]
const navitem5 = document.getElementsByTagName("a")[4];
navitem5.innerHTML = siteContent["nav"]["nav-item-5"]
const navitem6 = document.getElementsByTagName("a")[5];
navitem6.innerHTML = siteContent["nav"]["nav-item-6"]
//CTA//
const ctatitle = document.getElementsByTagName("h1")[0];
ctatitle.innerHTML =  siteContent["cta"]["h1"];
const buttontext = document.getElementsByTagName("button")[0];
buttontext.innerHTML =  siteContent["cta"]["button"];
const headerimage = document.getElementById("cta-img");
headerimage.setAttribute('src', siteContent["cta"]["img-src"]);
//Main-Content//
const featurestitle= document.getElementsByTagName("h4")[0];
featurestitle.innerHTML =  siteContent["main-content"]["features-h4"];
const abouttitle= document.getElementsByTagName("h4")[1];
abouttitle.innerHTML =  siteContent["main-content"]["about-h4"];
const servicestitle= document.getElementsByTagName("h4")[2];
servicestitle.innerHTML =  siteContent["main-content"]["services-h4"];
const producttitle= document.getElementsByTagName("h4")[3];
producttitle.innerHTML =  siteContent["main-content"]["product-h4"];
const visiontitle= document.getElementsByTagName("h4")[4];
visiontitle.innerHTML =  siteContent["main-content"]["vision-h4"];
const featurescontent= document.getElementsByTagName("p")[0];
featurescontent.innerHTML =  siteContent["main-content"]["features-content"];
const aboutcontent= document.getElementsByTagName("p")[1];
aboutcontent.innerHTML =  siteContent["main-content"]["about-content"];
const middleimage = document.getElementById("middle-img");
middleimage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
const servicescontent= document.getElementsByTagName("p")[2];
servicescontent.innerHTML =  siteContent["main-content"]["services-content"];
const productcontent= document.getElementsByTagName("p")[3];
productcontent.innerHTML =  siteContent["main-content"]["product-content"];
const visioncontent= document.getElementsByTagName("p")[4];
visioncontent.innerHTML =  siteContent["main-content"]["product-content"];
// Contact
const contacttitle= document.getElementsByTagName("h4")[5];
contacttitle.innerHTML =  siteContent["contact"]["contact-h4"];;
const address= document.getElementsByTagName("p")[5];
address.innerHTML =  siteContent["contact"]["address"];
const phone= document.getElementsByTagName("p")[6];
phone.innerHTML =  siteContent["contact"]["phone"];
const email= document.getElementsByTagName("p")[7];
email.innerHTML =  siteContent["contact"]["email"];
// Footer
const footer= document.getElementsByTagName("p")[8];
footer.innerHTML =  siteContent["footer"]["copyright"];

//Task 4
let aElements = document.getElementsByTagName('a');
 for (let i = 0; i < aElements.length; i++) {
  aElements[i].style.color = 'green';
}
//Task 4 Pt 2
const Portfolio = document.createElement("a")
Portfolio.innerHTML = "Portfolio";
Portfolio.style.color = "green";
const nav = document.querySelector("nav");
nav.append(Portfolio);
 const home = document.createElement("a")
home.innerHTML = "Home";
home.style.color = "green";
nav.prepend(home);