import { Anchor, GitCommit, HelpCircle } from 'react-feather'
import styles from './menubar.module.css'

export default function Menubar()
{
    return(
    <div className={`pt-2 mt-0 mb-auto h-100 w-12 ${styles.lwbMenubar}`}>
        <ul className={`nav align-top`}>
          <li className={` ${styles.navbox}`}>
            <a style={{'textDecoration': 'none'}}><span ><Anchor size="18"/> &nbsp; Add State</span></a>
          </li>
          <li className={` ${styles.navbox}`}>
            <a sstyle={{'textDecoration': 'none'}}><span ><GitCommit size="18"/> &nbsp; Add Connection</span></a>
          </li>
          <li className={` ${styles.navbox}`}>
            <a style={{'textDecoration': 'none'}}><span ><HelpCircle size="18"/> &nbsp; Add Condition</span></a>
          </li>
        </ul>
      </div>
    )
}