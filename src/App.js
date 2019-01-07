import React, { Component } from 'react'
// You can import style files in ./App.js and add global styles in ./App.css
import '@progress/kendo-theme-default/dist/all.css'
import logo from './logo.svg'
import './App.css'

// Import the Grid component.
import { Grid, GridColumn } from '@progress/kendo-react-grid'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        { ProductName: 'Chai', Price: 10, Quantity: 7 },
        { ProductName: 'Chang', Price: 20, Quantity: 8 },
        { ProductName: 'Chai', Price: 10, Quantity: 7 },
        { ProductName: 'Chang', Price: 20, Quantity: 8 },
        { ProductName: 'Chai', Price: 10, Quantity: 7 },
        { ProductName: 'Chang', Price: 20, Quantity: 8 },
        { ProductName: 'Chai', Price: 10, Quantity: 7 },
        { ProductName: 'Chang', Price: 20, Quantity: 8 },
        { ProductName: 'Chai', Price: 10, Quantity: 7 },
        { ProductName: 'Chang', Price: 20, Quantity: 8 },
        { ProductName: 'Chai', Price: 10, Quantity: 7 },
        { ProductName: 'Chang', Price: 20, Quantity: 8 },
        { ProductName: 'Chai', Price: 10, Quantity: 7 },
        { ProductName: 'Chang', Price: 20, Quantity: 8 }
      ],
      title: 'This is my APP'
    }
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.title} </h1>
        <Grid data={this.state.data}>
          <GridColumn field="ProductName" title="Product" />
          <GridColumn field="Price" />
          <GridColumn field="Quantity" title="How Many" />
        </Grid>
      </div>
    )
  }
}

export default App
