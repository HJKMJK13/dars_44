const title=document.getElementById("title")
title.textContent +=" New text"
console.log(title.textContent)

const listItem=document.querySelectorAll(".list-item")
listItem.forEach((item)=>{
    item.textContent +=" darslari"
    console.log(item.textContent)
})
