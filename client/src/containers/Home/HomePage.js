import React from 'react';
import Parts from 'containers/Parts/Parts';
import {withRouter} from 'react-router-dom';

const HomePage = () => (
	<div className='container-fluid center-block' style={{width: '80%', marginTop: '25vh'}}>
		<Parts />
	</div>
);

export default withRouter(HomePage);