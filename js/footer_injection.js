const footer = document.getElementById('footer-sec')
footer.innerHTML = `
    <div class="container">
        <div class="left-column">
          <div class="logo">
            <img src="./assets/img/Logo.png" alt="Journal Time">
          </div>
          <div class="address">
            <p id="address-text">Address :</p>
            <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
          </div>
          <div class="contact">
            <p id="contact-text">Contact :</p>
            <p>(270) 555-0117</p>
            <p>info@example.com</p>
          </div>
          <div class="social-links">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div class="right-column">
          <div class="link-container">
            <div class="link-row">
              <div id="column-text" class="link-item">Journal Time</div>
              <div id="column-text" class="link-item">Information</div>
            </div>
            <div class="link-row">
              <div class="link-item">Our Story</div>
              <div class="link-item">Conditions</div>
            </div>
            <div class="link-row">
              <div class="link-item">Privacy Policy</div>
              <div class="link-item">Returns Policy</div>
            </div>
          </div>
        </div>
    </div>
    <div class="footer">
        <div class="copyright">
            &copy;2024, SokhaNeadh_Rith All right reserved.
        </div>
        <div class="policy-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
    </div>
`