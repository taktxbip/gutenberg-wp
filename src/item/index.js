import { registerBlockType } from '@wordpress/blocks';
// import save from './modules/save';
import EditItem from './edit-item';
import SaveItem from './save-item';
// import './style.scss';

registerBlockType( 'dev/item', { edit: EditItem, save: SaveItem } );
