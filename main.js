// const title=document.getElementById("title")
// title.textContent +=" New text"
// console.log(title.textContent)

// const listItem=document.querySelectorAll(".list-item")
// listItem.forEach((item)=>{
//     item.textContent +=" darslari"
//     console.log(item.textContent)
// })


//innerHTML
// const title=document.getElementById("title")
// title.innerHTML ="<i>new text html</i>"

// const names=["Dilshod","Ilhom","Karimjon"]
// const ol=document.querySelector("ol")
// names.forEach((name)=>{
//     ol.innerHTML +=`<li>${name}</li>`
// })

// const names=["Karimjon","Dilshod","Burjoq"]
// const ol=document.querySelector("ol")
// names.forEach((name)=>{
//     ol.innerHTML +=`<li>${name}</li>`
// })

const names=["Karimjon","Dilshod","Burjoq"]
const ol=document.querySelector("ol")
names.forEach((name)=>{
    ol.textContent +=`${name}`
})