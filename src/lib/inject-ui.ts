var React = require('react');
var ReactDOM = require('react-dom');

import handleError from './handle-error';
import { Provider } from 'react-redux';
import { createStore } from '../store';
var NewsFeedEradicator = require('../components/index.jsx');

const storePromise = createStore();

export function isAlreadyInjected() {
	return document.querySelector( '#nfe-container' ) != null;
}

export default function injectUI( streamContainer: Element ) {
	var nfeContainer = document.createElement("div");
	nfeContainer.id = "nfe-container";
	streamContainer.appendChild(nfeContainer);

	storePromise.then( ( store ) => {
		ReactDOM.render(
			React.createElement( Provider, {
				store: store,
				children: React.createElement( NewsFeedEradicator, null )
			} ),
			nfeContainer
		);
	} ).catch( handleError );
}
