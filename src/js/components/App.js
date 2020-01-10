import React from "react"
import List from "./List"
import Form from "./Form"
import Post from "./Posts"
import Error from "./Error"

const App = () => (
  <>
  <div>
    <h2>Articles</h2>
    <List />
  </div>
  <div>
    <h2>Add a new article</h2>
    <Form />
  </div>
  <div>
    <h2>API posts</h2>
    <Post />
  </div>
  <div>
    <Error />
  </div>
  </>
);

export default App;