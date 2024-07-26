
import { auth, signInWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector("#login-form");
const msg = document.querySelector("#msg");


form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const email = event.target.children[0].value;
    const password = event.target.children[1].value;

    const result = await signInWithEmailAndPassword(auth, email, password);
    if (result) {
        msg.innerHTML = "Successfully Login";

      // Show alert for successful login
    //   alert("Successfully logged in!");
    } else {
      alert("Login failed. Please check your email and password.");
    }

    console.log(result);
  } catch (error) {
    msg.innerHTML = "incorrect e-mail or password";
  }
});
