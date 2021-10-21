let addForm =document.getElementById("add2") ;

let hide=document.getElementById('hide');


let FORM =document.getElementById("FORM1").style.display='none';

let FORM2 =document.getElementById("FORM1")
// 

 addForm.addEventListener('click',showForm);
 hide.addEventListener('click',hideForm);


function showForm(){
     
  FORM2.style.display="block";
 
}
function hideForm(){

    FORM2.style.display ="none";  
   
  }
 

fetch('https://rickandmortyapi.com/api/character/?page=19')


.then((resp) => resp.json())
 
.then(function(data) {

  ////data
data.results.forEach(element => {
   
  
const elm = document.createElement('div');
const atag = document.createElement('a');
const navi=document.createElement('nav');
const img=document.createElement('img')
const name=document.createElement('h5')
const ion =document.createElement('ion-icon')

img.src=element.image
name.innerText=element.name
ion.setAttribute("name","trash-outline")
atag.innerText ="see more"

navi.appendChild(img)
navi.appendChild(name)
navi.appendChild(atag)
navi.appendChild(ion)
elm.appendChild(navi);

  
document.getElementById('parent').appendChild(elm);
   
  ion.addEventListener('click',function Delete(){

      console.log("Delete")
    
     elm.remove(elm.id);

  })
  atag.addEventListener('click',function SeeMore(){

     
    let info=element;
    alert('See Information About { '+info.name+' }')
    console.log(info)
    
       

           //tag name
     let details=document.createElement('div');
      
     details.innerHTML=`
     <hr>
      
     <br> 
     <img src="https://rickandmortyapi.com/api/character/avatar/${info.id}.jpeg"
      
     <br>
     <h4>ID is : ${info.id} </h4>  
     <h4> Name is :${info.name}</h4>
     <h4>Status is :${info.status}</h4>
     <h4> Speciec is :${info.species}</h4>
      <hr>
     
     `;
     console.log(details)
      document.getElementById('moreInfo').appendChild(details);
      }
    
    );
})///end of data
 


 
});
 

/////////

 

//add new cart ..
 
let NewCart =document.getElementById('parent');
 

let addNew =document.getElementById('Add');

addNew.addEventListener('click',addToList);

addNew.addEventListener('click',Alert);

// alert function when add new cart ...
function Alert(){

    
    alert('You added new card ..')
}
 

function addToList(){

  
    let newName= document.getElementById('name').value;
    let newImage=document.getElementById('image').value;
  

    console.log(newName);
    console.log(newImage);

    //to upload image from desktop

// let newUrl= newImage.split("fakepath");
//  <img src= "/image${newUrl[1]}"> 
//  console.log(newUrl[1])


    NewCart.innerHTML += ` 

     <div>
     <nav id="D">
     <img src="${newImage}"> 
      <h5>      ${newName} </h5>
    <hr>
     
    <ion-icon name="trash-outline" onclick= "dele()">X</ion-icon>

   </nav>
   </div>
  
    `;

}
 
function dele(){
D.remove()
}
 

 

 
     

                 
 
