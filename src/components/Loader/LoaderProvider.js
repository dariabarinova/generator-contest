import { connect } from 'react-redux';
import { selector as isAppLoaded } from './loaderReducer';

export default connect(
  state => ({
    visible: !isAppLoaded(state),
  }),
)(
  ({ visible, children }) => children({ visible }),
);
