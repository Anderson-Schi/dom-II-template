// const newLi = document.createElement("li");
const newItem = document.getElementById("meu-input");
const currentList = document.getElementById("lista");


insereItem = () =>{
    const newLi = document.createElement("li");
    newLi.innerHTML = newItem.value

    currentList.insertAdjacentElement(`beforeend`, newLi)

    newItem.value = " "

};
