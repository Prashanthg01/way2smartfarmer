import Dropdown from 'react-bootstrap/Dropdown';
import home from '../images/Home.png';
import Agritech from '../images/Agritech.png';
import Agriclinic from '../images/Agri_cliniic.png';
import Market from '../images/Market_mitra.png';
import Knowledge from '../images/Knowledge_center.png';
import About from '../images/About_us.png';
import Contact from '../images/Contact_us.png';
import {
  Sub_Know_Clinic,
  Sub_Know_Market,
  Sub_Know_PPP,
  Sub_Know_Tech,
} from '../Category/Subdrop';

export function One() {
  return (
    <>
      <Dropdown>
      <a href='/'>
        <img src={home} alt="Home" />
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          home
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            About Way2SmartFarmer
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Agritech</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Agri clicic</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Market Mitra</Dropdown.Item>
          <Dropdown.Item href="#/action-4">
            How Way2SmartFarmer works?
          </Dropdown.Item>
        </Dropdown.Menu>
        </a>
      </Dropdown>
    </>
  );
}

export function Two() {
  return (
    <>
      <Dropdown>
      <a href='/products?category=Agritech'>
        <img src={Agritech} alt="Home" />
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Agritech
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Farm machineries
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Power weeder</Dropdown.Item>
        </Dropdown.Menu>
        </a>
      </Dropdown>
    </>
  );
}

export function Three() {
  return (
    <>
      <Dropdown>
      <a href='/products?category=Agriclinic'>
        <img src={Agriclinic} alt="Home" />
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Agri clicic
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            PGR
          </Dropdown.Item>
          <Sub_Know_PPP />
        </Dropdown.Menu>
        </a>
      </Dropdown>
    </>
  );
}

export function Four() {
  return (
    <>
      <Dropdown>
      <a href='/products?category=Market'>
        <img src={Market} alt="Home" />
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Market Mitra
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Coffee
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Arecanut</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Pepper</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Coconut</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Cashew</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Maize</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Tur</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Cotton</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Onion</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Tomato</Dropdown.Item>
        </Dropdown.Menu>
        </a>
      </Dropdown>
    </>
  );
}

export function Five() {
  return (
    <>
      <Dropdown>
      <a href='/products?category=Knowledge'>
        <img src={Knowledge} alt="Home" />
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Knowledge center
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Sub_Know_Tech />
          <Sub_Know_Clinic />
          <Sub_Know_Market />
        </Dropdown.Menu>
        </a>
      </Dropdown>
    </>
  );
}

export function Six() {
  return (
    <>
      <Dropdown>
      <a href='/products?category=About'>
        <img src={About} alt="Home" />
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          About us
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Our Background
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Online services</Dropdown.Item>
        </Dropdown.Menu>
        </a>
      </Dropdown>
    </>
  );
}

export function Seven() {
  return (
    <>
      <Dropdown>
      <a href='/products?category=Contact'>
        <img src={Contact} alt="Home" />
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Contact us
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Contact
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Location</Dropdown.Item>
        </Dropdown.Menu>
        </a>
      </Dropdown>
    </>
  );
}
