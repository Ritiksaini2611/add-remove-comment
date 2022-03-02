"use strict";

// ------------ more options toogle functionality  --------------------------

document
     .querySelector(".more-options-icon")
     .addEventListener("click", function () {
          console.log(22);
          document.querySelector(".more-options-actions").style.display =
               "block";
     });

//---------- for adjustment of fieldarea----------------

function autoGrow(oField) {
     if (oField.scrollHeight > oField.clientHeight) {
          oField.style.height = oField.scrollHeight + "px";
     } else if (oField.scrollHeight < oField.clientHeight) {
          oField.style.height = oField.style.height - "px";
     }
}

document.querySelector(".add-button").addEventListener("click", function () {
     var newCmnt = document.querySelector(".input-cmnt").value;

     if (!newCmnt) {
          alert("Please write a comment");
     } else {
          var nowOldCmnt = newCmnt;
          console.log(nowOldCmnt);

          document.querySelector(".input-cmnt").value = "";
     }
});

//------------------- login form onclick opening function ----------------------

function loginForm() {
     document.querySelector(".login-form").style.marginRight = "0";
}

function closeLogin() {
     document.querySelector(".login-form").style.marginRight = "-100%";
}

function signupForm() {
     document.querySelector(".user-signup").style.display = "block";
     document.querySelector(".login-form").style.marginRight = "initial";
}
