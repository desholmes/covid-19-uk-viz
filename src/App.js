import React from "react";
import axios from "axios";
import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class App extends React.Component {
  state = {
    totals: [],
  };

  componentDidMount() {
    axios.get(`https://covid-19-uk-api.dholmes.co.uk/uk/totals`).then((res) => {
      const totals = res.data;
      this.setState({ totals });
    });
  }

  render() {
    return (
      <div className="app">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={this.state.totals}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Line
              type="monotone"
              dataKey="tests"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            /> */}
            {/* <Line type="monotone" dataKey="confirmed_cases" stroke="#82ca9d" /> */}
            {/* <Line type="monotone" dataKey="deaths" stroke="red" /> */}
            {/* <Line type="monotone" dataKey="deaths_daily" stroke="black" /> */}
            <Line
              type="monotone"
              name="Daily Deaths (SMA7)"
              dataKey="deaths_daily_sma_7"
              stroke="red"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
