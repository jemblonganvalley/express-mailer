

const handleRegister = (event) => {

    clearTimeout()
    event.preventDefault()

    console.log({
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        password: event.target.password.value,
    })

    let cardNotif = document.querySelector(".card-notif")

    fetch("https://fadliselaz-express-mailer.herokuapp.com/api/user/create_user", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: event.target.username.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            password: event.target.password.value,
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.status == 201) {
                cardNotif.style.display = 'flex'
                cardNotif.innerHTML = `
                Registrasi berhasil
            `
            } else {
                cardNotif.style.display = 'flex'
                cardNotif.style.borderRight = '5px solid red'
                cardNotif.innerHTML = `
                    Registrasi gagal
                `
            }
        })
        .catch(err => {
            console.log(err)
        })



    setTimeout(() => {
        cardNotif.style.display = 'none'
    }, 3000)

}