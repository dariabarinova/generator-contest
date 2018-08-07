import { connect } from 'react-redux';
import { selector } from './fontLoadReducer';

const decorate = connect(
  state => ({
    isFontLoaded: selector(state),
  }),
);

export default decorate;
