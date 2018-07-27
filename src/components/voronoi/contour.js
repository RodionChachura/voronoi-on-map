import React from 'react'
import blue from '@material-ui/core/colors/blue';

export default ({ points }) => (
  <polygon
    points={points.map(p => p.array())}
    fill={'transparent'}
    strokeWidth={2}
    stroke={blue.A200}
  />
)