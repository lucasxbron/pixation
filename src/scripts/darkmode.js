// Check local storage for dark mode preference
const userPrefersDark = localStorage.getItem('darkMode') === 'true';

// Apply the preference if stored
if (userPrefersDark) {
    document.body.classList.add('dark-mode');
}

// Get the button element
const darkModeToggle = document.getElementById('darkModeToggle');

// Add event listener to the button
darkModeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');

    // Save the preference in localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});