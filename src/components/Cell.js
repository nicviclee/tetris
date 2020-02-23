import React from 'react';
import { StyledCell } from './styles/StyledCell'
import { TETROMINOS } from '../tetrominos'

const Cell = ({type}) => (
  <StyledCell type={type} color={TETROMINOS[type].colour}>
    {console.log("re-render")}
  </StyledCell>
);

// Optimization to only re-render cells that change
export default React.memo(Cell);
