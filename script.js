const learnBtn = document.querySelector(".btn[href='#testimoni']");
if (learnBtn) {
    learnBtn.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector("#testimoni");
        if (target) {
            target.scrollIntoView({behavior: "smooth"});
        }
    })
}

const form = document.querySelector(".contact-form")
if (form) {
    form.addEventListener("submit", a => {
        a.preventDefault();
        alert("Pesan berhasil terkirim");
        form.reset();
    })
}