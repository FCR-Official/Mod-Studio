let studios =
JSON.parse(
localStorage.getItem("studios")
)
|| [];



const studioList =
document.getElementById("studioList");




function createStudio(){


let name =
document.getElementById("studioName").value;


let description =
document.getElementById("studioDescription").value;


let banner =
"";



let file =
document.getElementById("studioBanner").files[0];



if(file){

let reader =
new FileReader();


reader.onload=function(){

banner =
reader.result;


finishStudio(
name,
description,
banner
);

};


reader.readAsDataURL(file);


}

else {


finishStudio(
name,
description,
""
);


}


}




function finishStudio(
name,
description,
banner
){


let studio = {


name:name,

description:description,

banner:banner,

owner:
"User"

};



studios.push(studio);



localStorage.setItem(

"studios",

JSON.stringify(studios)

);



displayStudios();


}





function displayStudios(){


studioList.innerHTML="";



studios.forEach(
studio=>{


let card =
document.createElement(
"div"
);



card.className =
"studio-card";



card.innerHTML =

`

<div class="studio-banner"

style="background-image:url('${studio.banner}')">

</div>


<div class="studio-content">

<h2>
${studio.name}
</h2>


<p>
${studio.description}
</p>


<small>
Owner: ${studio.owner}
</small>


</div>

`;



studioList.appendChild(card);


});


}



displayStudios();
