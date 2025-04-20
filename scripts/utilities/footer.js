function loadFooter() {
  const footerHTML = `
      
        <div class="footer-container">
        

       <section class="newsletter">
  <h3>Subscribe To Our Newsletter</h3>
  <form id="subscribe-form">
    <input type="email" id="subscriber-email" placeholder="Enter your email" />
    <button type="submit">Subscribe</button>
    <div id="subscribe-message"></div>
  </form>

          <div class="social">
            <a href="https://www.facebook.com/profile.php?id=100083489325493" title="Facebook" target="_blank"
              ><i
                class="facebook fa-brands fa-facebook fa-xl social-links"
                style="color: #d5f9f9"
              ></i
            ></a>
            <a href="https://www.instagram.com/professor_1o1/" title="Instagram" target="_blank"
              ><i
                class="instagram fa-brands fa-instagram fa-xl social-links"
                style="color: #e70dca"
              ></i
            ></a>
            <a href="https://x.com/professor_1o1?s=21" title="X-formerly-twttier" target="_blank"
              ><i
                class="fa-solid fa-xmark fa-xl social-links"
                style="color: #ffffff"
              ></i
            ></a>
            <a href="https://www.youtube.com/@Professor_1o1" title="YouTube" target="_blank"
              ><i
                class="fa-brands fa-youtube fa-xl social-links"
                style="color: #ff0000"
              ></i
            ></a>
          </div>
        </section>
      </div>

      <div class="policy">
        <ul class="legal-pages">

         <li><a href="#" id="terms-link">Terms of Service</a></li>
         <li><a href="#" id="privacy-link">Privacy Policy</a></li>
         <li><a href="#" id="cookie-link">Cookie Policy</a></li>
        
         </ul>


        <div class="copyright">
          <p>Multimedia News &copy;, All rights reserved!</p>
        </div>
      </div>

        <div id="policy-modal" class="modal hidden"></div>
        
      
    `;
  document.getElementById("site-footer").innerHTML = footerHTML;
}

document.addEventListener("DOMContentLoaded", function () {
  loadFooter();
});
