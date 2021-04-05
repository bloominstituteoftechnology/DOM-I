const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street <br>Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// HEADER
// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);
logo.classList.add('.logo');

let nav = document.querySelector('nav');

let faq = document.createElement('a');
nav.appendChild(faq);

let media = document.createElement('a');
nav.prepend(media);

let navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];
navLinks[6].textContent = 'Media';
navLinks[7].textContent = 'FAQ';

// MAIN IMAGE
let cta = document.querySelector('.cta');
let mainImage = cta.querySelector('img');
mainImage.setAttribute('src', siteContent['cta']['img-src']);
let headline = cta.querySelector('div h1');
headline.textContent = siteContent['cta']['h1'];
let ctaButton = cta.querySelector('div button');
ctaButton.textContent = siteContent['cta']['button'];

// Top Content
let topContent = document.querySelectorAll('.top-content .text-content');

let firstTopTitle = topContent[0].querySelector('h4');
let firstTopParagraph = topContent[0].querySelector('p');
firstTopTitle.textContent = siteContent['main-content']['features-h4'];
firstTopParagraph.textContent = siteContent['main-content']['features-content'];

let secondTopTitle = topContent[1].querySelector('h4');
let secondTopParagraph = topContent[1].querySelector('p');
secondTopTitle.textContent = siteContent['main-content']['about-h4'];
secondTopParagraph.textContent = siteContent['main-content']['about-content'];

// Middle Image
let contentImage = document.getElementById('middle-img');
contentImage.src = siteContent['main-content']['middle-img-src'];

// Bottom Content
let bottomContent = document.querySelectorAll('.bottom-content .text-content');

let firstBottomTitle = bottomContent[0].querySelector('h4');
let firstBottomParagraph = bottomContent[0].querySelector('p');
firstBottomTitle.textContent = siteContent['main-content']['services-h4'];
firstBottomParagraph.textContent = siteContent['main-content']['services-content'];

let secondBottomTitle = bottomContent[1].querySelector('h4');
let secondBottomParagraph = bottomContent[1].querySelector('p');
secondBottomTitle.textContent = siteContent['main-content']['product-h4'];
secondBottomParagraph.textContent = siteContent['main-content']['product-content'];

let thirdBottomTitle = bottomContent[2].querySelector('h4');
let thirdBottomParagraph = bottomContent[2].querySelector('p');
thirdBottomTitle.textContent = siteContent['main-content']['vision-h4'];
thirdBottomParagraph.textContent = siteContent['main-content']['vision-content'];

// Contact Section
let contactSectionHeader = document.querySelector('.contact h4');
contactSectionHeader.textContent = siteContent['contact']['contact-h4'];
let contactSectionParas = document.querySelectorAll('.contact p');
contactSectionParas[0].innerHTML = siteContent['contact']['address'];
contactSectionParas[1].textContent = siteContent['contact']['phone'];
contactSectionParas[2].textContent = siteContent['contact']['email'];

// Footer Section
let footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];
