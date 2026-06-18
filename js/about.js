


// ===========================
// PAGE LOADED MESSAGE
// ===========================

window.addEventListener("load", () => {

    console.log("About Page Loaded Successfully");

});



// ===========================
// JOIN NOW BUTTON
// ===========================

const joinBtn = document.querySelector(".cta button");

joinBtn.addEventListener("click", () => {

    alert("Welcome! Redirecting to Membership Page.");

    // window.location.href = "register.html";

});




// ===========================
// LEADERS HOVER EFFECT
// ===========================

const leaders = document.querySelectorAll(".leader");


leaders.forEach((leader)=>{

    leader.addEventListener("mouseover", ()=>{

        leader.style.transform = "scale(1.05)";

        leader.style.transition = "0.3s";

    });



    leader.addEventListener("mouseout", ()=>{

        leader.style.transform = "scale(1)";

    });

});




// ===========================
// VALUES HOVER EFFECT
// ===========================

const values = document.querySelectorAll(".value");


values.forEach((value)=>{


    value.addEventListener("mouseover", ()=>{


        value.style.backgroundColor = "#D71920";

        value.style.color = "white";

        value.style.transition = "0.3s";


    });



    value.addEventListener("mouseout", ()=>{


        value.style.backgroundColor = "#FFD700";

        value.style.color = "black";

    });

});




// ===========================
// MISSION AND VISION CARDS
// ===========================

const boxes = document.querySelectorAll(".box");


boxes.forEach((box)=>{


    box.addEventListener("mouseover", ()=>{


        box.style.boxShadow =
        "0 10px 25px rgba(0,0,0,0.2)";

    });



    box.addEventListener("mouseout", ()=>{


        box.style.boxShadow = "none";

    });


});




// ===========================
// SMOOTH SCROLL FOR NAVIGATION
// ===========================

const links = document.querySelectorAll("nav a");


links.forEach((link)=>{


    link.addEventListener("click",(e)=>{

        console.log(link.innerText + " clicked");

    });

});

// ===========================
// SCROLL EFFECT ON HERO SECTION
// ===========================

window.addEventListener("scroll", ()=>{


    const hero = document.querySelector(".about-hero");


    if(window.scrollY > 50){

        hero.style.opacity = "0.9";

    }

    else{

        hero.style.opacity = "1";

    }

});
