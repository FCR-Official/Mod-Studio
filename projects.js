let projects =
JSON.parse(
localStorage.getItem("projects")
)
|| [];


const projectList =
document.getElementById("projectList");



function createProject(){


let name =
document.getElementById("projectName").value;


let description =
document.getElementById("projectDescription").value;



let project = {

name:name,

description:description,

creator:"User",

shared:true

};



projects.push(project);



localStorage.setItem(

"projects",

JSON.stringify(projects)

);



displayProjects();

}



function displayProjects(){


projectList.innerHTML="";



projects.forEach(project=>{


let card =
document.createElement("div");


card.className =
"project-card";



card.innerHTML =

`

<h2>
${project.name}
</h2>

<p>
${project.description}
</p>


<small>
Created by ${project.creator}
</small>

`;



projectList.appendChild(card);


});


}



function goHome(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
let scan = Firewall.scan(
    name + " " + description
);


if (!scan.safe) {

    alert(
        "Project blocked:\n\n" +
        scan.warnings.join("\n")
    );

    return;

}


displayProjects();
