// Default posts if none exist
if(!localStorage.getItem("posts")){
localStorage.setItem("posts", JSON.stringify([
{
title:"Future of Web Development",
summary:"Discover modern tools shaping the web.",
content:"Full article about web dev future..."
},
{
title:"Design Trends 2026",
summary:"Clean UI and accessibility lead design.",
content:"Full article about design trends..."
}
]));
}
