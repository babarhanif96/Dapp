

const serverUrl = "https://d9xlzopqxs7u.usemoralis.com:2053/server";
const appId = "jnikRWcV9iai828kuEodhzfaRLvkVACHgZcDH3eX";
Moralis.start({ serverUrl, appId });

window.onload = logOut;


async function login() {
    console.log("enter in login")
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({
        signingMessage: "Log in using Moralis",
      })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
          document.getElementById('connect').style.cssText = 'display: none';
          document.getElementById('disconnect').style.cssText = 'display: block';
          document.getElementById("disconnect").innerHTML= user.get("ethAddress");
          return user
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    

  }
  //console.log("ye hai  user" , user);


  
  async function logOut() {
    await Moralis.User.logOut().then(function(){
        document.getElementById('disconnect').style.cssText = 'display: none';
        document.getElementById('connect').style.cssText = 'display: block';
        //document.getElementById("disconnect").innerHTML= user.get("ethAddress");
    });


    console.log("logged out");
  }
  
   document.getElementById("connect").onclick = login;
  document.getElementById("disconnect").onclick = logOut;


function toggleNav() {

    let mobileNav = document.getElementById('phone');
    let mClosed = document.getElementById('mClosed');
    let mOpened = document.getElementById('mOpened');

    if (!mobileNav.classList.contains('mobileOpened')) {
        mobileNav.classList.toggle('mobileOpened');
        mClosed.style.display = "none";
        mOpened.style.display = "block";

    } else {
        mobileNav.classList.toggle('mobileOpened');
        mClosed.style.display = "block";
        mOpened.style.display = "none";
    }

}
