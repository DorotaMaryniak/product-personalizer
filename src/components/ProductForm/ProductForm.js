import Button from '../Button/Button';
import styles from './ProductForm.module.scss'
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = props =>{

  const getPrice = (basePrice,currentSize) => {
    return basePrice + currentSize.additionalPrice;
  }

  const sentOrder = (event, title, basePrice, currentSize, currentColor) => {
    event.preventDefault();
    console.log(`
      Name: ${title}
      Price: ${getPrice(basePrice, currentSize)}
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
    <span className={styles.price}>Price: {getPrice(props.basePrice, props.currentSize)}$</span>
  </header>
  <form>
    <OptionSize sizes={props.sizes}
                currentSize={props.currentSize}
                setCurrentSize={props.setCurrentSize}/>

    <OptionColor  colors={props.colors}
                  currentColor={props.currentColor}
                  setCurrentColor={props.setCurrentColor}/>

    <Button onClick={ (event) => sentOrder(event, props.title, props.basePrice, props.currentSize, props.currentColor)} className={styles.button}>
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
  };
export default ProductForm;