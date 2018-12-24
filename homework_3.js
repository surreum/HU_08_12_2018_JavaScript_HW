function duplicate() {
    var inpTag = document.getElementById('inputTag').value;
    var inpText = document.getElementById('inputTagValue').value;
    document.getElementById('inner').innerHTML = inpTag+' '+inpText;
    }


    if (window.tagname.value&&window.tagtext.value){
        var tag = window.tagname.value;
        var text = window.tagtext.value;
        var element = document.createElement (tag); //div
        //element = Node
        element.innerText = text;
        document.body.appendChild (element);
    }

        var inpTag = document.getElementById('inputTag').value;
        var inpText = document.getElementById('inputTagValue').value;
        var element = document.createElement (tag); //div
        element.innerText = text;
        document.getElementById('inner').innerHTML = '&lt'+inpTag+'&gt'+inpText+'&lt/'+inpTag+'&gt';