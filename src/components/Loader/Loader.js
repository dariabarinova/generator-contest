import { connect } from 'react-redux';
import { Ui } from '../..';
import { selector as isAppLoaded } from './loaderReducer';

const decorator = connect(
  state => ({
    visible: !isAppLoaded(state),
  }),
);

export default decorator(Ui.Loader);
