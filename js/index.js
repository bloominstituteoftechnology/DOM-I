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
		h1: "DOM<br> Is<br> Awesome",
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
		address: "123 Way 456 Street<br> Somewhere, USA",
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

let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute("src", siteContent["cta"]["img-src"]);

let navKeyArray = Object.keys(siteContent.nav);

let nav = document.getElementsByTagName("nav")[0];
let anchorList = nav.children;

for (i = 0; i < anchorList.length; i++) {
	anchorList[i].textContent = siteContent.nav[navKeyArray[i]];
}

var a = document.createElement("a");
a.textContent = "Newsletter";
nav.appendChild(a);

var b = document.createElement("a");
b.textContent = "HOME!";
nav.prepend(b);

nav.style.backgroundColor = "blue";

let ctaText = document.getElementsByTagName("h1")[0];
ctaText.innerHTML = siteContent["cta"]["h1"];

let buttonText = document.getElementsByTagName("button")[0];
buttonText.textContent = siteContent["cta"]["button"];

let mainArray = ["features", "about", "services", "product", "vision"];
document.querySelectorAll(".text-content").forEach((element, index) => {
	let key = mainArray[index]; // features, about, services ...
	let h4TextKey = key + "-h4"; // features-h4, about-h4k
	let pTextKey = key + "-content";
	element.querySelector("h4").textContent =
		siteContent["main-content"][h4TextKey];
	element.querySelector("p").textContent =
		siteContent["main-content"][pTextKey];
});

let middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let contactP = document.querySelectorAll(".contact p");
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

let footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];
