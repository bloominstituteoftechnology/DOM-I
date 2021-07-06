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
// Nav
let nav = document.querySelectorAll("a");
for (let i = 0; i < nav.length; i++) {
	nav[i].textContent = ("textcontent", siteContent["nav"][`nav-item-${i + 1}`]);
}
//IMGs
let imgs = document.querySelectorAll("img");
imgs[1].setAttribute("src", siteContent["cta"]["img-src"]);
imgs[2].setAttribute("src", siteContent["main-content"]["middle-img-src"]);
//H1
let title = document.querySelector("h1");
title.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");
//Button
let button = document.querySelector("button");
button.innerText = siteContent["cta"]["button"];
button.id = "button";
document.getElementById("button").style.backgroundColor = "#64e764";
//Paragraphs
let paragraphs = document.querySelectorAll("p");
paragraphs[0].innerText = siteContent["main-content"]["features-content"];
paragraphs[1].innerText = siteContent["main-content"]["about-content"];
paragraphs[2].innerText = siteContent["main-content"]["services-content"];
paragraphs[3].innerText = siteContent["main-content"]["product-content"];
paragraphs[4].innerText = siteContent["main-content"]["vision-content"];
paragraphs[5].innerHTML = siteContent["contact"]["address"]
	.split("Somewhere,")
	.join("<br> Somewhere,");
paragraphs[6].innerText = siteContent["contact"]["phone"];
paragraphs[7].innerText = siteContent["contact"]["email"];
paragraphs[8].innerText = siteContent["footer"]["copyright"];
//H1
let h4 = document.querySelectorAll("h4");
h4[0].innerText = siteContent["main-content"]["features-h4"];
h4[1].innerText = siteContent["main-content"]["about-h4"];
h4[2].innerText = siteContent["main-content"]["services-h4"];
h4[3].innerText = siteContent["main-content"]["product-h4"];
h4[4].innerText = siteContent["main-content"]["vision-h4"];
h4[5].innerText = siteContent["contact"]["contact-h4"];
//Footer
let footer = document.querySelector("footer");
