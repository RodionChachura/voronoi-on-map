import React from 'react'
import { blue } from '@material-ui/core/colors';

export default ({ points }) => (
  <polygon
    points={points.map(p => p.array())}
    strokeWidth={2}
    stroke={blue.A200}
    fill={blue[200]}
    opacity={0.2}
  />
)