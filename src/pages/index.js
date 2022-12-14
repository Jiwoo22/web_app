import ForSaleItemList from "../components/for-sale-items/ForSaleItemList";
// import { Amplify } from 'aws-amplify';
// import awsconfig from '../aws-exports'

// Amplify.configure(awsconfig);

const DUMMY_ITEMS = [
  {
    id: "i1",
    title: "Bycicle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/600px-Left_side_of_Flying_Pigeon.jpg",
    price: "$100",
    decription: "black bike",
  },
  {
    id: "i2",
    title: "Tennis Racket",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Squash-racquet-and-ball.jpg",
    price: "$100",
    decription: "black tennis racket",
  },
];

function HomePage() {
  return (
      <ForSaleItemList items={DUMMY_ITEMS} />
  );
}

export default HomePage;
