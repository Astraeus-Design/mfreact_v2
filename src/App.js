/*import logo from './logo.svg';*/
import './App.css';
import CreateBioCard from'./CreateCard';
import {faker} from '@faker-js/faker';
/*import './index.css';*/
/*import './card.css';
import './card.min.css';*/

/* trying to locate where the css styling is for this generated card html */
/* including index.css causes a cookie request error, have left it with App.css as default until I fathom out how to import */

function App() {

  const personObj={};

  /* acquire data from faker? to enter into bio card */

  personObj.image=faker.image.avatar();
  personObj.name=faker.name.fullName({sex:'male'});
  personObj.profile='https://www.google.com';

  return (
    <div className="App">
      <h3>A dynamically generated react biocard</h3>
      <CreateBioCard personid={personObj}/>
    </div>
  );
}

export default App;
