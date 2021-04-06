import React, { Fragment } from 'react';
import HomeHead from './homeHead';
import HomeFooter from './homeFooter';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import routes from '../../routes';

const HomeLayout = () => {
  const {home} = routes;
  return (
      <Fragment>
        <HomeHead/>
        <Container>
          <Row className={`mt-5 mb-5`}>
            <Col>
            <Switch>
              {home.map((route, idx) => (
                  <Route
                    key={idx}
                    path={route.path}
                    render={props => (
                      <route.component {...props} name={route.name} />
                    )}
                  />
                )
              )}
              <Redirect from="/" to="/home" />
            </Switch>
            </Col>
          </Row>
        </Container>
        <HomeFooter/>
      </Fragment>
  );
};

export default HomeLayout;