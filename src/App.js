import React, { Component } from 'react'
// You can import style files in ./App.js and add global styles in ./App.css
import '@progress/kendo-theme-default/dist/all.css'
import './App.css'

// Import the Grid component.
import { Grid, GridColumn } from '@progress/kendo-react-grid'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      skip: 0,
      take: 5,
      title: 'This is my APP',
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
        { ProductName: 'Chang', Price: 20, Quantity: 8 },
        { ProductName: 'Chai', Price: 10, Quantity: 7 },
        { ProductName: 'Chang', Price: 20, Quantity: 8 }
      ]
    }
  }

  pageChange = event => {
    this.setState({
      skip: event.page.skip,
      take: event.page.take
    })
    console.log(this.state)
  }

  render() {
    const styles = {
      gridContainer: { height: '200px' }
    }
    return (
      <div className="App">
        <h1>{this.state.title} </h1>
        <Grid
          style={styles.gridContainer}
          data={this.state.data.slice(
            this.state.skip,
            this.state.take + this.state.skip
          )}
          skip={this.state.skip}
          take={this.state.take}
          pageable={true}
          onPageChange={this.pageChange}
          pageSize={5}
          total={this.state.data.length}
        >
          <GridColumn field="ProductName" title="Product" />
          <GridColumn field="Price" />
          <GridColumn field="Quantity" title="How Many" />
        </Grid>
      </div>
    )
  }
}

export default App
