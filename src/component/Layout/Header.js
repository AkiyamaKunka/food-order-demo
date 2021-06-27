import classes from './Header.module.css'
import backgroundPhoto from '../../assets/meals.jpeg'
import HeaderCartButton from './HeaderCartButton'




const Header = (props) => {
    return(
        <>
            <header className={classes.header}>
                <h1>React Food</h1>
                <HeaderCartButton onCartDisplay={props.onCartDisplay} />
            </header>

        <div className={classes['main-image']}>
            {/*remember this is how we import the css class with dash naming*/}
            <img src={backgroundPhoto} alt='background'/>
        </div>
        </>
    )
}

export default Header;