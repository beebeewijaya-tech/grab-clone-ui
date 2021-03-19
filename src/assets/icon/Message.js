import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Message(props) {
  const {color = '#979797'} = props;
  return (
    <Svg
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        clipRule="evenodd"
        d="M16.5 3.5a2 2 0 012 2v10a2 2 0 01-2 2l-2.999-.001-2.294 2.294a1 1 0 01-1.32.083l-.094-.083-2.294-2.294L4.5 17.5a2 2 0 01-2-2v-10a2 2 0 012-2h12z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.499 11.5c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1zm-4 0c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1zm8 0c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1z"
        fill={color}
      />
    </Svg>
  );
}

export default Message;
