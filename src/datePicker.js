import React, { Component } from 'react';
 
import MonthYearPicker from 'react-month-year-picker';
 
export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 10,
      year: 2019,
    };
  }
  render() {
    return (
      <div>
        <MonthYearPicker
          selectedMonth={this.state.month}
          selectedYear={this.state.year}
          minYear={2019}
          maxYear={2090}
          onChangeYear={year => this.setState({ year: year })}
          onChangeMonth={month => this.setState({ month: month })}
        />
        <h3>Selected month: {this.state.month}</h3>
        <h3>Selected year: {this.state.year}</h3>
      </div>
    );
  }
}