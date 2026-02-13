const posts = [
{
title:"Understanding Async JavaScript",
tag:"JavaScript",
content:`
# Async JavaScript Guide

Here is a code example:

\`\`\`js
async function loadData(){
 const res = await fetch("/api");
 return res.json();
}
\`\`\`

Async/await makes async code readable.
`
},

{
title:"CSS Grid Layout Tutorial",
tag:"CSS",
content:`
# CSS Grid Example

\`\`\`css
.container{
 display:grid;
 grid-template-columns:1fr 1fr;
}
\`\`\`
`
},

{
title:"Git Branch Strategy",
tag:"Git",
content:`# Git Workflow Tips`
},

{
title:"Clean Code Rules",
tag:"Best Practice",
content:`# Write maintainable code`
},

{
title:"Web Performance Tips",
tag:"Performance",
content:`# Optimize images and scripts`
}
];
