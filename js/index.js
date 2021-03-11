const siteContent = {
	'nav': {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	'cta': {
		'h1': 'DOM Is Awesome',
		'button': 'Get Started',
		'img-src': 'img/header-img.png',
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
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	'contact': {
		'contact-h4': 'Contact',
		'address': '123 Way 456 Street Somewhere, USA',
		'phone': '1 (888) 888-8888',
		'email': 'sales@greatidea.io',
	},
	'footer': {
		'copyright': 'Copyright Great Idea! 2018',
	},
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav bar additions
const services = document.querySelector('a:nth-child(1)');
const product = document.querySelector('a:nth-child(2)');
const vision = document.querySelector('a:nth-child(3)');
const features = document.querySelector('a:nth-child(4)');
const about = document.querySelector('a:nth-child(5)');
const contact = document.querySelector('a:nth-child(6)');

services.textContent = siteContent['nav']['nav-item-1'];
product.textContent = siteContent['nav']['nav-item-2'];
vision.textContent = siteContent['nav']['nav-item-3'];
features.textContent = siteContent['nav']['nav-item-4'];
about.textContent = siteContent['nav']['nav-item-5'];
contact.textContent = siteContent['nav']['nav-item-6'];

// Add 2 links to nav
const firstAddition = document.createElement('a');
const secondAddition = document.createElement('a');

firstAddition.href = '#';
firstAddition.textContent = 'I Did It';
document.querySelector('nav').prepend(firstAddition);

secondAddition.href = '#';
secondAddition.textContent = 'Oops I Did it Again';
document.querySelector('nav').appendChild(secondAddition);

// Change font color of nav bar to green
const navText = document.querySelectorAll('nav a');
navText.forEach(text => (text.style.color = 'green'));

// logo image placement
const navLogo = document.querySelector('#logo-img');

navLogo.setAttribute('src', 'img/logo.png');

// cta additions
const ctaImg = document.querySelector('#cta-img');
const ctaText = document.querySelector('h1');
const ctaButton = document.querySelector('button');

ctaImg.setAttribute('src', siteContent['cta']['img-src']);
ctaText.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];

// main content
const mainHeadings = document.querySelectorAll('.text-content h4');
const mainText = document.querySelectorAll('.text-content p');

mainHeadings[0].textContent = siteContent['main-content']['features-h4'];
mainHeadings[1].textContent = siteContent['main-content']['about-h4'];
mainHeadings[2].textContent = siteContent['main-content']['services-h4'];
mainHeadings[3].textContent = siteContent['main-content']['product-h4'];
mainHeadings[4].textContent = siteContent['main-content']['vision-h4'];

mainText[0].textContent = siteContent['main-content']['features-content'];
mainText[1].textContent = siteContent['main-content']['about-content'];
mainText[2].textContent = siteContent['main-content']['services-content'];
mainText[3].textContent = siteContent['main-content']['product-content'];
mainText[4].textContent = siteContent['main-content']['vision-content'];

// middle img
const middleImg = document.querySelector('#middle-img');

middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// contact content
const contactHeading = document.querySelector('.contact h4');
const contactText = document.querySelectorAll('.contact p');

contactHeading.textContent = siteContent['contact']['contact-h4'];

contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];

// footer content
const footerText = document.querySelector('footer p');

footerText.textContent = siteContent['footer']['copyright'];
