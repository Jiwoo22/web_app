import ForSaleItem from "./ForSaleItem";
import classes from "./ForSaleItemList.module.css";

function ForSaleItemList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => {
         return <ForSaleItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          decription={item.decription}
        />;
      })}
    </ul>
  );
}

export default ForSaleItemList;
