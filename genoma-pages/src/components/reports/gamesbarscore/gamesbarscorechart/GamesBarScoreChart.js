import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Score 1", Scores: 45 },
  { name: "Score 2", Scores: 35 },
  { name: "Score 3", Scores: 35 },
  { name: "Score 4", Scores: 32 },
  { name: "Score 5", Scores: 28 },
  { name: "Score 6", Scores: 28 },
  { name: "Score 7", Scores: 32.5 },
  { name: "Score 8", Scores: 40 },
  { name: "Score 9", Scores: 35 },
  { name: "Score10", Scores: 35 },
  { name: "Score11", Scores: 40 },
  { name: "Score12", Scores: 35 },
  { name: "Score13", Scores: 38 },
  { name: "Score14", Scores: 42 },
  { name: "Score15", Scores: 46 }
];

const initialState = {
  data,
  opacity: 1
};

export default class GamesBarScoreChart extends Component {
  state = initialState;

  render() {
    const { data } = this.state;

    return (
      <ResponsiveContainer width="101%" height="94%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 20, left: 15, bottom: 5 }}
          style={{ background: "#ffa41f", borderRadius: 2 }}
          layout="vertical"
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <CartesianGrid stroke="#ffb343" />
          <Tooltip />
          <Bar dataKey="Scores" fill="#ffdfaf" barSize={6} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
