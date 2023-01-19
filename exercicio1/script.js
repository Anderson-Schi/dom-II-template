addElement = () =>{
    
    // Criando um elemento LI
    const li00 = document.createElement("li");
    const li05 = document.createElement("li")

     // Colocando conteúdo para o li
    const li00txt = document.createTextNode("Item 0");
    // const li05txt = document.createTextNode("Item 5")
    

     // Adicionando o conteúdo no li
    li00.appendChild(li00txt);
    // li05.appendChild(li05txt); 
    li05.innerHTML = "Item 5" //----------- OUTRA FORMA DE FAZEER


     // Buscando o li existente para usar de referência
    const currentList = document.getElementById("lista");

    // Adicionando o elemento no DOM, e consequentemente, na página
    currentList.insertAdjacentElement(`afterbegin`, li00);
    currentList.insertAdjacentElement(`beforeend`, li05);

};

addElement();