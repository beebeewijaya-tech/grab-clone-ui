import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function Point(props) {
  return (
    <Svg
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={17.5} cy={17.5} r={16.5} stroke="#CDCDCD" strokeWidth={2} />
      <Path
        d="M24.92 13.596a.995.995 0 00-1.044-.144l-3.161 1.405-1.84-3.313a1 1 0 00-1.75 0l-1.84 3.313-3.162-1.405a1 1 0 00-1.38 1.142l1.59 6.771a.989.989 0 00.844.762c.134.018.27.008.4-.028a16.618 16.618 0 018.842 0 1.009 1.009 0 001.077-.371.99.99 0 00.167-.363l1.593-6.77a.994.994 0 00-.336-.999z"
        fill="#8169A3"
      />
    </Svg>
  );
}

export default Point;
