
import styles from './navbar.module.css'

export default function Navbar()
{
    return (
      <nav className="navbar navbar-expand-lg" style={{'backgroundColor' : 'var(--light-bg-primary)'}}>
        <div className="container-fluid">
          <a className={`navbar-brand ${styles.lwbBrand}`}>WF Builder</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className={`btn btn-outline-secondary ${styles.lwbAvatar}`}>SK</button>
            </form>
          </div>
        </div>
      </nav>
    )
}