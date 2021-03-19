import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function List(props) {
  const {color = '#979797'} = props;
  return (
    <Svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.5 6H12v1H7.5V6zM7.5 8H12v1H7.5V8zM7.5 10H12v1H7.5v-1zM7.5 12H12v1H7.5v-1zM5.5 4h1v1h-1V4zM5.5 6h1v1h-1V6zM5.5 8h1v1h-1V8zM5.5 10h1v1h-1v-1zM5.5 12h1v1h-1v-1zM7.5 4v1h4.33a3.724 3.724 0 01-.445-1H7.5z"
        fill={color}
      />
      <Path
        d="M14 6.61V16H4V2h7.39c.097-.353.245-.69.44-1H4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V6.75a3.745 3.745 0 01-1-.14z"
        fill={color}
      />
      <Path d="M15 5.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill={color} />
    </Svg>
  );
}

export default List;
