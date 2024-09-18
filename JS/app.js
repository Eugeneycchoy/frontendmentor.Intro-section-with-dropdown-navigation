// Grab the necessary elements
const btnFeatures = document.querySelector('#features');
const featuresDropdown = document.querySelector('.features-dropdown');

const btnCompany = document.querySelector('#company');
const companyDropdown = document.querySelector('.company-dropdown');

// Add event listeners
// When the Features button is clicked
btnFeatures.addEventListener('click', (e) => {
  e.stopPropagation(); // Stop the click from bubbling up to the document
  openDropDown(featuresDropdown);
});

btnFeatures.addEventListener('mouseleave', (e) => {
  e.stopPropagation();
  closeAllDropdowns();
});

// When the Company button is clicked
btnCompany.addEventListener('click', (e) => {
  e.stopPropagation(); // Stop the click from bubbling up to the document
  openDropDown(companyDropdown);
});

btnCompany.addEventListener('mouseleave', (e) => {
  e.stopPropagation();
  closeAllDropdowns();
});

// Close dropdowns when the mouse leaves the dropdown area
featuresDropdown.addEventListener('mouseleave', () => {
  closeDropdown(featuresDropdown);
});

companyDropdown.addEventListener('mouseleave', () => {
  closeDropdown(companyDropdown);
});

// Close dropdowns when clicking anywhere outside the dropdowns/buttons
document.addEventListener('click', (e) => {
  // Close if clicked outside the dropdowns and buttons
  if (
    !featuresDropdown.contains(e.target) &&
    !btnFeatures.contains(e.target) &&
    !companyDropdown.contains(e.target) &&
    !btnCompany.contains(e.target)
  ) {
    closeAllDropdowns();
  }
});

// Functions
function openDropDown(element) {
  // Close other dropdowns first
  closeAllDropdowns();

  // Show the clicked dropdown
  element.classList.remove('hidden');
}

function closeDropdown(element) {
  // Hide the specific dropdown
  element.classList.add('hidden');
}

function closeAllDropdowns() {
  // Hide both dropdowns
  featuresDropdown.classList.add('hidden');
  companyDropdown.classList.add('hidden');
}
