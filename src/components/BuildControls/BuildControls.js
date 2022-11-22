import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const BuildControls = props => {
  return (
    <div className='BuildControls'>
      <p>Current Price: <strong>{props.price} TG</strong></p>
      {Object.keys(props.ingredients).map(ingType => {
        return <BuildControl 
          key={ingType} 
          type={ingType} 
          added={() => props.ingredientAdded(ingType)}
          removed={() => props.ingredientRemoved(ingType)}
          disabledInfo={props.disabledInfo[ingType]}
        />
      })}
    </div>
  )
}

export default BuildControls;
