JavaScript
1
const tracks = [
2
{
3
name: "AZ-900",
4
description: "Azure Fundamentals certification.",
5
modules: [
6
"Cloud Concepts",
7
"Azure Services",
8
"Security and Governance"
9
]
10
},
11
{
12
name: "AI-900",
13
description: "Azure AI Fundamentals certification.",
14
modules: [
15
"Machine Learning",
16
"Computer Vision",
17
"Azure OpenAI"
18
]
19
}
20
];
21
 
22
const menu = document.getElementById("menu");
23
const content = document.getElementById("content");
24
const dashboard = document.getElementById("dashboard");
25
 
26
tracks.forEach(track => {
27
const btn = document.createElement("button");
28
 
29
btn.textContent = track.name;
30
 
31
btn.addEventListener("click", () => {
32
 
33
dashboard.textContent =
34
`Selected: ${track.name}`;
35
 
36
content.innerHTML = `
37
<h2>${track.name}</h2>
38
<p>${track.description}</p>
39
<ul>
40
${track.modules.map(m => `<li>${m}</li>`).join("")}
41
</ul>
42
`;
43
});
44
 
45
menu.appendChild(btn);
46
});
