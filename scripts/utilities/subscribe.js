document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribe-form");
  const emailInput = document.getElementById("subscriber-email");
  const messageDiv = document.getElementById("subscribe-message");

  // Store subscribed emails in localStorage to check for duplicates
  const subscribedEmails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email
    if (!email || !emailRegex.test(email)) {
      messageDiv.textContent = "Please enter a valid email address.";
      messageDiv.style.color = "red";
      return;
    }

    // Check if the email is already subscribed
    if (subscribedEmails.includes(email)) {
      alert("You have already subscribed!");
      return;
    }

    // MailerLite API URL
    const url = `https://assets.mailerlite.com/jsonp/1448913/forms/151505206322922729/subscribe?callback=handleResponse&fields[email]=${encodeURIComponent(email)}&t=${Date.now()}`;

    // Create a script element for JSONP
    const script = document.createElement("script");
    script.src = url;
    script.onerror = () => {
      messageDiv.textContent = "❌ Subscription failed. Please try again later.";
      messageDiv.style.color = "red";
    };
    document.body.appendChild(script);
  });

  // Handle the response from MailerLite
  window.handleResponse = function (response) {
    if (response.success) {
      // Add the email to the subscribed list and save it in localStorage
      subscribedEmails.push(emailInput.value.trim());
      localStorage.setItem("subscribedEmails", JSON.stringify(subscribedEmails));

      alert("🎉 Thanks for subscribing!");
      form.reset();
    } else {
      alert("❌ Subscription failed. Try again.");
    }
  };
});