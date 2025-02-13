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
		.get("/api/search/:query", async (req, res) => {

				const { query } = req.params
				const reg = new RegExp(query, "gi")

				const posts = await processMarkdownPosts(app)
				const titleSearch = posts.filter((post) => post.frontmatter.title.match(reg))
				const contentSearch = posts.filter((post) => post.content.match(reg))

				// Concatenate the results of titleSearch and contentSearch
				const concat = titleSearch.concat(contentSearch)

				// Get the unique result(s) by removing duplicates from concat array
				const uniqueProps = []
				const result = concat.filter((post) => {
					const isDuplicate = uniqueProps.includes(post.frontmatter.title)

					if (!isDuplicate) {
						uniqueProps.push(post.frontmatter.title)

						return true
					}

					return false
				})
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(result))
    })

}
