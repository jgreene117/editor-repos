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
 
function loadFileAsText(event)
{
    var pre = document.getElementById("editor");
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function() 
    {
        var textFromFileLoaded = fileReader.result;
//        console.log(textFromFileLoaded);
        pre.textContent = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "utf-8");
    
}

function extractedvals() {
    var tobeextractedvals = document.getElementsByClassName('ace_layer ace_text-layer');
    for (var i=0;i<tobeextractedvals.length;i++){
        console.log(tobeextractedvals[i].textcontent);
    }
}