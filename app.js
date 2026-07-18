const courses = [

{
name:"AZ-900",
description:"Azure Fundamentals",
link:"https://learn.microsoft.com/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/",
modules:[
"Cloud Concepts",
"Azure Services",
"Security"
]
},

{
name:"AI-900",
description:"Azure AI Fundamentals",
link:"https://learn.microsoft.com/training/paths/get-started-with-artificial-intelligence-on-azure/",
modules:[
"Machine Learning",
"Computer Vision",
"NLP",
"Azure OpenAI"
]
},

{
name:"AZ-104",
description:"Azure Administrator",
link:"https://learn.microsoft.com/training/paths/az-104-manage-identities-governance/",
modules:[
"Identity",
"Storage",
"Networking",
"Compute"
]
},

{
name:"AZ-305",
description:"Azure Architect",
link:"https://learn.microsoft.com/training/paths/design-identity-security/",
modules:[
"Architecture",
"Security",
"Governance"
]
}

];

const menu =
document.getElementById("courseMenu");

const content =
document.getElementById("contentArea");

function renderCourses(data){

menu.innerHTML = "";

data.forEach(course=>{

const btn =
document.createElement("button");

btn.className = "track-button";

btn.textContent = course.name;

btn.onclick=()=>showCourse(course);

menu.appendChild(btn);

});
}

function showCourse(course){

content.innerHTML = `

<h2 class="text-3xl font-bold mb-4">
${course.name}
</h2>

<p class="mb-4">
${course.description}
</p>

<ul class="list-disc pl-5 mb-4">

${course.modules
.map(x=>`<li>${x}</li>`)
.join("")}

</ul>

}"
target="_blank"
class="text-blue-600 font-bold">

Open Microsoft Learn

</a>

<hr class="my-4">

<button
class="bg-green-600 text-white px-4 py-2 rounded"
onclick="startQuiz('${course.name}')">

Start Quiz

</button>

`;

}

function startQuiz(name){

content.innerHTML = `

<h2 class="text-2xl font-bold mb-4">
${name} Quiz
</h2>

<p>
Which Azure service provides
virtual machines?
</p>

<div class="mt-4">

<button
onclick="submitQuiz(true)"
class="bg-blue-700 text-white px-4 py-2 rounded">
Azure Virtual Machines
</button>

</div>

`;

}

function submitQuiz(correct){

let score =
correct ? 100 : 0;

localStorage.setItem(
"latestScore",
score
);

document.getElementById(
"avgScore"
).textContent =
score + "%";

if(score >= 80){

generateCertificate();

}

alert(
"Quiz Complete. Score: " +
score
);

}

function generateCertificate(){

document.getElementById(
"certCount"
).textContent = "1";

const blob =
new Blob(

[
"Azure & Windows AI Academy Certificate"
],

{
type:"text/plain"
}

);

const url =
URL.createObjectURL(blob);

const a =
document.createElement("a");

a.href = url;

a.download =
"certificate.txt";

a.click();

}

document
.getElementById("themeBtn")
.addEventListener(
"click",
()=>{
document.body.classList.toggle(
"dark"
);
}
);

document
.getElementById("search")
.addEventListener(
"input",
e=>{

const value =
e.target.value.toLowerCase();

renderCourses(
courses.filter(
c =>
c.name.toLowerCase()
.includes(value)
)
);

}
);

renderCourses(courses);
