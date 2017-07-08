function saveTextAsFile()
{
    var textToSave = document.getElementById("inputTextToSave").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    var downloadLink = document.createElement("a");

    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
  
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
  
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
 
function loadFileAsText()
{
    var list = document.getElementsByClassName('ace_line');
    for(var i = list.length - 1; 0 <= i; i--)
        if(list[i] && list[i].parentElement)
            list[i].parentElement.removeChild(list[i]);
    var pre = document.getElementsByClassName('ace_layer ace_text-layer');
    var loc = pre[0];

    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function() 
    {
        var textFromFileLoaded = fileReader.result;
        var node = document.createElement("div");
        node.setAttribute("id", "fileedit");
        node.textContent = textFromFileLoaded;
        document.body.appendChild(node);
//        console.log(textFromFileLoaded);
//        var lines = textFromFileLoaded.split(/\r\n|\r|\n/);
//        for (i=0; i < lines.length; i++) {
//            var node = document.createElement("div");
//            node.setAttribute("class", "ace_line");
//            node.setAttribute("style", "height:16px");
//            node.textContent = lines[i];
//            loc.appendChild(node);
//        }
    };
    fileReader.readAsText(fileToLoad, "utf-8");
    
}

function extractedvals() {
    var tobeextractedvals = document.getElementsByClassName('ace_layer ace_text-layer');
    for (var i=0;i<tobeextractedvals.length;i++){
        console.log(tobeextractedvals[i].textcontent);
    }
}
