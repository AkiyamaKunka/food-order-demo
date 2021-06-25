import classes from './Header.module.css'
import backgroundPhoto from '../../photo/meals.jpeg'

const Header = () => {
    return(
        <div className={`${classes.header} ${classes.mainImage}`}>
            <h2>Hello !</h2>
            {/*don't know how to set the position of pic..*/}

            <img src={backgroundPhoto} alt='background'/>
        </div>
    )
}

export default Header;