window.addEventListener("load",function(){
    var nodes = document.querySelectorAll('nav[data-action="expand"] *:nth-child(2)');
    for(var i=0; i<nodes.length; i++){
    nodes[i].addEventListener("click",function(){
    if(this.parentNode.className == "open")this.parentNode.className = "";
    else this.parentNode.className = "open";
    });
    }
  });