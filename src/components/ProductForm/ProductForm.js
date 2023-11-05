import Button from '../Button/Button';
import styles from './ProductForm.module.scss'
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = props =>{

  const sentOrder = (event, title, totalPrice, currentSize, currentColor) => {
    event.preventDefault();
    console.log(`
      Name: ${title}
      Price: ${totalPrice}
      Size: ${currentSize.name}
      Color: ${currentColor}
    `);
    props.setCurrentColor(props.colors[0]);
    props.setCurrentSize(props.sizes[0]);
  };


  return(
  <div>
  <header>
    <h2 className={styles.name}>{props.title}</h2>
    <span className={styles.price}>Price: {props.totalPrice}$</span>
  </header>
  <form>
    <OptionSize sizes={props.sizes}
                currentSize={props.currentSize}
                setCurrentSize={props.setCurrentSize}/>

    <OptionColor  colors={props.colors}
                  currentColor={props.currentColor}
                  setCurrentColor={props.setCurrentColor}/>

    <Button onClick={ (event) => sentOrder(event, props.title, props.totalPrice, props.currentSize, props.currentColor)} className={styles.button}>
                     <span className="fa fa-shopping-cart" />
    </Button>
  </form>
</div>
  )
}
ProductForm.propTypes = {
    title: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.object.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    totalPrice:PropTypes.number.isRequired,
  };
export default ProductForm;