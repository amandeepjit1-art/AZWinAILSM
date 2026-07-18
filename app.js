const tracks = [
2
{
3
name: "AZ-900",
4
description: "Microsoft Azure Fundamentals certification.",
5
modules: [
6
"Cloud Concepts",
7
"Azure Core Services",
8
"Security & Governance"
9
]
10
},
11
{
12
name: "AI-900",
13
description: "Microsoft Azure AI Fundamentals certification.",
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
description: "Microsoft Azure Administrator certification.",
23
modules: [
24
"Identity",
25
"Storage",
26
"Compute",
27
"Networking"
28
]
29
},
30
{
31
name: "AZ-305",
32
description: "Microsoft Azure Solutions Architect certification.",
33
modules: [
34
"Architecture Design",
35
"Business Continuity",
36
"Security",
37
"Governance"
38
]
39
}
40
];
41
 
42
const menu = document.getElementById("menu");
43
const content = document.getElementById("content");
44
const dashboard = document.getElementById("dashboard");
45
const search = document.getElementById("search");
46
 
47
let selectedTrack = null;
48
 
49
function renderTracks(items){
50
 
51
menu.innerHTML = "";
52
 
53
items.forEach(track => {
54
 
55
const btn = document.createElement("button");
56
 
57
btn.textContent = track.name;
58
 
59
btn.addEventListener("click", () => {
60
 
61
selectedTrack = track;
62
 
63
dashboard.textContent =
64
"Selected: " + track.name;
65
 
66
content.innerHTML = `
67
<h2>${track.name}</h2>
68
 
69
<p>${track.description}</p>
70
 
71
<h3>Modules</h3>
72
 
73
<ul>
74
${track.modules.map(
75
m => `<li>${m}</li>`
76
).join("")}
77
</ul>
78
`;
79
});
80
 
81
menu.appendChild(btn);
82
});
83
}
84
 
85
renderTracks(tracks);
86
 
87
search.addEventListener("input", () => {
88
 
89
const value =
90
search.value.toLowerCase();
91
 
92
const filtered =
93
tracks.filter(t =>
94
t.name.toLowerCase().includes(value)
95
);
96
 
97
renderTracks(filtered);
98
});
99
 
100
document
101
.getElementById("revisionBtn")
102
.addEventListener("click", () => {
103
 
104
if(!selectedTrack){
105
alert("Select a certification first.");
106
return;
107
}
108
 
109
content.innerHTML += `
110
<hr>
111
<h3>Revision Notes</h3>
112
<p>
113
Review all modules listed above before attempting certification.
114
</p>
115
`;
116
});
117
 
118
document
119
.getElementById("quizBtn")
120
.addEventListener("click", () => {
121
 
122
if(!selectedTrack){
123
alert("Select a certification first.");
124
return;
125
}
126
 
127
content.innerHTML = `
128
<h2>${selectedTrack.name} Practice Quiz</h2>
129
 
130
<p>
131
Which Microsoft certification track
132
are you currently studying?
133
</p>
134
 
135
<button onclick="alert('Correct!')">
136
${selectedTrack.name}
137
</button>
138
`;
139
});
