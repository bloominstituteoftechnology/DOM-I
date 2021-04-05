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


//Nav Bar Content
const navLinks = document.querySelectorAll("nav > a");
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

navLinks.forEach(navLink => navLink.style.color = 'green');

//CTA Image
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//CTA Text
const ctaTitle = document.querySelector("h1");
const ctaTitleSplit = siteContent["cta"]["h1"].split(' ').join('<br>');
ctaTitle.innerHTML = ctaTitleSplit;

//CTA Button
const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

//Main content - h4s
const mainHeadings = document.querySelectorAll('.main-content h4');
mainHeadings[0].textContent = siteContent["main-content"]["features-h4"];
mainHeadings[1].textContent = siteContent["main-content"]["about-h4"];
mainHeadings[2].textContent = siteContent["main-content"]["features-h4"];
mainHeadings[3].textContent = siteContent["main-content"]["services-h4"];
mainHeadings[4].textContent = siteContent["main-content"]["vision-h4"];

//Middle Image
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Main content - p
const mainParagraphs = document.querySelectorAll('.main-content p')
mainParagraphs[0].textContent = siteContent['main-content']['features-content'];
mainParagraphs[1].textContent = siteContent['main-content']["about-content"];
mainParagraphs[2].textContent = siteContent['main-content']["services-content"];
mainParagraphs[3].textContent = siteContent['main-content']["product-content"];
mainParagraphs[4].textContent = siteContent['main-content']["vision-content"];

const footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent["footer"]["copyright"];
