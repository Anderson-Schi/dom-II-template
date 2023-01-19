
const msg = document.getElementById("mensagem");

checaCaps = (event) =>{

    // if(event.shiftKey){
    //     msg.innerHTML = ("ANTENCAO: SEGURANDO SHIFT");

    //   }else{
    //     msg.innerHTML = (" ");
    //   }

    event.shiftKey 
    ? msg.innerHTML = "ANTENCAO: SEGURANDO SHIFT" 
    : msg.innerHTML = "" ;
};



