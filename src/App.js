import './categories.styles.scss'
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';


const Shop = () => {
  return (
    <h1>Shop Page</h1>
  );
}

const App  = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
        <Route index element={ <Home /> } />
        <Route path="shop" element={ <Shop /> } />
        <Route path="sign-in" element={ <SignIn /> } />
      </Route>
    </Routes>
  );
};

export default App;

// const categories = [
//   {
//     "id": 1,
//     "title": "hats",
//     "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
//   },
//   {
//     "id": 2,
//     "title": "jackets",
//     "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
//   },
//   {
//     "id": 3,
//     "title": "sneakers",
//     "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
//   },
//   {
//     "id": 4,
//     "title": "womens",
//     "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
//   },
//   {
//     "id": 5,
//     "title": "mens",
//     "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
//   }
// ]

// const App = () => {

//   return (
//     <div className="categories-container">
//       <CategoriesMenu categories={ categories }/>
//     </div>
//   );
// }

// export default App;
