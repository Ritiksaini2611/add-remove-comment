"use strict";

var loggedin = true;
let mains = document.querySelector(".your-comment");

// ------------ more options toogle functionality  --------------------------

// document
//    .querySelector(".more-options-icon")
//    .addEventListener("click", function () {
//       console.log(22);
//       document.querySelector(".more-options-actions").style.display = "block";
//    });

//---------- for adjustment of fieldarea----------------

function autoGrow(oField) {
   if (oField.scrollHeight > oField.clientHeight) {
      oField.style.height = oField.scrollHeight + "px";
   } else if (oField.scrollHeight < oField.clientHeight) {
      oField.style.height = oField.style.height - "px";
   }
}

function cmntReply() {
   var newCmnt = document.querySelector(".input-cmnt").value;

   if (!newCmnt) {
      alert("Please write a comment");
   } else {
      if (!loggedin) {
         alert("you have to login to make a comment");
      } else {
         let div = document.createElement("div");
         let y = document.querySelector(".input-cmnt");

         mains.appendChild(div);
         div.className = "same-prop-new-cmnt";

         let node = document.querySelector(".details");
         let clone = node.cloneNode(true);

         div.appendChild(clone);

         //     let text = document.createTextNode("CreateElement example");
         //     div.appendChild(text);

         let h2 = document.createElement("p");
         h2.className = "text";
         h2.textContent = y.value;
         div.appendChild(h2);
         y.value = "";
      }
   }
}

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

//replying on the comment of a user that already exists and registered

function reply() {
   document.querySelector(".reply1").classList.add("show");
}
function cancel() {
   document.querySelector(".reply1").classList.remove("show");
}

//you writing a new comment and deleting
