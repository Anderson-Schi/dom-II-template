

escondeSenha = (event) => {
    let myInput = document.getElementById("password");
    event.preventDefault();
    myInput.setAttribute("type", "password");
 
};

// const form = document.querySelector(".light");

// form.classList.remove("light");
// form.classList.add("dark");

const form = document.getElementsByTagName("form");
 form[0].setAttribute(`class`, `dark`)