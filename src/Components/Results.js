import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Results = props => {
	return (
		<div>
			<p>{props.finalAnswer}</p>
		</div>
	);
};

export default Results;