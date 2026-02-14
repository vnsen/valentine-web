const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const music = document.getElementById("bg-music");

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    music.play();

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});


noBtn.addEventListener("mouseover", () => {
    const min = 120;
    const max = 250;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});


const photoStacks = document.querySelectorAll(".photo-stack");

yesBtn.addEventListener("click", () => {

    title.style.opacity = "0";

    setTimeout(() => {
        title.textContent = "MISSION VALENTINE: COMPLETED!";
        title.style.opacity = "1";
    }, 300);

    document.querySelector(".letter-window").classList.add("final");

    buttons.classList.add("fade-out");
    document.querySelectorAll(".cat").forEach(cat => {
        cat.classList.add("fade-out");
    });

    setTimeout(() => {
    buttons.style.display = "none";
    document.querySelectorAll(".cat").forEach(cat => {
        cat.style.display = "none";
    });
}, 600);

    finalText.style.display = "block";
    const photoGroup = document.getElementById("photo-group");
photoGroup.style.display = "flex";

setTimeout(() => {
    photoStacks.forEach(stack => {
        stack.style.opacity = "1";
    });
}, 50);





    const relationshipTime = document.getElementById("relationship-time");
    relationshipTime.style.display = "block";

    function updateRelationshipTime() {
    const startDate = new Date("2024-09-17");
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    relationshipTime.textContent =
        `Time since our timeline merged: ${years} year, ${months} months, ${days} days`;
}
    updateRelationshipTime();
    setInterval(updateRelationshipTime, 1000);

    const photos = document.querySelectorAll(".stack-photo");

    photos.forEach(photo => {

        const rotation = (Math.random() * 10) - 5;
        const offsetX = (Math.random() * 10) - 5;
        const offsetY = (Math.random() * 10) - 5;

        photo.style.transform =
            `translate(-50%, -50%) 
             translate(${offsetX}px, ${offsetY}px)
             rotate(${rotation}deg)`;

        photo.addEventListener("mouseenter", () => {

            const distance = 290;
            const angle = Math.random() * Math.PI * 2;

            const moveX = Math.cos(angle) * distance;
            const moveY = Math.sin(angle) * distance;
            const rotation = (Math.random() * 30) - 15;

            photo.style.transform =
                `translate(-50%, -50%) 
                 translate(${moveX}px, ${moveY}px)
                 rotate(${rotation}deg)`;
        });

        photo.addEventListener("mouseleave", () => {

            photo.style.transform =
                `translate(-50%, -50%) 
                 translate(${offsetX}px, ${offsetY}px)
                 rotate(${rotation}deg)`;
        });

    });

});



