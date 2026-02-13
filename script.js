let html="";

posts.forEach((p,i)=>{
html+=`
<div class="card">
<span class="tag">${p.tag}</span>
<h3>${p.title}</h3>
<p>${p.summary}</p>
<a href="post.html?id=${i}">Read Article →</a>
</div>`;
});

document.getElementById("posts").innerHTML=html;
