import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Navigation(props) {
  const {color = '#979797'} = props;
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 00.894-.686l5.595-17.032a1.005 1.005 0 00-.243-1.02 1.005 1.005 0 00-1.02-.243L2.688 8.736a1 1 0 00-.686.894zm16.464-3.971l-4.182 12.73-2.534-5.522a.998.998 0 00-.492-.492L5.734 9.841l12.732-4.182z"
        fill={color}
      />
    </Svg>
  );
}

export default Navigation;
