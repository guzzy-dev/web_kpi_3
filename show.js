let paragraph = document.querySelector(".services-image-with-text__desc")
let info = document.querySelector(".extra-info")
let buttonLink = document.querySelector(".show-more")
let menueIcon = document.querySelector(".menue-icon")
let menue = document.querySelector(".menue")

buttonLink.onclick = () => {
	info.style.display = "inline"
	buttonLink.style.display = "none"
}

menueIcon.onclick = () => {
	

		menue.style.display = "flex"

			
		setTimeout(() => {
			menue.style.display = "none"
		}, 1500)
}