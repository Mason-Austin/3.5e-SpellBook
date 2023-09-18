import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAuth } from './context/authContext';
import Loading from '../components/Loading';
import Signin from '../components/Signin';
import NavBarAuth from '../components/NavBarAuth';
import DiceComponent from '../components/DiceRoller';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => {
  const { user, userLoading } = useAuth();
  const [showDice, setShowDice] = useState(false);

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  const toggleDice = () => {
    setShowDice(!showDice);
  };

  // what the user should see if they are logged in
  if (user) {
    return (
      <>
        <NavBarAuth toggleDice={toggleDice} /> {/* NavBar only visible if user is logged in and is in every view */}
        {showDice ? <DiceComponent /> : ''}
        <div className="container">
          <Component {...pageProps} />
        </div>
      </>
    );
  }

  return <Signin />;
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
