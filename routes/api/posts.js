import { processMarkdownPosts } from "../../functions/helpers/processMarkdownPosts.js"
import { countPostsByTag, getPostsByTag } from "../../functions/helpers/processPostsTags.js"


export const apiRoutes = (app) => {
    app.get('/api/posts', async (req , res) => {
        const posts = await processMarkdownPosts(app);
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(posts));
    })
   // tag routes
	    .get("/api/tags", async (req, res) => {
		    const tagsCount = await countPostsByTag(app)
		      res.writeHead(200, {"Content-Type": "application/json"})
          res.end(JSON.stringify(tagsCount));
	      
      })

		   .get("/api/tags/:tag", async (req, res) => {
			      const tag = req.params.tag
			      // List of posts matching the `:tag` request parameter
			      const postsByTag = await getPostsByTag(app, tag)
           res.writeHead(200, {"Content-Type": "application/json"})
           res.end(JSON.stringify(postsByTag));
	         
       })

}
