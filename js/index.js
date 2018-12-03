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
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let navItems = document.querySelectorAll('a');
for (let i = 0; i < navItems.length; i++) {
	navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

// CTA Section
const CtaH1 = document.querySelector('.cta .cta-text h1');
CtaH1.textContent = siteContent.cta['h1'];
const CtaButton = document.querySelector('.cta .cta-text button');
CtaButton.textContent = siteContent.cta['button'];
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src'];

// Main Content Section
const features = document.querySelector('.top-content').firstChild;
features.textContent = siteContent['main-content']['features-h4'];
const featuresContent = document.querySelector('.top-content .text-content p');
featuresContent.textContent = siteContent['main-content']['features-content'];

const about = document.querySelector('.top-content').lastChild;
about.textContent = siteContent['main-content']['about-h4'];
const aboutContent = document.querySelector('.top-content .text-content p');
aboutContent.textContent = siteContent['main-content']['about-content'];

const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

const services = document.querySelector('.bottom-content').firstChild;
services.textContent = siteContent['main-content']['services-h4'];
const servicesContent = document.querySelector('.bottom-content .text-content p');
aboutContent.textContent = siteContent['main-content']['services-content'];

const product = document.querySelector('.bottom-content').nextElementSibling;
product.textContent = siteContent['main-content']['services-h4'];

const vision = document.querySelector('.bottom-content').nextElementSibling;
vision.textContent = siteContent['main-content']['services-h4'];
