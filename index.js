let bgcolor = document.getElementById("bgColorInput");
let fontcolor =document.getElementById("fontColorInput");
let fontsize = document.getElementById("fontSizeInput");
let fontweight=document.getElementById("fontWeightInput");
let padd = document.getElementById("paddingInput");
let radius =document.getElementById("borderRadiusInput");
let custombutton = document.getElementById("customButton");

function applybtn() 
{
    let bgmcolor=bgcolor.value;
    let fontmcolor =fontcolor.value;
    let fontmsize=fontsize.value;
    let fontmweight=fontweight.value;
    let paddm =padd.value;
    let radiusm =radius.value;
    custombutton.style.backgroundColor = bgmcolor;
    custombutton.style.fontSize = fontmsize;
    custombutton.style.fontWeight = fontmweight;
    custombutton.style.padding = paddm;
    custombutton.style.borderRadius = radiusm;
    custombutton.style.color = fontmcolor;
}