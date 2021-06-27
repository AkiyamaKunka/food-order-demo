import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
import Cart from '../Cart/Cart'

const Backdrop = () => {
    return (
        <>
            <div className={classes.backdrop}/>
        </>
    )
}


const SubModal = (props) => {
    return (
        <>
            <div className={classes.modal}>
                {props.children}
            </div>
        </>
    )
}


const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<SubModal>{props.children}</SubModal>, document.getElementById('cartLayer'))}
        </>
    )
}

export default Modal