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

const menu = document.getElementById("courseMenu");
const content = document.getElementById("contentArea");

function renderCourses(data){

menu.innerHTML = "";

data.forEach(course=>{

const btn=document.createElement("button");

btn.className="track-button";

btn.textContent=course.name;

btn.onclick=()=>showCourse(course);

menu.appendChild(btn);

});

}

function showCourse(course){

content.innerHTML = `

<div class="space-y-6">

<h2 class="text-4xl font-bold text-blue-700">
${course.name}
</h2>

<p class="text-lg text-slate-600">
${course.description}
</p>

<div class="bg-slate-50 rounded-xl p-5 border">

<h3 class="text-xl font-bold mb-3">
📚 Learning Modules
</h3>

<ul class="list-disc pl-5 space-y-2">
${course.modules.map(
x=>`<li>${x}</li>`
).join("")}
</ul>

</div>

<div class="bg-yellow-100 border-l-4 border-yellow-500 rounded-xl p-4">

<h3 class="font-bold text-xl">
👉 ACTION REQUIRED
</h3>

<p>
Complete the official Microsoft Learn path before taking the quiz.
</p>

</div>

<div class="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 text-white shadow-xl">

<div class="flex justify-between items-center flex-wrap">

<div>

<h3 class="text-2xl font-bold">
🚀 READY FOR THE NEXT STEP?
</h3>

<p class="mt-2">
Click below to launch the official Microsoft Learn training path.
</p>

</div>

<div class="text-4xl animate-bounce">
➜➜➜
</div>

</div>

<div class="mt-5">

${course.link}="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-bold shadow hover:bg-slate-100">

📘 CLICK HERE TO START MICROSOFT LEARN

</a>

</div>

<p class="mt-4 text-blue-100">

Microsoft Learn will open in a new browser tab.

</p>

</div>

<div class="bg-white border rounded-xl p-5 shadow">

<h3 class="text-xl font-bold mb-4">
🎯 Learning Journey
</h3>

<div class="space-y-3">

<div>✅ Step 1: Review Learning Modules</div>

<div class="text-blue-600 text-xl">
⬇
</div>

<div>📘 Step 2: Open Microsoft Learn</div>

<div class="text-blue-600 text-xl">
⬇
</div>

<div>📝 Step 3: Complete Practice Quiz</div>

<div class="text-green-600 text-xl">
⬇
</div>

<div>🏆 Step 4: Earn Your Certificate</div>

</div>

</div>

</div>

`;

}

document.getElementById("themeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

document.getElementById("search")
.addEventListener("input",(e)=>{

const value=e.target.value.toLowerCase();

renderCourses(
courses.filter(
c=>c.name.toLowerCase().includes(value)
)
);

});

renderCourses(courses);
