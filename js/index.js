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
