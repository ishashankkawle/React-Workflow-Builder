'use client';
import { Anchor, GitCommit, HelpCircle, PlusSquare } from 'react-feather';
import styles from './page.module.css'
import Navbar from '@/components/navbar/navbar';
import Menubar from '@/components/menubar/menubar';
import { useState } from 'react';
import Board from '@/components/board/board';

export default function workflow() {

  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } }
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
  let [state , updateState] = useState({nodes : initialNodes , edges : initialEdges});

  return (
    <div className={`row mb-0 p-0 gx-0 h-100`}>      
      <Navbar />
      <Menubar />
      <Board data={state} />
    </div>
  )
}