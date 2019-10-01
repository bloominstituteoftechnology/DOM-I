const siteContent = {
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png"
	},
	cta: {
		h1: "DOM Is Awesome",
		button: "Get Started",
		"img-src": "img/header-img.png"
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
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io"
	},
	footer: {
		copyright: "Copyright Great Idea! 2018"
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// const links = document.querySelectorAll("a");
// Array.from(links).forEach((link) => {
// 	console.log(link.tagName);
// 	link.textContent = "links";
// });

///NAVIGATION
const navItems = document.querySelectorAll("a");
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

///////CTA
const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];

const button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//////MAIN CONTENT

const topContenth4 = document.querySelectorAll(
	".top-content .text-content h4"
)[0];
topContenth4.textContent = siteContent["main-content"]["features-h4"];

const topContentP = document.querySelectorAll(
	".top-content .text-content p"
)[0];
topContentP.textContent = siteContent["main-content"]["features-content"];

const topContenth42 = document.querySelectorAll(
	".top-content .text-content h4"
)[1];
topContenth42.textContent = siteContent["main-content"]["about-h4"];

const topContentP2 = document.querySelectorAll(
	".top-content .text-content p"
)[1];
topContentP2.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//BOTTOM CONTENT

const bottomContenth4 = document.querySelectorAll(".bottom-content .text-content h4")[0];
bottomContenth4.textContent = siteContent["main-content"]["services-h4"];

const bottomContentP = document.querySelectorAll(".bottom-content .text-content p")[0];
bottomContentP.textContent = siteContent["main-content"]["services-content"];


const bottomContenth42 = document.querySelectorAll(".bottom-content .text-content h4")[1];
bottomContenth42.textContent = siteContent["main-content"]["product-h4"];

const bottomContentP2 = document.querySelectorAll(".bottom-content .text-content p")[1];
bottomContentP2.textContent = siteContent["main-content"]["product-content"];

const bottomContenth43 = document.querySelectorAll(".bottom-content .text-content h4")[2];
bottomContenth43.textContent = siteContent["main-content"]["vision-h4"];

const bottomContentP3 = document.querySelectorAll(".bottom-content .text-content p")[2];
bottomContentP3.textContent = siteContent["main-content"]["vision-content"];

///CONTACT

const contacth4 = document.querySelectorAll(".contact h4")[0];
contacth4.textContent = siteContent["contact"]["contact-h4"]

const contactP = document.querySelectorAll(".contact p")[0];
contactP.textContent = siteContent["contact"]["address"]

const contactP2 = document.querySelectorAll(".contact p")[1];
contactP2.textContent = siteContent["contact"]["phone"]

const contactP3 = document.querySelectorAll(".contact p")[2];
contactP3.textContent = siteContent["contact"]["email"]

const footer = document.querySelectorAll("footer p");
footer.textContent = siteContent["footer"]["copyright"]

navItems.forEach(function(nav){
  nav.style.color = "green"
  });

// navItems.appendChild(function(nav) {
  
// })

// const newLinks = document.createElement("nav");

// newLinks.textContent = "link"
// d
// navItems.append(newLink);

// navItems.appendChild(lastNav);
// navitems.prependChild(firstNav);
// 
const newNav1 = document.createElement("a");
const newNav2 = document.createElement("a");
newNav1.href = "#";
newNav2.href = "#";
newNav1.textContent = "pre";
newNav2.textContent = "append";
const newNav = document.querySelector("header nav");
newNav.prepend(newNav1);
newNav.appendChild(newNav2);