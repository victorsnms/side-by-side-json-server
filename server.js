const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001;

app.db = router.db;

const rules = auth.rewriter({
  "/users*": "/640/users$1",
  "/markers*": "/660/markers$1",
  "/wastecol*": "/640/wastecol$1",
  "/events*": "/640/events$1",
});

var cors = require("cors");
app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
