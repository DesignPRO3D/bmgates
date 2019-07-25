$(document).ready(function() {
	//Smooth Scrolling
	$('#navbar a, .btn').on('click', function(event) {
		let el1 = $('#showcase').is(':visible');
		let el2 = $('#what').is(':visible');
		let el3 = $('#who').is(':visible');
		let el4 = $('#contact').is(':visible');
		let el5 = $('#clients').is(':visible');
		let el6 = $('#main-footer').is(':visible');
		if (!el1 && !el2 && !el3 && !el4 && !el5 && !el6) {
			$('.galler-container')
				.fadeOut('fast', 'linear')
				.remove();
			$('#showcase, #what, #who, #contact, #clients, #main-footer').fadeIn(
				'fast',
				'linear'
			);
		}
		if (this.hash !== '') {
			event.preventDefault();

			const hash = this.hash;

			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top - 100
				},
				800
			);
		}
	});

	$('.menu a').on('click', function(e) {
		let check = document.querySelector('.toggler');
		check.checked = false;
	});
	//Fade in gallery
	$('.add-gallery').on('click', function() {
		$('#showcase').fadeOut('fast', 'linear', galleryIN);
		$('#what, #who, #contact, #clients, #main-footer').fadeOut(
			'fast',
			'linear'
		);
	});

	function galleryIN() {
		fetch('gallery.json')
			.then(res => {
				return res.json();
			})
			.then(data => {
				let output = '';
				data.forEach(obj => {
					output += `<img src="gallery/small/${obj.small_src}" alt="${
						obj.name
					}" />`;
				});
				let container = `<div class="galler-container">${output}</div>`;
				$('#navbar').after(container);
			});
	}
});

//Navbar add and remove class btn-active
document.querySelector('#navbar ul').addEventListener('click', function(e) {
	let el = document.querySelector('.btn-active');
	el.classList.remove('btn-active');
	e.target.classList.add('btn-active');
});
