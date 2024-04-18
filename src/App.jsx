import "./App.css";
import BoxColor from "./components/box-color/BoxColor";
import Carrousel from "./components/carrousel/Carrousel";
import IdCard from "./components/id-card/IdCard";
import Pictureclick from "./components/picture-click/Pictureclick";
import rick from './assets/images/pickleRick.jpg';
import glasses from './assets/images/glasses.png'
import idcardJson from './data/idcard.json'
import Dice from "./components/dice/dice";
import Drivercard from "./components/driver-card/Drivercard";
import Facebook from "./components/facebook/Facebook";
import Greetings from "./components/greetings/Greetings";
import ButtonLike from "./components/button-like/ButtonLike";
import Numbertable from "./components/number-table/Numbertable";
import Random from "./components/random/Random";
import ColorPicker from "./components/color-picker/ColorPicker";
import SignupPage from "./components/singup-page/SingupPage";
//import CreditCard from "./components/credit-cartd/CreditCard";

function App() {
  return (
    <>
      <div className="App">
        <h1> LAB | React Training</h1>
      </div>
      <div>
        <h2 className="title">IDCard</h2>
        <IdCard props={idcardJson[0]} />
        <IdCard user={idcardJson[1]} />
      </div>
      <div>
        <h2 className="title">BoxColor</h2>
        <BoxColor r={255} g={0} b={0}/>
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
        <h2 className="title">Carrousel</h2>
        <Carrousel 
          images={[
              "https://randomuser.me/api/portraits/women/4.jpg",
              "https://randomuser.me/api/portraits/men/4.jpg",
              "https://randomuser.me/api/portraits/women/3.jpg",
              "https://randomuser.me/api/portraits/men/3.jpg"
            ]} />
      </div>
      <div>
        <h2 className="title">clickable Picture</h2>
        <Pictureclick 
          img={rick} imgClick={glasses}
        />    

      </div>
      {/* <div>
      <h2 className="title">Credit Card</h2>
        <CreditCard />
      </div> */}
      <div>
        <h2 className="title">Dice</h2>
          <Dice />
      </div>
      <div>
        <h2 className="title">Driver card</h2>
        <Drivercard
          name="Travis kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE" 
          }}
        />
      </div>
      <div>
        <h2 className="title">Facebook</h2>
        <Facebook />
      </div>
      <div>
      <h2 className="title"><u>Greetings</u></h2>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">FranÇois</Greetings>
      </div>
      <div>
        <h2 className="title">Like Button</h2>
          <ButtonLike />
          <ButtonLike />
      </div>
      <div>
        <h2 className="title">Numbers of Table</h2>
          <Numbertable limit={12} />
      </div>
      <div>
        <h2 className="title">Random Number</h2>
        <Random min={1} max={6} />
        <Random min={10} max={100}/>
      </div>
      <div>
        <h2 className="title">Color PICKER (RGB)</h2>
        <ColorPicker />
      </div>
      <div>
        <h2 className="title">Signup Page</h2>
        <SignupPage />
      </div>
    </>
  );
}

export default App;
