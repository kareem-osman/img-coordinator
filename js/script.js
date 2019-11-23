let box_img=document.querySelectorAll(".row img")
let copy;
for(let img of box_img){
img.addEventListener("mouseenter",function(e){
    copy=img.cloneNode(true)
    document.body.appendChild(copy)
    copy.classList.add('hhov');
    copy.style.top=e.pageY+"px"
    copy.style.left=e.pageX+"px"})
img.addEventListener("mousemove",function(e){
    copy.style.top=(e.pageY+10)+"px"
    copy.style.left=(e.pageX+10)+"px"})
img.addEventListener("mouseleave",function(e){
        document.body.removeChild(copy)})
}

let txt_v=document.getElementById("txt")
let cord_v=document.getElementById("cord")
cord_v.addEventListener("mousemove",function(e){
    txt_v.style.display="block"
    txt_v.style.top=(e.pageY+10)+ "px"
    txt_v.style.left=(e.pageX+10)+"px"
    txt_v.innerHTML='<span id="red">X:  </span>'+e.offsetX+' <span id="red">Px-Y: </span>'+e.offsetY+'<span id="red"> Px</span>'

})
cord_v.addEventListener("mouseleave",function(e){
    txt_v.style.display="none"    
})
let click_img=document.querySelectorAll(".row img")
for(let it of click_img){
it.onmouseenter=function(e){
let src_vr=e.target.getAttribute("src")
document.querySelector("#cord5 img").setAttribute("src",src_vr)
}}
