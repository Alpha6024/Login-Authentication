const block1 = document.getElementById("1block");
const block2 = document.getElementById("2block");
const block3 = document.getElementById("3block");
const block4 = document.getElementById("4block");
const block5 = document.getElementById("5block");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const username = document.getElementById("username");
const key = document.getElementById("key");
const email = document.getElementById("email");
const epass = document.getElementById("epass");
const newuser = document.getElementById("newuser");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const button = document.getElementById("mybutton");
const msg = document.getElementById("msg");
const profile = document.getElementById("profile");
var arrayuser = [];
var arraypass = [];

btn.addEventListener("click", (e) => {
   let theusername = username.value;
   let thekey = key.value;
   let state = 0;
   if (theusername == "" || thekey == "") {
      alert("please enter the data");
   } else {
      let length1 = arrayuser.length;
      console.log(length1);
      for (let i = 0; i < length1; i++) {
         if (arrayuser[i] == theusername) {
            if (arraypass[i] == thekey) {
               if (block1.style.display == "block") {
                  block1.style.display = "none";
                  block5.style.display = "block";
               }
               state++;
            }
         }
      }
      if(state==0){
         alert("account not found");
      }else if(state==1){
         profile.innerText=`welcome ${theusername}`;
         state=0;
      }
   }

});

btn1.addEventListener("click", (e) => {
   if (block1.style.display == "block") {
      block1.style.display = "none";
      block2.style.display = "block";
   }

});

btn2.addEventListener("click", (e) => {
   let theemail = email.value;
   let theepass = epass.value;
   if (theemail == "" || theepass == "") {
      alert("please enter the data");
   } else {
      if (block2.style.display == "block") {
         block2.style.display = "none";
         block3.style.display = "block";
      }
   }

});

button.addEventListener("click", (e) => {
   let thenewuser = newuser.value;
   let thepass1 = pass1.value;
   let thepass2 = pass2.value;
   if (thenewuser == "") {
      alert("please enter username");
   } else {
      if (thepass1 == "" || thepass2 == "") {
         alert("please enter the password");
      } else if (thepass1 == thepass2) {
         arrayuser.push(thenewuser);
         arraypass.push(thepass1);
         console.log(arrayuser,arraypass);
         msg.style.display = "block";
         btn3.style.display = "block";
         button.style.display = "none";
      } else {
         alert("password mismatched");
      }
   }
});

btn3.addEventListener("click", (e) => {
   if (block3.style.display == "block") {
      block3.style.display = "none";
      block4.style.display = "block";
   }
});


btn4.addEventListener("click", (e) => {
   if (block4.style.display == "block") {
      block4.style.display = "none";
      block1.style.display = "block";
      btn3.style.display = "none";
      button.style.display = "block";
      msg.style.display = "none";
   }

});