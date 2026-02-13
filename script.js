fetch('posts.json')
.then(res => res.json())
.then(posts => {

    let html = "";

    posts.forEach((post, index) => {
        html += `
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.summary}</p>
            <a href="post.html?id=${index}">Read More</a>
        </div>
        `;
    });

    document.getElementById("posts").innerHTML = html;
});
