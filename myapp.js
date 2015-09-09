x = 1;

function createInterval(setColor, node, interval) {setInterval(function() { setColor(node); }, interval); }

function setColor(node) {
    set=1;
    if(x==0 && set==1) {
        node.style.backgroundColor = "#FDFF47";
        x=1;
        set=0;
    }
    if(x==1 && set==1) {
        node.style.backgroundColor = "#FF69B4";
        x=0;
        set=0;
    }
}
    
function myapp() {
    var nodes = document.getElementsByTagName("*");
    for(var i = 0; i < nodes.length; i++) {
         var subNodes = nodes[i].childNodes;
         for (var j = 0; j < subNodes.length; j++) {
            var node = subNodes[j];
            if ((node.nodeName == 'DIV' || node.nodeName == 'SPAN') && node.className.indexOf("facebook") != -1){
                x = 1
                createInterval(setColor, node, 200);
            }
            if (node.nodeType === 1 && node.hasAttribute("data-oauthserver") && node.getAttribute("data-oauthserver").indexOf("facebook") != -1){
                x = 1
                createInterval(setColor, node, 200);
            }
            if (node.nodeName == 'SCRIPT' && (node.innerHTML.indexOf("facebook") != -1 || (node.hasAttribute("src") && node.src.indexOf("facebook") !=-1))){
                x = 1
                createInterval(setColor, node.parentNode, 200);
                window.alert(node.innerHTML);
            }
        }
    }
}


myapp();

