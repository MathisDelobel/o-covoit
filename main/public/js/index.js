document.addEventListener("DOMContentLoaded", () => {
	// Navbar burger toggling
	const $navbarBurgers = document.querySelectorAll(".navbar-burger");
	for (const el of $navbarBurgers) {
		el.addEventListener("click", () => {
			const target = el.dataset.target;
			const $target = document.getElementById(target);

			el.classList.toggle("is-active");
			$target.classList.toggle("is-active");
		});
	}

	// Notification close button
	const closeButtons = document.querySelectorAll(".notification .delete");
	for (const button of closeButtons) {
		button.addEventListener("click", () => {
			button.closest(".notification").style.display = "none";
		});
	}
});
