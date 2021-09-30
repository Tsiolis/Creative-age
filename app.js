let sliderImages = document.querySelectorAll(".slide"),
    arrowBack = document.getElementById('back'),
		arrowForward = document.getElementById('forward'),
		current = 0;

		function reset() {
			for (let i = 0; i < sliderImages.length; i++) {
				sliderImages[i].style.display = "none";
			}
		}

		function startSlide() {
			reset() 
			sliderImages[0].style.display = "block";
		}

		function slideLeft() {
			reset() 
			sliderImages[current - 1].style.display = "block";
			current--;
		}
		
		// Show next
		function slideRight() {
			reset() 
			sliderImages[current + 1].style.display = "block";
			current++;
		}

		arrowBack.addEventListener("click", function() {
			reset() 
			if (current === 0) {
				current = sliderImages.length;
			}
			slideLeft();
		});
		
		// Right arrow click
		arrowForward.addEventListener("click", function() {
			reset() 
			if (current === sliderImages.length - 1) {
				current = -1;
			}
			slideRight();
		});
		

		startSlide()