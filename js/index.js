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

// Navbar Logo
let logo = document.getElementById("logo-img");
logo.src = "img/logo.png";

//Navbar links
let navbar = document.querySelectorAll("a");
for (let i = 0; i < navbar.length; i++) {
	navbar[i].textContent = siteContent["nav"][`nav-item-${[i + 1]}`];
}

// Section CTA
let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = "DOM <br> IS<br>AWESOME";
document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"];
let ctaImg = document.querySelector("#cta-img");
ctaImg.src = "img/header-img.png";

// Features
document.querySelector(".text-content h4").textContent = siteContent["main-content"]["features-h4"];
document.querySelector(".text-content p").textContent = siteContent["main-content"]["features-content"];

// About
document.querySelector(".text-content:nth-child(2) h4").textContent = siteContent["main-content"]["about-h4"];
document.querySelector(".text-content:nth-child(2) p").textContent = siteContent["main-content"]["about-content"];

// Middle Image
let middleImage = document.querySelector("#middle-img");
middleImage.src = "img/mid-page-accent.jpg";

// Services
document.querySelector(".bottom-content .text-content h4").textContent = siteContent["main-content"]["services-h4"];
document.querySelector(".bottom-content .text-content p").textContent = siteContent["main-content"]["services-content"];

// Product
document.querySelector(".bottom-content .text-content:nth-child(2) h4").textContent =
	siteContent["main-content"]["product-h4"];
document.querySelector(".bottom-content .text-content:nth-child(2) p").textContent =
	siteContent["main-content"]["product-content"];

// Vison
document.querySelector(".bottom-content .text-content:nth-child(3) h4").textContent =
	siteContent["main-content"]["vision-h4"];
document.querySelector(".bottom-content .text-content:nth-child(3) p").textContent =
	siteContent["main-content"]["vision-content"];

// Contact
document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];
let address = document.querySelector(".contact p");
address.innerHTML = "123 Way 456 Street <br> Somewhere, USA";
document.querySelector(".contact p:nth-child(3)").textContent = siteContent["contact"]["phone"];
document.querySelector(".contact p:nth-child(4)").textContent = siteContent["contact"]["email"];

//footer
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];
