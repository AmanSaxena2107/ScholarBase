import { auth } from './firebase-config.js';
    import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';

    window.signIn = async function() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            showMessage('Please fill in both email and password', 'error');
            return;
        }

        // In the signIn function, replace the success block:
try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Signed in as:', user.email);
    showMessage(`Successfully signed in as ${user.email}`, 'success');
    
    // Close popup and update UI
    setTimeout(() => {
        closePopupAndUpdateUI();
    }, 300); // Wait 1 second to show success message
    
} catch (error) {
    console.error('Sign in error:', error.message);
    showMessage(`Sign in error: ${error.message}`, 'error');
}

// In the signUp function, replace the success block:
try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Signed up as:', user.email);
    showMessage(`Successfully signed up as ${user.email}`, 'success');
    
    // Close popup and update UI
    setTimeout(() => {
        closePopupAndUpdateUI();
    }, 300); // Wait 1 second to show success message
    
} catch (error) {
    console.error('Sign up error:', error.message);
    showMessage(`Sign up error: ${error.message}`, 'error');
}
    };

    window.signUp = async function() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            showMessage('Please fill in both email and password', 'error');
            return;
        }

        if (password.length < 6) {
            showMessage('Password should be at least 6 characters long', 'error');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('Signed up as:', user.email);
            showMessage(`Successfully signed up as ${user.email}`, 'success');
        } catch (error) {
            console.error('Sign up error:', error.message);
            showMessage(`Sign up error: ${error.message}`, 'error');
        }
    };

    function showMessage(text, type) {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';
        
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }