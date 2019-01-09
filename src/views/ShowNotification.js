import React, { Component } from 'react'
// You can import style files in ./App.js and add global styles in ./App.css
import '@progress/kendo-theme-material/dist/all.css'
import { NumericTextBox, Input, Switch } from '@progress/kendo-react-inputs'

import { Button } from '@progress/kendo-react-buttons'
import '../App.css'

// Import the Grid component.
import { Grid, GridColumn } from '@progress/kendo-react-grid'

class ShowNotification extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    console.log(this.state)
    const styles = {
      gridContainer: { height: '400px', width: '50%', justify: 'center' },
      button: {}
    }
    return (
      <div className="mw5 mw7-ns center bg-light-gray vh-100  pa3 ph5-ns">
        <div className=" vh-50 dib v-mid tc pa2">
          <div>
            <NumericTextBox label="Expected Salary" format="c" />
          </div>
          <div className="w-100">
            <Input value="First name" />
          </div>
        </div>
      </div>
    )
  }
}

export default ShowNotification
