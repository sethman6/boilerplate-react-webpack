import React from 'react'
import Search from './Search'
import getNotice from '../api'

const flexContainer = {
  display: "flex",
  flexDirection:"column"
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.setData = this.setData.bind(this)
  }

  componentDidMount() {
    getNotice(this.setData)
  }

  setData(err, noticeData) {
    if (!err) {
      this.setState({ data: noticeData })
      console.log(noticeData)
    }
  }

  render() {
    return (
      <div>
        <h1>Auckland Transport Information Site</h1>
        <div className="flex-container" style={flexContainer}>
          {this.state.data.map(notice => {
            return <Notice data = {notice} key = {notice.id}/>
          })}
        </div>

      </div>
    )
  }
 }
// //search code to be incorporated :
// <div class="row">
//                 <div class="col-lg-12">
//                     <div class="bs-component">
//                         <form class="well form-search" id="search-by-title-form" onsubmit="return false;">
//                         <fieldset>
//                             <legend>By Title</legend>
//                         </fieldset>
//                         <div>
//                             <label class="control-label" for="t">Title:</label>
//                             <input type="text" id="t" name="t" class="input-small">
//                             &nbsp;&nbsp;
//                             <label class="control-label" for="y">Year:</label>
//                             <input type="text" id="y" name="y" class="input-small" style="width: 100px;">
//                             &nbsp;&nbsp;
//                             <label class="control-label">Plot:</label>
//                             <select name="plot" style="width: 100px;">
//                                 <option value="" selected="">Short</option>
//                                 <option value="full">Full</option>
//                             </select>
//                             &nbsp;&nbsp;
//                             <label class="control-label">Response:</label>
//                             <select name="r" style="width: 100px;">
//                                 <option value="">JSON</option>
//                                 <option value="xml">XML</option>
//                             </select>
//                             &nbsp;&nbsp;
//                             <button id="search-by-title-button" type="button" class="btn-sm btn-primary">Search</button>
//                             <button id="search-by-title-reset" type="reset" class="btn-sm">Reset</button>
//                         </div>
//                         <div class="hide" id="search-by-title-request">
//                             <br />
//                             <p>Request:</p>
//                             <pre class="alert alert-box"><a href="javascript:;" target="_blank"></a></pre>
//                         </div>
//                         <div id="search-by-title-progress" class="hide progress progress-info progress-striped active">
//                             <div class="progress-bar" style="width: 100%;">
//                             </div>
//                         </div>
//                         <div class="hide" id="search-by-title-response">
//                             <p>Response:</p>
//                             <pre class="alert alert-success" style="margin-bottom: 0px; white-space: normal;"></pre>
//                         </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
