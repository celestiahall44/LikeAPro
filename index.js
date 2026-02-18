//template_wtxo4hk
//service_4cp26t8
//PunT1yUjK2-xsBH1z

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success"); 
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
           'service_4cp26t8',
           'template_wtxo4hk',
           event.target,
           'PunT1yUjK2-xsBH1z'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at celestia.hall44@gmail.com"
         );
    })
}
    