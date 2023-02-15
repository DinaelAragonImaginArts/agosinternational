const cliente = axios.create({
    baseURL: "https://agosemails2.onrender.com/api/emails/"
});


const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const numero = document.getElementById("number");
const proyecto = document.getElementById("subject");
const descripcion = document.getElementById("textarea");
const btn = document.getElementById("btn");

let _name; 
let email;
let number;
let subject;
let textarea;

nombre.addEventListener("change", (e)=>{
    _name = e.target.value;
})
correo.addEventListener("change", (e)=>{
    email = e.target.value;
})
numero.addEventListener("change", (e)=>{
    number = e.target.value;
})
proyecto.addEventListener("change", (e)=>{
    subject = e.target.value;
})
descripcion.addEventListener("change", (e)=>{
    textarea = e.target.value;
})



const sendMail = async (e) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
       await cliente.post("/", {_name, email, number, subject, textarea, config})
    } catch (error) {
        console.log(error);
    }
    window.location.replace("https://agosinternational.com/thanks.html");
}


btn.addEventListener("click", (e)=>{
    e.preventDefault();
    sendMail()
})