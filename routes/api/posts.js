import { processMarkdownPosts } from "../../functions/helpers/processMarkdownPosts.js"

export const apiRoutes = (app) => {
    app.get('/api/posts', async (req , res) => {
        const posts = await processMarkdownPosts(app);
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(posts));
    });
    
} 
