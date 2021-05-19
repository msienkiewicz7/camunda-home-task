import React, { Component } from "react";

import Fuse from "fuse.js"

import SearchField from "../components/SearchField"
import SearchResult from "../components/SearchResult";
import items from "./items";

export default class FrameworksPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      searchResults: [],
      frameworks: [],
      fuse: new Fuse([], {})
    }
  }

  componentDidMount() {
    // fetch frameworks data from API
    // here simple import of static data
    this.setState({
      frameworks: items,
      fuse: new Fuse(items, {
        includeScore: true,
        minMatchCharLength: 3,
        keys: ['title', 'description']
      })
    })
  }

  updateSearch = (search) => {
    const searchResults = this.state.fuse.search(search)
    this.setState({ 
      search,
      searchResults 
    })
  }

  getSearchInfoText = (search, searchResults) => {
    if(!search) {
      return "Find any framework by its name or description. Enter a query in the search input above and results will be displayed as you type."
    } else if(search !== "" && searchResults.length > 0) {
      return `Showing ${searchResults.length} framework${searchResults.length === 1 ? "" : "s"} matching "${search}".`
    } else {
      return `Oops! No results for "${search}".`
    }
  }




  render() {

    const { search, searchResults } = this.state

    const searchResultList = searchResults.map( (result, i) => 
      <SearchResult key={i} title={result.item.title} description={result.item.description}/>
    )

    const searchInfoText = this.getSearchInfoText(search, searchResults)

    return (
      <div className="frameworks-page page">
        <h1>Frameworks</h1>
        <SearchField value={search} onChangeText={this.updateSearch}/>
        <p>{searchInfoText}</p>
        <div className="search-results-container">
          {searchResultList}
        </div>

      </div>
    )
  }
}
