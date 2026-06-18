// =====================
// BUTTONS
// =====================

const loginBtn = document.querySelector(".login");
const joinBtn = document.querySelector(".join");

loginBtn.addEventListener("click", () => {

    alert("Redirecting to Login Page");

    // window.location.href = "login.html";

});


joinBtn.addEventListener("click", () => {

    alert("Redirecting to Registration Page");

    // window.location.href = "register.html";

});



// =====================
// NEWSLETTER
// =====================

const subscribeBtn = document.querySelector("footer button");

const emailInput = document.querySelector("footer input");


subscribeBtn.addEventListener("click", (e)=>{

    e.preventDefault();

    let email = emailInput.value;


    if(email === ""){

        alert("Please enter your email");

    }

    else{

        alert("Thank you for subscribing!");

        emailInput.value="";

    }

});




// =====================
// SMOOTH SCROLL
// =====================

const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        alert("This section will open soon.");

    });

});




// =====================
// FEATURE CARDS HOVER EFFECT
// =====================

const cards = document.querySelectorAll(".card");


cards.forEach(card=>{


    card.addEventListener("mouseover",()=>{

        card.style.transform = "translateY(-10px)";

        card.style.transition = "0.3s";

    });


    card.addEventListener("mouseout",()=>{

        card.style.transform = "translateY(0)";

    });

});




// =====================
// WHY JOIN US CARDS
// =====================

const whyCards = document.querySelectorAll(".why-card");


whyCards.forEach(card=>{

    card.addEventListener("mouseover",()=>{

        card.style.boxShadow =
        "0 10px 20px rgba(0,0,0,0.2)";

    });



    card.addEventListener("mouseout",()=>{

        card.style.boxShadow = "none";

    });


});




// =====================
// SCROLL ANIMATION
// =====================

window.addEventListener("scroll",()=>{


    const hero = document.querySelector(".hero");


    let scrollPosition = window.scrollY;


    if(scrollPosition > 100){

        hero.style.opacity="0.95";

    }

    else{

        hero.style.opacity="1";

    }


});



console.log("Technology For Progress Cooperative Loaded Successfully");
