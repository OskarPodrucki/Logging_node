const login = "1"
const pass = "1"

function logIN(){
    const formLogin = document.getElementById("login").value
    const formPass = document.getElementById("pass").value

    console.log(formLogin)
    console.log(formPass)

    if(formLogin==login && formPass==pass){
        alert("Zalogowano")
        localStorage.setItem("Czy_Zalogowany", "true")
    }else{
        alert("jaja se robisz że nie pamiętasz loginu >:(")
        localStorage.setItem("Czy_Zalogowany", "false")
    }
}

function admIN(){
    const Czy_Zalogowany = localStorage.getItem("Czy_Zalogowany")
    if(Czy_Zalogowany != "true"){
    window.location.href = "login.html"
    alert("zaloguj się >:(")
}
}