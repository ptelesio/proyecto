import React, { Fragment,useEffect } from 'react';
import {Navbar, Nav, NavDropdown, Badge} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { getLocations,setMarkedLocation } from '../../actions/openWeatherMap';

const HomeHead = () => {

  const { data:locations, error } = useSelector(state => state.openWeatherMap);
  const dispatch = useDispatch();

  const handleChangeLocation = (location) => {
    dispatch(setMarkedLocation(location));
  }

  useEffect(() => {
    dispatch(getLocations());
  }, [])

  return (
      <Fragment>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/#/home">Open Weather Map</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/#/home">Home</Nav.Link>
                    {error ? <Fragment>
                      <Badge variant="danger">{`Error`}</Badge>
                    </Fragment>:
                    <Fragment>
                        <NavDropdown title="Get time to" id="basic-nav-dropdown">
                        {
                          locations.map((location,idx)=>{
                            return <NavDropdown.Item key={idx} onClick={()=>handleChangeLocation(location.name)}>{location.name}</NavDropdown.Item>
                          })
                        }
                      </NavDropdown>
                    </Fragment>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Fragment>
  );
};

export default HomeHead;