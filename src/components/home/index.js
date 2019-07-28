/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { showAuthModal, showRegistrationModal, toggleSubscribeModal } from '../../actions';
import {
  AuthModal,
  TrailerModal,
  Footer,
  SectionTitle,
  CourseCard,
  CardList,
  MusicIcon,
  SubscribeIcon,
  ShareIcon,
  ValuePropCard,
  ValuePropositions,
  FlatButton,
  ButtonText,
  SubscribeModal,
  PaymentModal,
} from '../common';

// Components
import Hero from './hero';

// Image Assets
import HeroImage3 from '../../assets/hero-image-3.jpeg';
import HeroImage4 from '../../assets/hero-image-8.jpg';
import HeroImage5 from '../../assets/hero-image-10.png';
import HeroImage from '../../assets/hero-image-12.jpg';

const FloatingActionBar = styled.div`
  position: fixed;
  top: 0px;
  transform: ${props => (props.show ? 'translateY(0px)' : 'translateY(-80px)')};
  z-index: 100;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  box-shadow: 2px 2px 66px -35px rgba(0, 0, 0, 0.75);
  background-color: #f4f4f4;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dfdfdf' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  transition: all 0.35s ease;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.scrollListener = this.scrollListener.bind(this);

    this.state = {
      showTrailerModal: false,
      showFloatingActionBar: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  // async handleFunction() {
  //   const testFunction = functions().httpsCallable('testFunction');
  //   const response = await testFunction({ message: 'Howdy!' });
  //   return console.log(response);
  // }

  scrollListener() {
    if (window.scrollY >= 800) {
      return window.scrollY >= document.getElementById('footer').offsetTop
        ? this.setState({ showFloatingActionBar: false })
        : this.setState({ showFloatingActionBar: true });
    }
    return this.setState({ showFloatingActionBar: false });
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { showRegistrationModal, user, toggleSubscribeModal } = this.props;
    const { showTrailerModal, showFloatingActionBar } = this.state;
    return (
      <div style={{ overflowX: 'hidden' }}>
        {/* Animated Hero Image and Featured Courses */}
        <Hero
          showRegistrationModal={showRegistrationModal}
          toggleTrailerModal={() => this.setState({ showTrailerModal: !showTrailerModal })}
          user={user}
          toggleSubscribeModal={toggleSubscribeModal}
        />

        {/* Recently Added Courses */}
        <div style={{ background: '#fff', paddingTop: 40, paddingBottom: 40 }}>
          <SectionTitle style={{ marginTop: 0 }}>Recently Added</SectionTitle>
          <CardList mini>
            <CourseCard
              backgroundImage={HeroImage3}
              title="BOI-1DA"
              tagline="Teaches Drumming"
              mini
            />
            <CourseCard
              backgroundImage={HeroImage4}
              title="Southside"
              tagline="Teaches Trap Production"
              mini
            />
            <CourseCard
              backgroundImage={HeroImage5}
              title="London on da track"
              tagline="Teaches FL Studio"
              mini
            />
            <CourseCard
              backgroundImage={HeroImage}
              title="London on da track"
              tagline="Teaches FL Studio"
              mini
            />
          </CardList>

          {/* Value Propositions */}
          <ValuePropositions>
            <ValuePropCard
              icon={<MusicIcon />}
              title="Learn"
              description="Learn from world-class producers, sound engineers and music artists"
            />
            <ValuePropCard
              icon={<SubscribeIcon />}
              title="Engage"
              description="Share your music for helpful feedback and a chance to work with a producer"
            />
            <ValuePropCard
              id="my-classes"
              icon={<ShareIcon />}
              title="Subscribe"
              description="Purchase an all-access pass to all of our classes, samples and future content"
              style={{ borderRight: '0px', borderBottom: '0px' }}
            />
          </ValuePropositions>

          {/* My Classes */}
          <SectionTitle>My Classes</SectionTitle>
          <CardList>
            <CourseCard backgroundImage={HeroImage3} title="BOI-1DA" tagline="Teaches Drumming" />

            <CourseCard
              backgroundImage={HeroImage4}
              title="Southside"
              tagline="Teaches Trap Production"
            />
          </CardList>

          {/* Available Courses */}
          <SectionTitle>Now Available</SectionTitle>
          <CardList>
            <CourseCard backgroundImage={HeroImage3} title="BOI-1DA" tagline="Teaches Drumming" />

            <CourseCard
              backgroundImage={HeroImage4}
              title="Southside"
              tagline="Teaches Trap Production"
            />
            <CourseCard
              backgroundImage={HeroImage5}
              title="London on da track"
              tagline="Teaches FL Studio"
            />
            <CourseCard
              backgroundImage={HeroImage}
              title="London on da track"
              tagline="Teaches FL Studio"
            />
          </CardList>

          {/* Coming Soon */}
          <SectionTitle id="comingSoon">Coming Soon</SectionTitle>
          <CardList>
            <CourseCard
              backgroundImage={HeroImage4}
              title="Southside"
              tagline="Teaches Trap Production"
              disabled
            />
            <CourseCard
              backgroundImage={HeroImage5}
              title="London on da track"
              tagline="Teaches FL Studio"
              disabled
            />
            <CourseCard
              backgroundImage={HeroImage}
              title="London on da track"
              tagline="Teaches FL Studio"
              disabled
            />
          </CardList>
        </div>

        <Footer />

        <FloatingActionBar show={user ? false : showFloatingActionBar}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <FlatButton
              onClick={() => showRegistrationModal(true)}
              style={{ width: 160, marginRight: 10 }}
            >
              <ButtonText>Enroll</ButtonText>
            </FlatButton>
            <FlatButton
              onClick={() => this.setState({ showTrailerModal: true })}
              style={{ width: 160, backgroundColor: 'rgba(0, 0, 0, 0.275' }}
            >
              <ButtonText>Preview</ButtonText>
            </FlatButton>
          </div>
        </FloatingActionBar>

        {/* Modals */}
        <AuthModal />
        <TrailerModal
          open={showTrailerModal}
          close={() => this.setState({ showTrailerModal: false })}
        />
        <SubscribeModal />
        <PaymentModal />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  email: state.auth.email,
  error: state.auth.error,
  loading: state.auth.loading,
  showModal: state.auth.showModal,
});

export default connect(
  mapStateToProps,
  { showAuthModal, showRegistrationModal, toggleSubscribeModal },
)(Home);
