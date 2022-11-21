let ID = document.getElementById("ID")
let Name = document.getElementById("Name")
let Quantity = document.getElementById("Quantity")
let Insertbtn = document.getElementById("Insert")
let Deletebtn = document.getElementById("Delete")
let GetID = document.getElementById("GetID")
let Searchbtn = document.getElementById("search")

Insertbtn.addEventListener("click", getData);


function getData(event){
    event.preventDefault();

    let IDs = []

    if (ID.value.length == 0){
        alert("Product Code cant be blank! ");
        return;
    }
    if (ID.value.length < 3){
        alert("MIN 3 Symbols");
        return;
    }
    if(Name.value == "") {
        alert("Product Name cant be blank!")
        return;
    }
    if(Quantity.value.length == 0 ){
        alert("Product quantity cant be blank!")
        return;
    }
    if(Quantity.value.length < 1){
        alert("MIN 1 Symbol")
        return;
    }
    



}








