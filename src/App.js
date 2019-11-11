import React, {Component} from 'react';
import Articles from "./components/articles";
import './App.css';

class App extends Component {
  // Create a state to store the the output from our API request

  state = {
        articles: []
      }

      /*To fetch our contact list, we will use a componentDidMount() method in our App.js file.
      This method is executed immediately our component is mounted and we will also make our API request
      in that method. */

// Mount the data from the rails server
            componentDidMount() {
                    fetch('http://localhost:5000/api/v1/articles')
                    .then(res => res.json())
                    .then((data) => {
                      this.setState({ articles: data.data })
                      // data.data the 2nd.data is from the API from the Rails server
                      // if there is no higher level then dada is fine
                      // once you start getting more complex APIs then this has to be
                      // extended to take into account the JSON structure
                    })
                    .catch(console.log)
                  }


    render () {
      return (
        <div>
        <Articles articles={this.state.articles} />
        <center><em>&nbsp;--&nbsp;Link here for <a href="https://documenter.getpostman.com/view/9438658/SW7T6qef" target="_blank" rel="noopener noreferrer">API docs</a>--</em></center>
        </div>
        );
    }
  }

  export default App;
