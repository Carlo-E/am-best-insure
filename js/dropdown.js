// This function reorders the tabs and their contents when the window's width is less than or equal to 991px
// function reorderTabs() {
//     if (window.innerWidth <= 991) {
//       var tabsContainer = document.querySelector('.tabs');

// The for loop goes through all your tabs
// for (var i = 1; i <= 5; i++) {
//   var label = document.querySelector('.tab-label-' + i);
//   var content = document.querySelector('.tab-content-' + i);

// Inserts the label and its content at the end of the container
//       tabsContainer.appendChild(label.parentElement);
//     }
//   }
// }

// Calls the function to reorder the tabs and contents when the page is loaded
// window.onload = reorderTabs;

// Also calls the function when the window is resized
// window.onresize = reorderTabs;

const labels = document.querySelectorAll(".accordion-item__label");
const tabs = document.querySelectorAll(".accordion-tab");

function toggleShow() {
	const target = this;
	const item = target.classList.contains("accordion-tab")
		? target
		: target.parentElement;
	const group = item.dataset.actabGroup;
	const id = item.dataset.actabId;

	tabs.forEach(function (tab) {
		if (tab.dataset.actabGroup === group) {
			if (tab.dataset.actabId === id) {
				tab.classList.add("accordion-active");
			} else {
				tab.classList.remove("accordion-active");
			}
		}
	});

	labels.forEach(function (label) {
		const tabItem = label.parentElement;

		if (tabItem.dataset.actabGroup === group) {
			if (tabItem.dataset.actabId === id) {
				tabItem.classList.add("accordion-active");
			} else {
				tabItem.classList.remove("accordion-active");
			}
		}
	});
}

labels.forEach(function (label) {
	label.addEventListener("click", toggleShow);
});

tabs.forEach(function (tab) {
	tab.addEventListener("click", toggleShow);
});
