import ReactFlow from 'reactflow';
import styles from './board.module.css'
import 'reactflow/dist/style.css';

export default function Board({data})
{
    console.log(data.nodes)
    console.log(data.edges)
    
    return (
        <div style={{ width: '85%', height: '100%' }}>
          <ReactFlow nodes={data.nodes} edges={data.edges} />
        </div>
    );
}