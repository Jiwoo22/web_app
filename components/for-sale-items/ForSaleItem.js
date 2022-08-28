import Card from "../ui/Card";
import classes from "./ForSaleItem.module.css";
import Image from "next/image";

const ForSaleItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.description} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            {/* <h3>{props.price}</h3> */}
        </div>
        <div className={classes.actions}>
            <button>Send Message</button>
        </div>
      </Card>
    </li>
  );
};

export default ForSaleItem;
