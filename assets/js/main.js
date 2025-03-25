/*
	Alpha by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      ( '1281px',  '1680px' ),
			normal:    ( '981px',   '1280px' ),
			narrow:    ( '737px',   '980px'  ),
			narrower:  ( '737px',   '840px'  ),
			mobile:    ( '481px',   '736px'  ),
			mobilep:   ( null,      '480px'  )
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right'
		});

	// NavPanel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);

// Main JavaScript functionality

// AOS Initialisierung
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // Smooth Scroll für Ankerlinks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // FAQ Accordion Funktionalität
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const wasActive = faqItem.classList.contains('active');
            
            // Alle anderen schließen
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Dieses Element umschalten
            if (!wasActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // Chart.js Diagramm
    if (document.getElementById('conceptChart')) {
        const ctx = document.getElementById('conceptChart').getContext('2d');
        
        const chart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: [
                    'Anforderungsanalyse',
                    'KI-Taskgenerierung',
                    'Auto. Entwicklung',
                    'Testing & QA',
                    'CI/CD',
                    'Monitoring',
                    'Analytics'
                ],
                datasets: [{
                    label: 'CodeGenAI Workflow',
                    data: [90, 95, 100, 85, 90, 80, 85],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }

    // Cookie-Banner Funktionalität
    if (!localStorage.getItem('cookiesAccepted')) {
        const cookieBanner = document.getElementById('cookie-banner');
        if (cookieBanner) {
            cookieBanner.style.display = 'block';
            
            const acceptButton = document.getElementById('accept-cookies');
            if (acceptButton) {
                acceptButton.addEventListener('click', function() {
                    localStorage.setItem('cookiesAccepted', 'true');
                    cookieBanner.style.display = 'none';
                });
            }
        }
    }
});

// Hauptinitialisierung aller Komponenten
document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher initialisieren
    new ThemeSwitcher();
    
    // FAQ initialisieren
    new FAQ();
    
    // Concept Details initialisieren
    new ConceptDetails();
    
    // Smooth Scroll für Navigation
    initSmoothScroll();
    
    // Mobile Navigation
    initMobileNav();
});

// Smooth Scroll Funktion
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile Navigation
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('#nav');
    
    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('nav-visible');
            navToggle.classList.toggle('active');
        });
    }
}