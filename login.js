// Google OAuth Client ID
// Replace this with your own Google Cloud OAuth Client ID

const GOOGLE_CLIENT_ID = "YOUR_CLIENT_ID.apps.googleusercontent.com";


const loginButton = document.getElementById("loginButton");
const accountBox = document.getElementById("accountBox");



loginButton.onclick = function () {

    if (GOOGLE_CLIENT_ID.startsWith("YOUR")) {

        accountBox.innerHTML =
        `
        <h3>Google Login Setup Needed</h3>
        <p>
        Add your Google OAuth Client ID inside login.js.
        </p>
        `;

        return;

    }


    google.accounts.id.initialize({

        client_id: GOOGLE_CLIENT_ID,

        callback: handleLogin

    });


    google.accounts.id.prompt();

};





function handleLogin(response) {


    const data = JSON.parse(

        atob(
            response.credential.split(".")[1]
        )

    );


    localStorage.setItem(
        "studioUser",
        JSON.stringify(data)
    );



    showUser(data);

}





function showUser(user) {


    accountBox.innerHTML =

    `
    <img 
    src="${user.picture}" 
    width="70"
    style="border-radius:50%"
    >

    <h3>
    ${user.name}
    </h3>

    <p>
    ${user.email}
    </p>

    <button onclick="logout()">
    Logout
    </button>
    `;


}





function logout() {

    localStorage.removeItem("studioUser");


    accountBox.innerHTML =
    `
    <p>
    Not signed in.
    </p>
    `;

}




// Load previous login

const savedUser =
localStorage.getItem("studioUser");


if (savedUser) {

    showUser(
        JSON.parse(savedUser)
    );

}
