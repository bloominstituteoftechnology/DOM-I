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
// NavBar
const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#";
document.querySelector("nav").appendChild(blogLink);

let newLink = document.createElement("a");
newLink.textContent = "Social Media";
newLink.href = "#";
document.querySelector("nav").appendChild(newLink);

let navItems = document.querySelectorAll("nav a");
navItems.forEach((node, index) => {
	// navlinks = siteContent.nav[`nav-item-1`];
	node.textContent = siteContent.nav[`nav-item-${index}`];

	// return document.querySelector("a").appendChild(navlinks);
});

// CTA Text
const headTitle = document.querySelector(".cta-text h1");

headTitle.textContent = siteContent.cta["h1"];

const headPTag = document.querySelector(".cta-text button");

headPTag.textContent = siteContent.cta["button"];

// CTA image

const ctaImg = document.querySelector("#cta-img");

ctaImg.src = siteContent.cta["img-src"];

// H4

const allH4 = document.querySelectorAll("h4");
let firstH4 = allH4[0];
let secH4 = allH4[1];
let thirdH4 = allH4[2];
let forthH4 = allH4[3];
let fifH4 = allH4[4];
let sixthH4 = allH4[5];

firstH4.textContent = siteContent["main-content"]["features-h4"];
secH4.textContent = siteContent["main-content"]["about-h4"];
thirdH4.textContent = siteContent["main-content"]["services-h4"];
forthH4.textContent = siteContent["main-content"]["product-h4"];
fifH4.textContent = siteContent["main-content"]["vision-h4"];
sixthH4.textContent = siteContent["contact"]["contact-h4"];
// P tags
const allP = document.querySelectorAll("p");
let firstP = allP[0];
let secP = allP[1];
let thirdP = allP[2];
let forthP = allP[3];
let fifP = allP[4];
let sixthP = allP[5];
let sevP = allP[6];
let eigP = allP[7];
let ninP = allP[8];

firstP.textContent = siteContent["main-content"]["features-content"];
secP.textContent = siteContent["main-content"]["about-content"];
thirdP.textContent = siteContent["main-content"]["services-content"];
forthP.textContent = siteContent["main-content"]["product-content"];
fifP.textContent = siteContent["main-content"]["vision-content"];
sixthP.textContent = siteContent["contact"]["address"];
sevP.textContent = siteContent["contact"]["phone"];
eigP.textContent = siteContent["contact"]["email"];
ninP.textContent = siteContent["footer"]["copyright"];

// middle img

let middleImg = document.querySelector("#middle-img");

middleImg.src = siteContent["main-content"]["middle-img-src"];

navItems.forEach((node) => {
	node.style.color = "green";
});
