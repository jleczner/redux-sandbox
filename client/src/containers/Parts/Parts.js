import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ReactEcharts from 'echarts-for-react';

import { isFetchingSelector, partsSelector } from './partsSelectors';
import { fetchAllParts } from './partsActions';

class Parts extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.loadData();
	}

	loadData() {
		this.props.dispatch(fetchAllParts());
	}

	getOption() {
		const ids = this.props.parts ? this.props.parts.map(part => part.id) : [];
		const names = this.props.parts ? this.props.parts.map(part => part.name): [];

		return {
			legend: {
				data: ['Parts']
			},
			series: [{
				data: ids,
				name: 'Parts',
				type: 'bar'
			}],
			title: {
				text: 'Example'
			},
			tooltip: {},
			xAxis: {
				data: names
			},
			yAxis: {}
		};
	}

	render() {
		return (
			this.props.isFetching ? (
				<div>Loading...</div>
			) : (
				<ReactEcharts option={this.getOption()} height='50vh' />
			)
		);
	}
}

Parts.propTypes = {
	dispatch: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired,
	parts: PropTypes.array
};

const mapStateToProps = (state) => {
	return {
		isFetching: isFetchingSelector(state),
		parts: partsSelector(state),
	};
};

export default connect(mapStateToProps)(Parts);