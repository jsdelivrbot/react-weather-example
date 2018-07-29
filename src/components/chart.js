import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { average, round } from "../utlis/maths";

const avg = nums => round(average(nums), 2);
const max = nums => round(Math.max(...nums), 2);
const min = nums => round(Math.min(...nums), 2);

export default ({ data, color, units }) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Average: {avg(data)} {units}</div>
      <div>Min: {min(data)} {units}</div>
      <div>Max: {max(data)} {units}</div>
    </div>
  );
};
