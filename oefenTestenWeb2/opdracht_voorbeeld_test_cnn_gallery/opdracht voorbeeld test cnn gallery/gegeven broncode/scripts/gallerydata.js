let galleryData=[
	{
		urlThumb:"thumbs/01 small.jpg",
		urlFull:"photos/01 large.jpg",
		copyright:"Jordan's jewels",
		description:"<strong>Green start:</strong> The Jordan Trail begins from Um Qais in the north and traverses verdant forest and farmland. "
	},
	{
		urlThumb:"thumbs/02 small.jpg",
		urlFull:"photos/02 large.jpg",
		copyright:"Jordan's jewels",
		description:"<strong>Epic trail:</strong> The 650-kilometer trail takes about 40 days to complete. The final stop is Aqaba in the south."
	},
	{
		urlThumb:"thumbs/03 small.jpg",
		urlFull:"photos/03 large.jpg",
		copyright:"Jordan's jewels",
		description:"<strong>Widescreen panoramas:</strong> Wadi Mujib is known as the \"Grand Canyon of Jordan.\" It's one of the highlights of the trail, which opened in February 2017."
	},
	{
		urlThumb:"thumbs/04 small.jpg",
		urlFull:"photos/04 large.jpg",
		copyright:"Jordan's jewels",
		description:"<strong>Adventure trail:</strong> Often classified as an adventure trail, the tour is more suitable for those in strong physical condition, but is still open to a large range of hikers."
	},
	{
		urlThumb:"thumbs/05 small.jpg",
		urlFull:"photos/05 large.jpg",
		copyright:"Jordan's jewels",
		description:"<strong>Lush valleys:</strong> Wadi Hasa is an area of limestone waterfalls and babbling brooks. The valley, known in Hebrew as Zered, is mentioned in the Torah and the Old Testament."
	},
	{
		urlThumb:"thumbs/06 small.jpg",
		urlFull:"photos/06 large.jpg",
		copyright:"Jordan's jewels",
		description:"<strong>Changing landscape:</strong> Wadi Feynan drains into the Dead Sea via Wadi Araba. Hikers on the trail move through four ecosystems, defined by lush and fertile valleys in the north, then on to rugged canyons and finally towards the famed Wadi Rum desert in the south."
	},
	{
		urlThumb:"thumbs/07 small.jpg",
		urlFull:"photos/07 large.jpg",
		copyright:"Jordan's jewels",
		description:"<strong>Protected scenery:</strong>Part of Wadi Feynan is designated as the Dana Biosphere Reserve, Jordan's largest nature reserve, which was founded in 1989."
	},
	{
		urlThumb:"thumbs/08 small.jpg",
		urlFull:"photos/08 large.jpg",
		copyright:"Jordan's jewels",
		description:"<strong>Flora and fauna:</strong>The Dana Reserve has a varied geology of limestone, sandstone and granite and is home to more than 700 plant species and 200 bird species."
	},
	{
		urlThumb:"thumbs/09 small.jpg",
		urlFull:"photos/09 large.jpg",
		copyright:"Jordan's jewels",
		description:"<strong>Changing terrain:</strong>The trail towards Petra plunges down from the mountains before gaining height again as it crosses several climatic zones."
	},
	{
		urlThumb:"thumbs/10 small.jpg",
		urlFull:"photos/10 large.jpg",
		copyright:"Jordan's jewels",
		description:"<strong>Rock city:</strong>Little Petra sits to the north of Petra and is a similar Nabatean site with buildings carved into the walls of sandstone cliffs."
	},
	{
		urlThumb:"thumbs/11 small.jpg",
		urlFull:"photos/11 large.jpg",
		copyright:"Jordan's jewels",
		description:"<strong>Into the landscape:</strong>Trekking through Petra offers walkers the chance to get close to the spectacular rock formations and colors."
	}
];

let index = 0; // Define a global index to track the active image

const setup = () => {
	let imageNavigator = document.querySelectorAll(".image-navigator>a");
	for (let i = 0; i < imageNavigator.length; i++) {
		imageNavigator[i].addEventListener("click", changeActive);
	}

	let thumbnails = document.querySelector("#thumbnails").lastElementChild;
	for (let i = 0; i < galleryData.length; i++) {
		let image = document.createElement("img");
		image.classList.add("thumbnail");
		image.setAttribute("src", galleryData[i].urlThumb);
		image.setAttribute("alt", `${i} photo`);
		image.addEventListener("click", setAsActiveThumbnail);
		thumbnails.appendChild(image);
	}

	// Set initial active image and info
	updateActiveImage();
};

const changeActive = (event) => {
	event.preventDefault();

	let navLeft = document.querySelector("#image-nav-left");
	let navRight = document.querySelector("#image-nav-right");

	if (event.target === navLeft && index > 0) {
		index--;
	} else if (event.target === navRight && index < galleryData.length - 1) {
		index++;
	}

	updateActiveImage();
};

const setAsActiveThumbnail = (event) => {
	let thumbnails = document.querySelectorAll("#thumbnails img");
	thumbnails.forEach((thumbnail, i) => {
		if (thumbnail === event.target) {
			index = i; // Update the index to match the clicked thumbnail
		}
		thumbnail.classList.remove("activeThumbnail");
	});
	event.target.classList.add("activeThumbnail");

	updateActiveImage();
};

const updateActiveImage = () => {
	// Update the main image
	let activeImg = document.querySelector(".image-navigator>img");
	let currentData = galleryData[index];
	activeImg.setAttribute("src", currentData.urlFull);

	// Update the thumbnails
	let thumbnails = document.querySelectorAll("#thumbnails img");
	thumbnails.forEach((thumbnail, i) => {
		thumbnail.classList.toggle("activeThumbnail", i === index);
	});

	// Update the image info
	changeImageInfo(index);

	// Update the counter
	setCounter();
};

const changeImageInfo = (index) => {
	let copyright = document.querySelector("#copyright");
	let description = document.querySelector("#description");

	copyright.innerHTML = `<p><strong>Photo's: </strong>${galleryData[index].copyright}</p>`;
	description.innerHTML = `<p>${galleryData[index].description}</p>`;
};

const setCounter = () => {
	let counter = document.querySelector("#counter");
	counter.textContent = `${index + 1} of ${galleryData.length}`;
};

window.addEventListener("load", setup);
