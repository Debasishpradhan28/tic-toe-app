let prompt=document.querySelector("#prompt")
let chatContainer=document.querySelector(".chat-container")


let user={
    data:null,
}


function createChatBox(html,classes){
    let div=document.createElement("div")
    div.innerHTML=html
    div.classList.add(classes)
    return div

}


function handlechatResponse(message){
    let html=`<img src="user.png.jpeg" alt="" id="userImage" width="50">
    <div class="user-chat-area">
    ${message}

    </div>`
    prompt.value=""
    let userChatBox=createChatBox(html,"user-chat-box")
    chatContainer.appendChild(userChatBox)
    setTimeout(()=>{
        let html=`<img src="ai.jpeg" alt="" id="aiImage" width="70">
    <div class="ai-chat-area">
    <img src="loading.webp" alt="" class="load" width="50px">
    </div>`
    let aiChatBox=createChatBox(html,"ai-chat-box")
    chatContainer.appendChild(aiChatBox)
    generateResponse(aiChatBox)

    },600)
}

prompt.addEventListener("keydown",(e) =>{
    if(e.key=="Enter"){
        console.log(prompt.value);
        handlechatResponse(prompt.value)

    }
        

    

}

)