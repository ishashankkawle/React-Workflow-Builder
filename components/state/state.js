import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import styles from './state.module.css'

function StateNode({ data, isConnectable }) {
    
    const onChange = (evt) => {
      console.log(evt.target.value);
    };


  return (
    <div className={`${styles.lwbStateNode}`}>
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <span>Title</span>
        <div className={`${styles.lwbStateNodeDivider}`}></div>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default StateNode;
