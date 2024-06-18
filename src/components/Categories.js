import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'state',
                    name: 'Стационарные'
                },
                {
                    key: 'portable',
                    name: 'Портативные'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.Categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories