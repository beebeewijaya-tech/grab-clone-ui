import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function Ovo(props) {
  return (
    <Svg
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={17.5} cy={17.5} r={16.5} stroke="#CDCDCD" strokeWidth={2} />
      <Path
        d="M8.533 17.771c0-.62.121-1.18.363-1.675a2.758 2.758 0 011.02-1.149 2.79 2.79 0 011.494-.404c.863 0 1.56.299 2.092.897.535.597.803 1.392.803 2.384v.076c0 .618-.12 1.172-.358 1.665a2.67 2.67 0 01-1.013 1.142c-.438.273-.942.41-1.512.41-.86 0-1.557-.299-2.092-.896-.531-.598-.797-1.389-.797-2.373v-.076zm1.09.13c0 .703.162 1.267.486 1.693.329.425.766.638 1.313.638.55 0 .988-.214 1.312-.644.325-.434.487-1.04.487-1.817 0-.695-.166-1.257-.498-1.687a1.564 1.564 0 00-1.313-.65c-.535 0-.967.213-1.295.638-.328.426-.492 1.035-.492 1.828zm8.04 1.628l1.57-4.869h1.107L18.066 21h-.826l-2.297-6.34h1.108l1.611 4.87zm3.339-1.758c0-.62.121-1.18.363-1.675a2.758 2.758 0 011.02-1.149 2.79 2.79 0 011.494-.404c.863 0 1.56.299 2.092.897.535.597.802 1.392.802 2.384v.076c0 .618-.119 1.172-.357 1.665a2.67 2.67 0 01-1.014 1.142c-.437.273-.941.41-1.511.41-.86 0-1.557-.299-2.092-.896-.531-.598-.797-1.389-.797-2.373v-.076zm1.09.13c0 .703.162 1.267.486 1.693.328.425.766.638 1.313.638.55 0 .988-.214 1.312-.644.324-.434.486-1.04.486-1.817 0-.695-.166-1.257-.498-1.687a1.564 1.564 0 00-1.312-.65c-.535 0-.967.213-1.295.638-.328.426-.492 1.035-.492 1.828z"
        fill="#8169A3"
      />
    </Svg>
  );
}

export default Ovo;