import react, {useContext, useEffect} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";


const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0 );

    const btnClasses = `${classes.button} ${classes.bump}`;

    return (
         <button className={btnClasses} onClick = {props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
         {numberOfCartItems} 
        </span>
    </button>
)};

export default HeaderCartButton;