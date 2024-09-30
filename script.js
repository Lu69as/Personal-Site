if (localStorage.getItem("color") == "moon")
    document.body.classList.add("dark-mode");

let checkLang = setInterval(() => {
    if (window.location.href.includes("no|en") || document.querySelector("#about > p").innerHTML[0, 1] == "f")
        document.body.classList.add("english");
    console.log("lol")
}, 200);
setTimeout(() => { clearInterval(checkLang); }, 1100);

document.querySelectorAll("nav .lang a").forEach((e) => {
    e.addEventListener("click", () => { setTimeout(() => { location.reload(); }, 50); })
})

document.querySelectorAll("nav .colorMode svg").forEach((e) => {
    e.addEventListener("click", () => { 
        if (e.classList[0] == "moon") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("color", "moon");
        }
        else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("color", "sun");
        }
    })
})

function appearItem() {
    let list = document.querySelectorAll("article > h1, .item, .desc, .skills > div, #about > p :is(.btn1, .btn2)");
    list.forEach((e) => {
        if (e.getBoundingClientRect().y < (window.innerHeight - 75)) {
            let index = Array.from(list).findIndex(elem => elem.innerHTML == e.innerHTML);
            let siblingCount = 0;

            for (let i = index; i > 0; i--)
                if (list[i].getBoundingClientRect().y == e.getBoundingClientRect().y)
                    siblingCount++;

            setTimeout(() => {
                e.style.transform = "translateY(0px)";
                e.style.opacity = "1";
            }, siblingCount * 100);
        }
        else {
            e.style.transform = "translateY(35px)";
            e.style.opacity = "0";
        }
    })
} appearItem();


for(let i = 0; i < 2; i++)
    document.querySelectorAll("#home .readmore span").forEach((e) => { e.parentElement.append(e.cloneNode(e, true)); })

for(let i = 0; i < document.querySelectorAll("#home .readmore span").length; i++)
    document.querySelectorAll("#home .readmore span")[i].style.transform = `rotate(${i * 11 + window.scrollY / 3}deg)`;

document.addEventListener("scroll", () => {
    setTimeout(appearItem, 200);
    appearItem();

    for(let i = 0; i < document.querySelectorAll("#home .readmore span").length; i++)
        document.querySelectorAll("#home .readmore span")[i].style.transform = `rotate(${i * 11 + window.scrollY / 3}deg)`;
    
    document.querySelectorAll("section article").forEach((e) => {
        if (e.getBoundingClientRect().y < (window.innerHeight - 200)) {
            document.querySelectorAll("nav a").forEach((a) => { a.classList.remove("active") });
            document.querySelector("nav a." + e.id).classList.add("active")
        }
    })

})

document.querySelector("nav a.home").classList.add("active");