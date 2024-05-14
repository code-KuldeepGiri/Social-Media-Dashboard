// Simulated data for demonstration purposes
const socialMediaPosts = [
    {
        id: 1,
        username: 'user1',
        text: 'This is a post on social media!',
        likes: 10,
        comments: 5,
        shares: 3
    },
    {
        id: 2,
        username: 'user2',
        text: 'Another post here!',
        likes: 15,
        comments: 8,
        shares: 2
    }
];

// Function to display posts on the dashboard
function displayPosts(posts) {
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = ''; // Clear existing content
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        postElement.innerHTML = `
            <div class="post-header">
                <span>${post.username}</span>
            </div>
            <div class="post-content">
                <p>${post.text}</p>
            </div>
            <div class="post-footer">
                <span>${post.likes} Likes</span>
                <span>${post.comments} Comments</span>
                <span>${post.shares} Shares</span>
            </div>
        `;
        
        mainElement.appendChild(postElement);
    });
}

// Display posts when the page loads
window.addEventListener('load', () => {
    displayPosts(socialMediaPosts);
});
