
import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';




const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);

export default ThemeSwitch;














