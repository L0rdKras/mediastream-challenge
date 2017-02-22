'use strict';

console.log(`
4.
---

We require a 'List' component that will receive an array of dates (formated as ISO Dates (Date-Time))
and it has to render those to 'Row' components.

This 'Row' component can be as simple as you want,
but it must display the dates like the following example: '(12/jun/2013)'
and on click must 'alert()' its index in the list.

Also, the 'List' component should receive an optional child as a header.
Remember to validate the props.

The implementation **must focus on performance**.

Take a look at the MyApp component, you should not modify it.

NOTE: You can use ES7+ here and install any library not tied to React.
Example:
- lodash: OK
- react-dates: NOPE
`);

import React from 'react';

export default class MyApp extends React.Component {
  render() {
    const dates = ['2017-02-20T13:33:52.889Z', '2013-06-25T14:31:24.888Z'];

    return (
      <div>
        <h1>04 - React</h1>
        <List dates={dates} />
        <hr />
        <List dates={dates}>
          <h1>Optional Header</h1>
        </List>
      </div>
    );
  }
}


class List extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    let Titulo = 'Titulo Default'
    if (this.props.children) Titulo = this.props.children.props.children
    const dates = this.props.dates
    const listItems = dates.map((date) =>
      <Row showDate={date} key={date} />
    )
    if(this.props.dates.length>0)
      return (
        <div>
          <h1>{Titulo}</h1>
          {listItems}
        </div>
      )
    return null;
  }
}

class Row extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return(<h2 onClick={this.handleOnClick.bind(this)}>{this.convertirFecha(this.props.showDate)}</h2>)
  }
  convertirFecha (data){
    const date = new Date(data);
    const year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }

    const months = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    return dt +'-' + months[month] + '-'+year
  }

  handleOnClick (event) {
    alert(event.target.textContent)
  }
}
