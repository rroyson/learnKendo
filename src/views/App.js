import React, { Component } from 'react'
// You can import style files in ./App.js and add global styles in ./App.css
import { Button } from '@progress/kendo-react-buttons'
import '../App.css'
import { Link } from 'react-router-dom'
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
        { ProductName: 'Chai', Price: 10, Quantity: 7, _id: '123' },
        { ProductName: 'Chang', Price: 20, Quantity: 8, _id: '32131' },
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
  }

  handleClick = e => {
    e.preventDefault()
    alert('you clicked it')
  }

  handleRowClick = e => {
    console.log('state', this.state)
    this.props.history.push({
      pathname: '/new',
      state: this.state.data
    })
  }

  render() {
    const styles = {
      gridContainer: { height: '400px', width: '50%', justify: 'center' },
      button: {}
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
          onRowClick={this.handleRowClick}
        >
          <GridColumn field="ProductName" title="Product" />
          <GridColumn field="Price" />
          <GridColumn field="Quantity" title="How Many" />
        </Grid>
        <Button
          onClick={this.handleClick}
          style={styles.button}
          icon="calendar"
        />{' '}
      </div>
    )
  }
}

export default App
