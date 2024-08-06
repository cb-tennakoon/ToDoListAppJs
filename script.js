const inputBox = document.getElementById("inputFromBox");
const listContainer = document.getElementById("list-container");
let p = false;
function addTask(){
    if(inputBox.value ===''){
        alert("Must need next task");
    }
    else{
        let liElement = document.createElement("li");
        liElement.innerHTML=inputBox.value;
        listContainer.appendChild(liElement);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        liElement.appendChild(span);
    }
    inputBox.value="";
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        p=true;
    }
},false);

listContainer.addEventListener("click",function(e){
    //var hasClass =false;
    console.log(p);
    if(p){ 
        var hasClass = (el, className) => el.classList.contains(className);
        hasClass(document.querySelector('li.checked'), 'checked');
    }

    
    console.log(hasClass);
    if(e.target.tagName === "SPAN" && hasClass){
        e.target.parentElement.remove();
    }
    else{
        console.log(hasClass);
    }

},false);