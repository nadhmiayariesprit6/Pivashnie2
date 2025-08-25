
const elementsToRemove =
	'.ticker_stream,' +
	'.ego_column,' +
	'#pagelet_games_rhc,' +
	'#pagelet_trending_tags_and_topics,' +
	'#pagelet_canvas_nav_content';

const elementsToEmpty =
	'[id^=topnews_main_stream],' +
	'[id^=mostrecent_main_stream],' +
	'[id^=pagelet_home_stream]';

const removeNode = ( node ) => node.parentNode.removeChild( node );

const removeChildren = ( node ) => {
	while ( node.firstChild ) {
		node.removeChild( node.firstChild );
	}
}

export default function() {
	document.querySelectorAll( elementsToRemove ).forEach( removeNode );
	document.querySelectorAll( elementsToEmpty ).forEach( removeChildren );
}
