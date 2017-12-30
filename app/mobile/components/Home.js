import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Container, Content } from 'native-base';
import Footer from './Footer.js';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Content />
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = ({ guests }) => {
  return {
    guest_party: guests.guest_party
  };
};

export default connect(mapStateToProps, {})(Home);
