//sidebar


const menuItems=document.querySelectorAll(".menu-item");

const messagesNotifications=document.querySelector("#messages-notifications");
const messages=document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch=document.querySelector('#message-search');

// theme
const theme = document.querySelector("#theme");









//remove active class from all menu items 
const changeActiveItem=()=>{
    menuItems.forEach(item =>{
        item.classList.remove("active");
    })
}

menuItems.forEach(item =>{
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector(".notifications-popup").style.display = "none";
        }
        else{
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector(".notification-count").style.display="none";
        }
    })
})

// message notifications---------------------------

messagesNotifications.addEventListener('click',() =>{
    messages.style.boxShadow="0 0 1rem var(--color-primary)";
    messagesNotifications.querySelector(".notification-count").style.display="none";
    setTimeout(() =>{
        messages.style.boxShadow='none';
    },2000)
})






//serachbar*******************************

const searchMessage = () => {
    const val =messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }
        else{
            chat.style.display="none";
        }
    })
}


messageSearch.addEventListener('keyup',searchMessage);

//theme

theme.addEventListener("click", () =>{
    document.querySelector(".theme").style.display="grid";
})




