function showMessage(message){
    alert(message);
}

function menuClick(element){
    var uiElemnt = document.getElementById("menuList");
    for(i=0; i<uiElemnt.children.length; i++){
        var children = uiElemnt.children[i];
        if(children == element.parentNode){
            children.setAttribute("class","active");
        }
        else{
            children.setAttribute("class","");
        }
    }
}

function setStyle(styleId){
    var styles = document.getElementsByClassName("style-css");
    for(i=0; i<styles.length; i++){
        if(i==styleId){
            styles[i].disabled = false;
        }
        else{
            styles[i].disabled = true;
        }
    }
}
