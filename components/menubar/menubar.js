import { Anchor, GitCommit, HelpCircle } from 'react-feather'
import styles from './menubar.module.css'
import { useState } from 'react'


function PopupWindow({popupState}) 
{
  console.log("Inside popup")
  if (popupState.state) {
    console.log("Inside IF")
    return (<div className={`${styles.lwbPopup}`}> This is popup </div>)
  }
  else {
    console.log("Inside ELSE")
    return null;
  }
}

export default function Menubar() {

  let obj = {
    state: false,
    edge: false,
    condition: false
  }

  const [popupState, togglePopupState] = useState(obj)


  const handlePopupClick = (popupObj) => {

    //-------------------------------------------------------
    // BELOW SYNTAX WILL ONLY CLONE THE REFERENCE TO STATE
    // HENCE WHEN YOU WILL UPDATE ANY KEY INSIDE STATE AND WILL UPDATE THE STATE,
    // IT WILL NOT CONSIDER IT AS STATE UPDATE AND WILL NOT RE-RENDER THE COMPONENT
    //-------------------------------------------------------
    //let obj = popupState
    
    //-------------------------------------------------------
    // BELOW SYNTAX WILL CLONE THE OBJECT TO obj VARIABLE, THUS CREATING NEW REFERENCE.
    // HENCE WHEN YOU WILL UPDATE ANY KEY INSIDE STATE AND WILL UPDATE THE STATE,
    // IT WILL CONSIDER IT AS STATE UPDATE AND RE_RENDER THE COMPONENT 
    //-------------------------------------------------------
    let obj = {...popupState}

    
    if (popupState[popupObj]) {
      obj[popupObj] = false;
    }
    else {
      obj[popupObj] = true;
    }
    togglePopupState(obj)
    console.log("Final State : " + JSON.stringify(popupState))
  }


  return (
    <div className={`pt-2 mt-0 mb-auto h-100 w-12 ${styles.lwbMenubar}`}>
      <ul className={`nav align-top`}>
        <li className={` ${styles.navbox}`} onClick={() => handlePopupClick("state")}>
          <a style={{ 'textDecoration': 'none' }}><span ><Anchor size="18" /> &nbsp; Add State</span></a>
        </li>
        <li className={` ${styles.navbox}`} onClick={() => handlePopupClick("edge")}>
          <a sstyle={{ 'textDecoration': 'none' }}><span ><GitCommit size="18" /> &nbsp; Add Connection</span></a>
        </li>
        <li className={` ${styles.navbox}`} onClick={() => handlePopupClick("condition")}>
          <a style={{ 'textDecoration': 'none' }}><span ><HelpCircle size="18" /> &nbsp; Add Condition</span></a>
        </li>
      </ul>
      <PopupWindow popupState={popupState}/>
    </div>
  )
}