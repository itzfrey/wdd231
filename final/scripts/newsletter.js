document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#newsletter-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = form.email.value.trim();

        if (email) {
            // Save email to localStorage
            localStorage.setItem("newsletterEmail", email);

            // Replace form with a thank-you message
            form.innerHTML = `<p class="thank-you">Thanks for subscribing, ${email}!</p>`;

            // Optional: hide thank-you after a few seconds
            setTimeout(() => {
                form.innerHTML = `
          <input type="email" name="email" placeholder="Enter your email address" required class="newsletter-input">
          <button type="submit" class="newsletter-btn">Subscribe</button>
        `;
            }, 2000);
        }
    });
});
