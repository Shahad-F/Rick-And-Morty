 async function search(){

    const response = await fetch("https://rickandmortyapi.com/api/character/?page=19 ")
    const data = await response.json()

 

    ShowListOfNames(data.results)
         // SeeMore(data.results)

        console.log(data)

}

search()

//id of select tag.
let optionBig=document.getElementById('NamesOptionBig')

function ShowListOfNames(ListNames){

for(i in ListNames){

    console.log(ListNames[i].name)
    console.log(ListNames[i].id)
/////////////////////
      let c = document.createElement("option");

      c.text = ListNames[i].name+','+ ListNames[i].id;

      optionBig.appendChild(c);

}

}
 

 
 
function LoadByName(Cart){

    
// we want to divid string to get image and name 
//img[0] it's part for name 
//img[1] it's part for image
 

     let img=Cart.split(",")
     console.log(img[0])
     console.log(img[1])
     alert('You Looking For( '+img[0]+' )')
     ////////
     const elm = document.createElement('div');
     elm.innerHTML=`
     
      <hr>
       
     <img src = "https://rickandmortyapi.com/api/character/avatar/${img[1]}.jpeg" >
     <h5>${img[0]}</h5>
     <hr>
     
     `;
     document.getElementById('OptionCart').appendChild(elm);
}



/////////////////////////////////////////////////////////
 