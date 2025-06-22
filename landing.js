// Get references to the popup and buttons
const popup = document.querySelector('.pop-up');
const closeButton = document.querySelector('.close-button');
const headerLinks = document.querySelectorAll('.header-links-ele');

// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'popup-overlay';
overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
    display: none;
`;
document.body.appendChild(overlay);

// Function to show the popup
function showPopup() {
    overlay.style.display = 'block';
    popup.style.display = 'flex';
    popup.style.position = 'fixed';
    popup.style.flexDirection = 'column';
    popup.style.zIndex = '999';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
}

// Function to hide the popup
function hidePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

// Add event listeners to Sign up and Login buttons
headerLinks.forEach(link => {
    const linkText = link.textContent.trim();
    if (linkText === 'Sign up' || linkText === 'Login') {
        link.addEventListener('click', showPopup);
    }
});

// Add event listener to close button
closeButton.addEventListener('click', hidePopup);

// Close popup when clicking on overlay
overlay.addEventListener('click', hidePopup);

// Optional: Close popup when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.style.display === 'flex') {
        hidePopup();
    }
});