function showCourse(course){

content.innerHTML = `

<div>

    <h2 class="text-4xl font-bold text-blue-700 mb-4">
        ${course.name}
    </h2>

    <p class="text-lg mb-4">
        ${course.description}
    </p>

    <h3 class="font-bold text-xl mb-3">
        📚 Learning Modules
    </h3>

    <ul class="mb-6">
        ${course.modules.map(m => `<li>✅ ${m}</li>`).join("")}
    </ul>

    <div style="
        background: linear-gradient(135deg,#0078d4,#00b7ff);
        color:white;
        padding:25px;
        border-radius:16px;
        margin-top:20px;
        box-shadow:0 8px 20px rgba(0,0,0,.15);
    ">

        <h3 style="
            font-size:24px;
            margin-bottom:10px;
        ">
            🚀 NEXT STEP
        </h3>

        <p style="margin-bottom:15px;">
            Complete the official Microsoft Learn training path before taking the quiz.
        </p>

        <div style="
            font-size:30px;
            animation:pulse 1s infinite;
        ">
            ➜ ➜ ➜
        </div>

        ${course.link}"
            style="
                display:inline-block;
                margin-top:20px;
                padding:14px 24px;
                background:white;
                color:#0078d4;
                font-weight:bold;
                text-decoration:none;
                border-radius:10px;
                font-size:18px;
            ">
            📘 CLICK HERE TO START MICROSOFT LEARN
        </a>

    </div>

</div>

`;

}
