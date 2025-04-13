document.addEventListener("DOMContentLoaded", function () {
  const terms = document.querySelector("#terms-link");
  const privacy = document.querySelector("#privacy-link");
  const cookie = document.querySelector("#cookie-link");

  // Function to create and display the modal
  function createPolicyModal(content) {
    // Remove existing modal if present
    const existingModal = document.getElementById("policy-modal");
    if (existingModal) existingModal.remove();

    // Create the modal container
    const modal = document.createElement("div");
    modal.setAttribute("id", "policy-modal");
    modal.classList.add("activate");

    // Add the modal content
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" onclick="closePolicyModal()">×</button>
        <section class="policy-popup">
          ${content}
        </section>
      </div>
    `;

    // Append the modal to the body
    document.body.appendChild(modal);
  }

  // Function to close the modal
  function closePolicyModal() {
    const modal = document.getElementById("policy-modal");
    if (modal) modal.remove();
  }

  // Load Terms of Service
  function loadTermsPage() {
    const termsContent = `
     <section>
    <h1>Terms of Service</h1>
    <p>Last updated: April 11, 2025</p>

    <p>Welcome to <strong>Multimedia News</strong>. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.</p>
  </section>

  <section>
    <h2>1. Use of the Site</h2>
    <p>Multimedia News provides users with access to a wide range of multimedia news content including articles, videos, and live updates. You agree to use the site for lawful purposes only and in a way that does not infringe the rights of others or restrict their use and enjoyment of the site.</p>
  </section>

  <section>
    <h2>2. Intellectual Property</h2>
    <p>All content on this site, including text, images, video, and graphics, is the property of Multimedia News or its content providers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or otherwise exploit the content without our written permission.</p>
  </section>

  <section>
    <h2>3. User Conduct</h2>
    <p>Users may not post or transmit any content that is harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable. Multimedia News reserves the right to remove such content and ban offending users from the site.</p>
  </section>

  <section>
    <h2>4. Third-Party Links</h2>
    <p>Our website may contain links to third-party websites. These links are provided for your convenience and do not signify endorsement. We are not responsible for the content or practices of these third-party sites.</p>
  </section>

  <section>
    <h2>5. Disclaimer</h2>
    <p>The information on Multimedia News is provided "as is" without warranties of any kind. While we strive to provide accurate and up-to-date content, we make no guarantees regarding its completeness or reliability.</p>
  </section>

  <section>
    <h2>6. Limitation of Liability</h2>
    <p>Multimedia News shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use our website or services.</p>
  </section>

  <section>
    <h2>7. Changes to These Terms</h2>
    <p>We reserve the right to update or modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of the site after changes constitutes your acceptance of the new terms.</p>
  </section>

  <section>
    <h2>8. Contact Us</h2>
    <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@multimedianews.com">support@multimedianews.com</a>.</p>
  </section>

    `;
    createPolicyModal(termsContent);
  }

  // Load Privacy Policy
  function loadPrivacyPage() {
    const privacyContent = `
      <section>
    <h1>Privacy Policy</h1>
    <p>Last updated: April 11, 2025</p>

    <p>
      At <strong>Multimedia News</strong>, we value your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website.
    </p>
  </section>

  <section>
    <h2>1. Information We Collect</h2>
    <p>
      We may collect personal information such as your name, email address, and IP address when you use our site, subscribe to our newsletters, or contact us. We also collect non-personal data such as browser type, operating system, and browsing behavior through cookies and analytics tools.
    </p>
  </section>

  <section>
    <h2>2. How We Use Your Information</h2>
    <p>
      The information we collect is used to:
      <ul>
        <li>Provide and maintain our services</li>
        <li>Improve user experience and website performance</li>
        <li>Send newsletters or updates (if subscribed)</li>
        <li>Respond to inquiries and customer support requests</li>
      </ul>
    </p>
  </section>

  <section>
    <h2>3. Cookies and Tracking Technologies</h2>
    <p>
      We use cookies to enhance your experience, analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings.
    </p>
  </section>

  <section>
    <h2>4. Sharing Your Information</h2>
    <p>
      We do not sell or rent your personal information to third parties. We may share your data with trusted partners who assist in operating our website or servicing you, as long as those parties agree to keep this information confidential.
    </p>
  </section>

  <section>
    <h2>5. Data Security</h2>
    <p>
      We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
    </p>
  </section>

  <section>
    <h2>6. Your Rights</h2>
    <p>
      You have the right to access, correct, or delete your personal data. You may also object to certain processing activities or request data portability. To exercise these rights, contact us at the email below.
    </p>
  </section>

  <section>
    <h2>7. Third-Party Links</h2>
    <p>
      Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those websites. We encourage you to read their privacy policies.
    </p>
  </section>

  <section>
    <h2>8. Children's Privacy</h2>
    <p>
      Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected such data, we will take steps to delete it.
    </p>
  </section>

  <section>
    <h2>9. Changes to This Policy</h2>
    <p>
      We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of the site after changes indicates your acceptance of the new policy.
    </p>
  </section>

  <section>
    <h2>10. Contact Us</h2>
    <p>
      If you have any questions or concerns about this Privacy Policy, please contact us at
      <a href="mailto:support@multimedianews.com">support@multimedianews.com</a>.
    </p>
  </section>
    `;
    createPolicyModal(privacyContent);
  }

  // Load Cookie Policy
  function loadCookiePage() {
    const cookieContent = `
      <section>
    <h1>Cookie Policy</h1>
    <p>Last updated: April 11, 2025</p>

    <p>
      This Cookie Policy explains how <strong>Multimedia News</strong> uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control their use.
    </p>
  </section>

  <section>
    <h2>1. What Are Cookies?</h2>
    <p>
      Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the site owners.
    </p>
  </section>

  <section>
    <h2>2. How We Use Cookies</h2>
    <p>
      We use cookies to:
      <ul>
        <li>Ensure the website functions properly</li>
        <li>Analyze how users interact with our site</li>
        <li>Remember user preferences and settings</li>
        <li>Deliver relevant content and ads</li>
      </ul>
    </p>
  </section>

  <section>
    <h2>3. Types of Cookies We Use</h2>
    <p>
      <strong>Essential Cookies:</strong> Required for basic functionality such as navigation and access to secure areas.<br />
      <strong>Performance Cookies:</strong> Help us understand how visitors interact with the site by collecting information anonymously.<br />
      <strong>Functionality Cookies:</strong> Remember choices you make to improve your experience.<br />
      <strong>Advertising Cookies:</strong> Used to deliver ads more relevant to you and your interests.
    </p>
  </section>

  <section>
    <h2>4. Third-Party Cookies</h2>
    <p>
      We may allow third-party services to place cookies on your device to help deliver content and ads, analyze site traffic, and improve user experience. These cookies are subject to the privacy policies of the respective third parties.
    </p>
  </section>

  <section>
    <h2>5. Managing Cookies</h2>
    <p>
      You can manage or delete cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Disabling cookies may affect the functionality of the website.
    </p>
  </section>

  <section>
    <h2>6. Changes to This Cookie Policy</h2>
    <p>
      We may update this Cookie Policy occasionally. Any changes will be posted on this page with a new revision date. Your continued use of the site signifies your agreement to the updated policy.
    </p>
  </section>

  <section>
    <h2>7. Contact Us</h2>
    <p>
      If you have any questions about our use of cookies or this Cookie Policy, please contact us at
      <a href="mailto:support@multimedianews.com">support@multimedianews.com</a>.
    </p>
  </section>
    `;
    createPolicyModal(cookieContent);
  }

  // Attach event listeners to the links
  if (terms) {
    terms.addEventListener("click", (e) => {
      e.preventDefault();
      loadTermsPage();
    });
  }

  if (privacy) {
    privacy.addEventListener("click", (e) => {
      e.preventDefault();
      loadPrivacyPage();
    });
  }

  if (cookie) {
    cookie.addEventListener("click", (e) => {
      e.preventDefault();
      loadCookiePage();
    });
  }
});

function createPolicyModal(content) {
  // Remove existing modal if present
  const existingModal = document.getElementById("policy-modal");
  if (existingModal) existingModal.remove();

  // Create the modal container
  const modal = document.createElement("div");
  modal.setAttribute("id", "policy-modal");
  modal.classList.add("activate");

  // Add the modal content
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close">×</button>
      <section class="policy-popup">
        ${content}
      </section>
    </div>
  `;

  // Append the modal to the body
  document.body.appendChild(modal);

  // Attach event listener to the close button
  const closeButton = modal.querySelector(".modal-close");
  closeButton.addEventListener("click", closePolicyModal);

  // Close modal when clicking on the background (policy-modal)
  modal.addEventListener("click", (event) => {
    if (event.target.id === "policy-modal") {
      closePolicyModal();
    }
  });
}

// Function to close the modal
function closePolicyModal() {
  const modal = document.getElementById("policy-modal");
  if (modal) modal.remove();
}