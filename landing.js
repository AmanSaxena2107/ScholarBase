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

// // Function to update popup title
// function updatePopupTitle(title) {
    
// }

// Function to show the popup
function showPopup(title) {
    overlay.style.display = 'block';
    popup.style.display = 'flex';
    const popupTitle = document.getElementById('popup-title');
    if (popupTitle) {
        popupTitle.textContent = title;
    }
}

// Function to hide the popup
function hidePopup() {
    popup.style.display = 'none';
    if(overlay){
        overlay.style.display = 'none';  // Use the global overlay variable
    }
    
    // Clear form fields when closing
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const messageDiv = document.getElementById('message');
    
    if (emailInput) emailInput.value = '';
    if (passwordInput) passwordInput.value = '';
    if (messageDiv) {
        messageDiv.style.display = 'none';
        messageDiv.textContent = '';
        messageDiv.className = 'message';
    }
}
// Add event listeners to Sign up and Login buttons
headerLinks.forEach(link => {
    const linkText = link.textContent.trim();
    if (linkText === 'Sign up') {
        link.addEventListener('click', () => {
            showPopup('Sign Up');
        });
    } else if (linkText === 'Login') {
        link.addEventListener('click', () => {
            showPopup('Log In');
        });
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

// Hero slider functionality
const slideRack = document.querySelector('.slide-rack');
const navButtons = document.querySelectorAll('.nav-button');
let currentSlide = 1;

// Function to show specific slide
function showSlide(slideNumber) {
    const translateX = (slideNumber - 1) * -100;
    slideRack.style.transform = `translateX(${translateX}vw)`;
    
    // Update nav button states
    navButtons.forEach((button, index) => {
        if (index + 1 === slideNumber) {
            button.style.backgroundColor = 'white';
        } else {
            button.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        }
    });
    
    currentSlide = slideNumber;
}

// Add event listeners to navigation buttons
navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showSlide(index + 1);
    });
});

// Initialize slider
if (navButtons.length > 0) {
    showSlide(1);
}

// Auto-slide functionality (optional)
setInterval(() => {
    const nextSlide = currentSlide === navButtons.length ? 1 : currentSlide + 1;
    showSlide(nextSlide);
}, 5000); // Change slide every 5 seconds

// Form validation helper
function validateForm() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!email || !password) {
        return { isValid: false, message: 'Please fill in both email and password' };
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { isValid: false, message: 'Please enter a valid email address' };
    }
    
    return { isValid: true };
}

// Enhanced sign in function that works with the popup
window.signInPopup = function() {
    const validation = validateForm();
    if (!validation.isValid) {
        showMessage(validation.message, 'error');
        return;
    }
    
    // Call the original signIn function from app.js
    if (typeof window.signIn === 'function') {
        window.signIn();
    }
}

// Enhanced sign up function that works with the popup
window.signUpPopup = function() {
    const validation = validateForm();
    if (!validation.isValid) {
        showMessage(validation.message, 'error');
        return;
    }
    
    const password = document.getElementById('password').value.trim();
    if (password.length < 6) {
        showMessage('Password should be at least 6 characters long', 'error');
        return;
    }
    
    // Call the original signUp function from app.js
    if (typeof window.signUp === 'function') {
        window.signUp();
    }
}

// Message display function (if not already defined in app.js)
function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    if (messageDiv) {
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';
        
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
}

// Function to close popup and update UI after successful login
window.closePopupAndUpdateUI = function(){
    hidePopup();
    
    // Replace Sign up and Login with profile icon
    const headerLinks = document.querySelector('.header-links');
    if (headerLinks) {
        // Remove existing Sign up and Login elements
        const signupLink = Array.from(headerLinks.children).find(link => 
            link.textContent.trim() === 'Sign up'
        );
        const loginLink = Array.from(headerLinks.children).find(link => 
            link.textContent.trim() === 'Login'
        );
        
        if (signupLink) signupLink.remove();
        if (loginLink) loginLink.remove();
        
        // Add profile icon
        const profileIcon = document.createElement('li');
        profileIcon.className = 'header-links-ele';
        profileIcon.id = 'profile-icon';
        profileIcon.innerHTML = `
            <img src="user.jpg" alt="user" class="header-links-ele">
            <ul>
                <li onclick="logout()">Logout</li>
                <li onclick="showProfile()">Profile</li>
            </ul>
        `;
        headerLinks.appendChild(profileIcon);
    }
}

// Logout function
window.logout = function() {
    // You can add Firebase signOut logic here if needed
    location.reload(); // Simple reload to reset the page
}

// Profile function (placeholder)
window.showProfile = function() {
    alert('Profile functionality to be implemented');
} 