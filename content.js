var paragraphs = document.getElementsByTagName("p");

for (p of paragraphs) {
    p.style["background-color"] = "green";
}


function getSelText() {
    var txt = '';
    if (window.getSelection)
    {
        txt = window.getSelection();
        console.log("test1");
    }
    else if (document.getSelection)
    {
        txt = document.getSelection();
        console.log("test2");
    }
    else if (document.selection)
    {
        txt = document.selection.createRange().text;
        console.log("test3");
    }
    else return;
    console.log("test");
}

//getSelText();
console.log("content script ran");
chrome.action.setPopup("/index.html")
chrome.action.openPopup();