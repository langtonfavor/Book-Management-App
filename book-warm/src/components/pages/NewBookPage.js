import React from "react";
import SearchBookForm from "../forms/SearchBookForm";

class NewBookPage extends React.Component {
  state = {
    book: null
  }

  render(){
    return(
      <Segment>
        <h1>Add a Book.</h1>
        <SearchBookForm />
      </Segment>
    );
  }
}

export default NewBookPage;