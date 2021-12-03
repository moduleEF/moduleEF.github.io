let form = document.querySelector("#form");
let inputs = document.querySelectorAll('input');


async function handleSubmit(event) {
    event.preventDefault();
    let status = document.getElementById("form-status");
    let data = new FormData(event.target);


    for (let input of inputs) {
        if (input.value === '') {
            status.innerHTML = `Uno o más campos tienen un error. Por favor, revisá e intentalo de nuevo`
            return
        }
    }

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Tu mensaje fue enviado con éxito, nos estaremos comunicando contigo";
        form.reset()
    }).catch(error => {
        console.log(error);
        status.innerHTML = "Oops! Hubo un problema al enviar su mensaje"
    });
}
form.addEventListener("submit", handleSubmit)