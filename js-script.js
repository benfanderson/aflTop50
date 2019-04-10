window.onload= function() {
    let pics =document.getElementsByClassName("pic");
    for (let i = 0; i< pics.length; i++) {
        pics[i].addEventListener("click", function() {
            document.getElementById("playerDisplay").style.left=0;
        });
        
        
    }

    let closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", function() {
        document.getElementById("playerDisplay").style.left=-820;
    });


}