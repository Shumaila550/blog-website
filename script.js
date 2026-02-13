const postsPerPage = 3;
let currentPage = 1;

function renderPosts(list){

let start=(currentPage-1)*postsPerPage;
let pagePosts=list.slice(start,start+postsPerPage);

let html="";
pagePosts.forEach((p,i)=>{
html+=`
<div class="card">
<span class="tag">${p.tag}</span>
<h3>${p.title}</h3>
<a href="post.html?id=${posts.indexOf(p)}">Read Article →</a>
</div>`;
});

document.getElementById("posts").innerHTML=html;
renderPagination(list.length);
}

function renderPagination(total){
let pages=Math.ceil(total/postsPerPage);
let html="";
for(let i=1;i<=pages;i++){
html+=`<button onclick="goPage(${i})">${i}</button>`;
}
document.getElementById("pagination").innerHTML=html;
}

function goPage(p){
currentPage=p;
renderPosts(filteredPosts);
}

let filteredPosts=[...posts];
renderPosts(filteredPosts);

document.getElementById("search").addEventListener("input",e=>{
filteredPosts=posts.filter(p=>
p.title.toLowerCase().includes(e.target.value.toLowerCase())
);
currentPage=1;
renderPosts(filteredPosts);
});
