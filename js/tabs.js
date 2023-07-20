// First, get all tab switches in an array
// var tabSwitches = Array.from(document.querySelectorAll('.tab-switch'));

// function adjustTabsHeight() {
  // Get the .tabs div
  // var tabs = document.querySelector('.tabs');
  // Reset the height of .tabs
  // tabs.style.height = 'auto';

  // Loop through each tab switch
  // for(var i = 0; i < tabSwitches.length; i++) {
  //   var tabSwitch = tabSwitches[i];

    // If this tab switch is checked
    // if(tabSwitch.checked) {
      // Get the associated .tab-content div
      // var tabContent = tabSwitch.parentNode.querySelector('.tab-content');
  
      // Set the height of .tabs to the height of the .tab-content
//       tabs.style.height = tabContent.offsetHeight + 'px';
//       break;
//     }
//   }
// }

// Run the function initially
// adjustTabsHeight();

// Run the function whenever a tab switch is clicked
// tabSwitches.forEach(function(tabSwitch) {
//   tabSwitch.addEventListener('change', adjustTabsHeight);
// });

// Run the function whenever the window is resized
// window.addEventListener('resize', adjustTabsHeight);


//new JS

function changeTab(tabIndex) {
  const buttons = Array.from(document.querySelectorAll('.tab-button'));
  const contents = Array.from(document.querySelectorAll('.tab-content'));

  buttons.forEach((button, index) => {
    if (index === tabIndex) {
      button.classList.add('active');
      contents[index].classList.add('active');
    } else {
      button.classList.remove('active');
      contents[index].classList.remove('active');
    }
  });
}

// Initialize the first tab as active
changeTab(0);
