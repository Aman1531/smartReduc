import { app } from "./functions/initialize.js"
import { settings } from "./config/settings.js"
import { transformLinksToObjects } from "./functions/helpers/transformLinksToObjects.js"
import { apiRoutes } from "./routes/api/posts.js"
import { loginRoute } from "./routes/login.js"

// 404 Route
// Routes
import { loadAdminRoutes, loadThemeRoutes } from "./functions/loadRoutes.js"

loadAdminRoutes()
//loadThemeRoutes()
apiRoutes(app)
loginRoute(app,settings.adminPass)
app.startServer()
