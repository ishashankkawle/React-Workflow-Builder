import ReactFlow, { Background, Controls, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import styles from './board.module.css'
import 'reactflow/dist/style.css';
import { useCallback, useState } from 'react';
import StateNode from '../state/state';

export default function Board({data , nodeTypes})
{

  let[nodes , setNode] = useState(data.nodes)
  let[edges , setEdge] = useState(data.edges)

  const onNodesChange = useCallback(
    (changes) => setNode((nds) => applyNodeChanges(changes, nds)),
    [setNode]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdge((eds) => applyEdgeChanges(changes, eds)),
    [setEdge]
  );

  return (
      <div style={{ width: '85%', height: '100%' }}>
        <ReactFlow 
          nodes={nodes} 
          edges={edges} 
          onNodesChange={onNodesChange} 
          onEdgesChange={onEdgesChange} 
          fitView 
          nodeTypes={nodeTypes}>

            <Background variant='lines'/>
            <Controls style={{position: 'relative', width: '2%'}}/>
        </ReactFlow>
      </div>
  );
}