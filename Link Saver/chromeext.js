//this one tells innerHtml use
//how to get and assign value of input tag
//addEventlistener
//queryselector
//tempelate strings
//local storage


// const  d = document.querySelector("#container");

// d.innerHTML += "<button>" + "buy" + "</button>"

// function button(){
//     console.log("button clicked")
// }

let myleads = [];

const inputEl = document.getElementById("input-el");

const inputbtn = document.getElementById("input-btn");

const ulel = document.getElementById("ul-el");

const deletebtn = document.getElementById("delete-btn");

const tabbtn = document.getElementById("tab");
 
const oleads = JSON.parse(localStorage.getItem("myleads"));


tabbtn.addEventListener("click",function(){

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // Do something
        myleads.push(tabs[0].url);
        localStorage.setItem("myleads",JSON.stringify(myleads))
        renderLeads(myleads)
        
    });
    

})

if(oleads){
    myleads = oleads;
    renderLeads();
}
console.log(oleads)


deletebtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myleads = [];
    renderLeads()
})

inputbtn.addEventListener("click",function(){
    
    myleads.push(inputEl.value);
    
    inputEl.value = "";
    
    
    localStorage.setItem("myleads",JSON.stringify(myleads))

    renderLeads();

    console.log(localStorage.getItem("myleads"));
    
})

function renderLeads(){
    let listItems = ""

    for(let i=0; i<myleads.length; i++){
        //listItems += "<li><a target = '_blanck' href = ' "+ myleads[i] +" '> " + myleads[i] + "</a></li>";

        listItems += `
        <li>
        <a target = "_blanck" href =  "${myleads[i]}">  ${myleads[i]} </a></li>`;

        // const li = document.createElement("li");
        // li.textContent = myleads[i];
        // ulel.append(li)
        console.log(myleads[i])

    }

    ulel.innerHTML = listItems;}








