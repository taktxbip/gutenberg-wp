import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
// import save from './modules/save';
import EditItem from './edit-item';
import SaveItem from './save-item';
// import './style.scss';

registerBlockType( 'dev/item', {
	title: __( 'My Item', 'myblocks' ),
	description: __( 'Child Item', 'myblocks' ),
	parent: [ 'dev/myblocks' ],
	supports: {
		html: false,
		reusable: false,
	},
	attributes: {
		imageUrl: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		imageAlt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
		},
		imageId: {
			type: 'number',
		},
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2',
		},
		description: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},
	// "editorScript": "file:./build/index.js",
	// "editorStyle": "file:./build/index.css",
	// "style": "file:./build/style-index.css"
	edit: EditItem,
	save: SaveItem,
} );
