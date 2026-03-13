import Svg, { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export const CameraIcon = ({ size = 24 }: Props) => (
  <Svg id="mini-photo-icon" width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 5L7.5 7H4C2.89543 7 2 7.89543 2 9V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V9C22 7.89543 21.1046 7 20 7H16.5L15 5H9Z"
      fill="#334155"
      stroke="#1e293b"
      stroke-width="0.5"
      stroke-linejoin="round"
    ></Path>

    <Circle cx="12" cy="13" r="5.5" fill="#475569"></Circle>
    <Circle cx="12" cy="13" r="4.8" fill="white"></Circle>

    <Rect x="18" y="9.2" width="2" height="1.2" rx="0.3" fill="#64748b"></Rect>

    <G id="miniature-line" transform="translate(12, 14.5)">
      <Ellipse cx="0" cy="1.6" rx="3.8" ry="0.8" fill="#1e293b"></Ellipse>

      <G transform="translate(-2.2, 0) scale(0.75)">
        <Path
          d="M-1.2 1.5C-1.2 1.5 -1.5 -1.5 0 -1.8C1.5 -1.5 1.2 1.5 1.2 1.5H-1.2Z"
          fill="#3b82f6"
        ></Path>
        <Circle cx="0" cy="-2.8" r="0.9" fill="#3b82f6"></Circle>
      </G>

      <G transform="translate(0, 0) scale(0.85)">
        <Path
          d="M-1.4 1.5C-1.4 1.5 -1.8 -1.5 0 -1.8C1.8 -1.5 1.4 1.5 1.4 1.5H-1.4Z"
          fill="#3b82f6"
        ></Path>
        <Circle cx="0" cy="-2.8" r="1.1" fill="#3b82f6"></Circle>
      </G>

      <G transform="translate(2.2, 0) scale(0.75)">
        <Path
          d="M-1.2 1.5C-1.2 1.5 -1.5 -1.5 0 -1.8C1.5 -1.5 1.2 1.5 1.2 1.5H-1.2Z"
          fill="#3b82f6"
        ></Path>
        <Circle cx="0" cy="-2.8" r="0.9" fill="#3b82f6"></Circle>
      </G>
    </G>
  </Svg>
);
