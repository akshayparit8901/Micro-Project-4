let dot = true;
function btn_click(id){
    const input = document.getElementById("inp");

    if(input.value.length>=10){
        document.getElementById("inp").style.fontSize = 55 - input.value.length  + "px";
    }else{
        document.getElementById("inp").style.fontSize = "55px";
    }
    
    if(id=="0" || id=="1" || id=="2" || id=="3" || id=="4" || id=="5" || id=="6" || id=="7" || id=="8" || id=="9"){
        input.value+=document.getElementById(id).innerText;
        
    }else if(id=="+" || id=="*" || id=="/"){
        const n = input.value[input.value.length - 1];
        if(!isNaN(n)){
            input.value+=document.getElementById(id).innerText;
            dot = true;
        }
        
    }else if(id=="-"){
        const n = input.value[input.value.length - 1];
        if(input.value==""){
            input.value+=document.getElementById(id).innerText;
            dot = true; 
        }
        if(n=="+" || n=="*" || n=="/"){
            input.value+=document.getElementById(id).innerText; 
            dot = true;
        }
        if(n=="-" && !isNaN(input.value[input.value.length - 2]) && input.value[input.value.length - 2]!=" "){
            input.value+=" "+document.getElementById(id).innerText; 
            dot = true;
        }
        if(!isNaN(n)){
            input.value+=document.getElementById(id).innerText;
            dot = true;
        }
    }else if(id=="."){
        const n = input.value[input.value.length - 1];
        if(!isNaN(n) && dot){
            input.value+=document.getElementById(id).innerText;
            dot = false;
        }
        
    }else if(id=="equal"){
        function isValidExp(){
            try {
                eval(input.value);
                return true;
            } catch (error) {    
                return false;
            }
        }
        if(input.value==""){
            input.value=""
        }else if(isValidExp()){
             if(!Number.isInteger(eval(input.value))){
                input.value = eval(input.value).toFixed(2)
             }else{
                input.value = eval(input.value)
             }
        }else{
            alert("invalid expression");
        }
        if(input.value.length>10){
            document.getElementById("inp").style.fontSize = 55 - input.value.length  + "px";
        }else{
            document.getElementById("inp").style.fontSize = "55px";
        }
    }else if(id=="del"){
        input.value=input.value.substring(0,input.value.length-1)
    
    }else if(id=="reset"){
        input.value = "";
    }
    
}

document.getElementById('inp').onkeydown=function disableKey(){
    return false;
}

document.getElementById('inp').onkeydown=function disableKey(){
    return false;
}

