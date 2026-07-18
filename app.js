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
},
20
{
21
name: "AZ-104",
22
description: "Azure Administrator certification.",
23
modules: [
24
"Identity",
25
"Storage",
26
"Networking"
27
]
28
},
29
{
30
name: "AZ-305",
31
description: "Azure Architect certification.",
32
modules: [
33
"Architecture",
34
"Security",
35
"Governance"
36
]
37
}
38
];
39
 
40
const menu = document.getElementById("menu");
41
const content = document.getElementById("content");
42
const dashboard = document.getElementById("dashboard");
43
 
44
tracks.forEach(track => {
45
const btn = document.createElement("button");
46
 
47
btn.textContent = track.name;
48
 
49
btn.addEventListener("click", () => {
50
 
51
dashboard.textContent =
52
`Selected: ${track.name}`;
53
 
54
content.innerHTML = `
55
<h2>${track.name}</h2>
56
<p>${track.description}</p>
57
<ul>
58
${track.modules.map(m => `<li>${m}</li>`).join("")}
59
</ul>
60
`;
61
});
62
 
63
menu.appendChild(btn);
64
});
65
 
66
document.getElementById("revisionBtn").addEventListener("click", () => {
67
content.innerHTML += "<p><strong>Revision sheet loaded.</strong></p>";
68
});
69
 
70
document.getElementById("quizBtn").addEventListener("click", () => {
71
content.innerHTML += "<p><strong>Quiz loaded.</strong></p>";
72
});
