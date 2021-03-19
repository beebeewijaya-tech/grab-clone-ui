import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Wallet(props) {
  const {color = '#979797'} = props;
  return (
    <Svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.312 3.72a.745.745 0 00-.532-.22h-.53V2.25a.75.75 0 00-.75-.75H2.707A2.207 2.207 0 00.5 3.707v8.586A2.207 2.207 0 002.707 14.5h12.044a.752.752 0 00.75-.748l.03-9.5a.744.744 0 00-.22-.531zm-.81 9.78H2.707A1.207 1.207 0 011.5 12.293V3.707A1.207 1.207 0 012.707 2.5H13.25v1H2.75v1h11.78l-.028 9z"
        fill={color}
      />
      <Path d="M12.25 8.25h1v1h-1v-1z" fill={color} />
    </Svg>
  );
}

export default Wallet;
