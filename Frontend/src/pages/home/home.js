import React, { Fragment, useEffect, useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { getForecastsLocations } from '../../actions/openWeatherMap';

const Home = () => {
  const [showLocationInformation, setShowLocationInformation] = useState(false);
  const [resizeHome, setResizeHome] = useState(12);
  const [locationInfo, setLocationInfo] = useState(null);
  const { markedLocation, data: locations } = useSelector(
    (state) => state.openWeatherMap
  );

  const dispatch = useDispatch();

  const handleGetLastDays = () => {
    dispatch(getForecastsLocations(markedLocation));
  }

  useEffect(() => {
    if (markedLocation) {
      setResizeHome(6);
      setShowLocationInformation(true);
      const location = locations.find(
        (location) => location.name === markedLocation
      );
      setLocationInfo(location);
    } else {
      setResizeHome(12);
      setShowLocationInformation(false);
    }
  }, [markedLocation]);

  return (
    <Fragment>
      <Row>
        <Col sm={12} md={resizeHome}>
          <Card>
            <Card.Body>
              <Card.Title>Home</Card.Title>
              <Card.Text>
                Welcome to a sample of my react skills together with nodejs.
              </Card.Text>
              <a target="_blank" href={`http://www.globalkernel.com`}>
                <Button variant="primary">
                  Do you want to see my personal site?
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        {showLocationInformation && (
          <Col sm={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{locationInfo.name}</Card.Title>
                <Card.Text>{JSON.stringify(locationInfo, null, 2)}</Card.Text>
                <Button variant="primary" onClick={()=>handleGetLastDays()}>Get last 5 days</Button>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Fragment>
  );
};

export default Home;
