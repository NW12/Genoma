import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Score 1", Scores: 0 },
  { name: "Score 2", Scores: 30 },
  { name: "Score 3", Scores: 20 },
  { name: "Score 4", Scores: 30 },
  { name: "Score 5", Scores: 20 },
  { name: "Score 6", Scores: 40 },
  { name: "Score 7", Scores: 30 }
];

const initialState = {
  data,
  opacity: 1
};

class GameScoreChart extends Component {
  state = initialState;

  render() {
    const { data } = this.state;
    return (
      <ResponsiveContainer width="101%" height="94%">
        <LineChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          style={{ background: "#ff008a", borderRadius: 2 }}
        >
          <YAxis type="category" dataKey="name" />
          <XAxis type="number" xAxisId={1} orientation="bottom" />
          <CartesianGrid stroke="#ff63b8" />
          <Tooltip />
          <Line
            dataKey="Scores"
            type="monotone"
            stroke="#2ebed4"
            strokeWidth={3}
            xAxisId={1}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default GameScoreChart;
