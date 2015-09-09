var ignoreTags = ["NOSCRIPT","SCRIPT"];
var nodeIterator = document.createNodeIterator(
    document,
    NodeFilter.SHOW_TEXT,
    function (node){
      var parentTag = node.parentNode.tagName.toUpperCase();
      if ( ignoreTags.indexOf(parentTag)==-1 ) {return true} else {return false};
    },
    false
);

var node;
while ( (node = nodeIterator.nextNode()) ) {
    if (node.tagName == 'SPAN' || node.tagName == 'DIV'){
        if (node.innerText.match('Facebook') || node.innerText.match('facebook')) {
            node.style.backgroundColor = "#FDFF47";
        }
    }
}