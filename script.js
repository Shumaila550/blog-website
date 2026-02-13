const posts=JSON.parse(localStorage.getItem("posts"));

let html="";
posts.forEach((p,i)=>{
html+=`
<div class="card">
<h3>${p.title}</h3>
<p>${p.summary}</p>
<a href="post.html?id=${i}">Read more</a>
</div>`;
});

document.getElementById("posts").innerHTML=html;


// DARK MODE
function toggleTheme(){
document.body.classList.toggle("dark");
localStorage.setItem("theme",
document.body.classList.contains("dark")?"dark":"light");
}

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}
