const navbar = document.getElementById('journaltime-navbar')
navbar.innerHTML = `
    <div class="journal-left-container">
        <a href="./index.html"><img src="./assets/img/Logo.png" alt="logo"></a>
    </div>

    <div class="journal-right-conatainer">
        <ul class="journal-sidebar">
            <li><a href="./login.html">Login</a></li>
            <button class="go-wep-button"><li><a href="./dashboard.html">Go To Web App</a></li></button>
        </ul>

        <div class="profile-img">
            <a href="./login.html"><img src="./assets/img/Person.png" alt="profile-img"></a>
        </div>
        <div class="exit-img">
            <a href="./dashboard.html"> <img src="./assets/img/Group.png" alt="exit-img"></a>
        </div>
    </div>
`