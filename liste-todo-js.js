const button=document.querySelector("#addTodo");
      button.addEventListener("click",ajout);
    
    
      function ajout(){
        const name=document.querySelector("#inputname").value;
    const content=document.querySelector("#inputcontent").value;
    
    const liste=document.querySelector("#list");
   
if(content.trim()==""){
    alert("ajouter un contenu !!");
    return;
}
concat=name +" : " +content;
let element=document.createElement('button');
let li=document.createElement('li');
element.textContent=concat;
li.appendChild(element);
liste.appendChild(li);
element.addEventListener("click",()=>{
    element.remove();
})
document.querySelector("#inputname").value="";
document.querySelector("#inputcontent").value="";
    }
    