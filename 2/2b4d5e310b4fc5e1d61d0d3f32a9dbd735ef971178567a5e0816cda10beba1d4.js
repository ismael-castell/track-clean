function(){}
addLoadEvent(function(){
    var lhid = document.createElement('input');
    lhid.setAttribute('type','hidden');
    lhid.setAttribute('name','lang');
    lhid.setAttribute('value',icl_lang);     
    src = document.getElementById('searchform');   
    if(src){
        src.appendChild(lhid);
        src.action=icl_home; 
    }
});

function(){}