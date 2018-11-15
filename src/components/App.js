import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from './Main'
import * as actions from '../actions'

const mapStateToProps = ({ posts, comments }) => ({ posts, comments })
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

// TODO: `connect` the Main component and provide the needed arguments!
export default connect()
