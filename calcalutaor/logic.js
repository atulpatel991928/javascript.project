let screen= document.getElementById('screen');
button= document.querySelectorAll('button');
let screenvalue = '';
for(item of button){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('botton text is', buttonText);
        if(buttonText=='x'){
            buttonText = '*';
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
        else if(buttonText == 'c'){
            screenvalue = "";
            screen.value = screenvalue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenvalue);

        }
        else{
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
    })
}