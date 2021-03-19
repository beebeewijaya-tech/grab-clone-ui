import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ChevronRight(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8 4l8 8-8 8"
        stroke="#979797"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ChevronRight;
