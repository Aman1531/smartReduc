
export const loginRoute = (app,pass) => {
    app.get("/" , async (req , res)  => {
        res.render("/pages/login.html");
    })
        .post("/login", async (req, res) => {
            if (pass == req.body.password)
                res.redirect("/bd-admin");
            else
                res.redirect("/");
        })
    
}
