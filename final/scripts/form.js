const form = document.getElementById('contactForm');
const dialog = document.getElementById('thankYouDialog');
const closeBtn = document.getElementById('closeDialog');
const userNameSpan = document.getElementById('userName');
const firstNameInput = document.getElementById('firstName');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent real submission

    // Get first name and capitalize first letter
    const firstName = firstNameInput.value.trim();
    const displayName = firstName ?
        firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() :
        "there";

    // Insert name into thank-you message
    userNameSpan.textContent = displayName;

    // Show dialog
    dialog.classList.add('active');

    // Reset form fields
    form.reset();
});

closeBtn.addEventListener('click', () => {
    dialog.classList.remove('active');
});
