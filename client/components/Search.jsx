import React from 'react'
import {getYoda} from '../api'

class searchBar extends React.Component {
  render () {
    return (
      <div>
          <h1 className="title is-1">Movies</h1>
        <div className="flex">
          {this.props.movies.map((movie, i) => {
            return (
              <div className="column is-4" key={i}>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-720x128">
                        <img src={`https://image.tmdb.org/t/p/w640/${movie.posterPath}`} alt="Image"/>
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{movie.title}</p>
                    </div>
                  </div>
              </div>
            )
          })}
        </div> 
      </div>
    )
  }
}

export default (searchBar) 