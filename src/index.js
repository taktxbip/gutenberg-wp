import { registerBlockType } from '@wordpress/blocks';
import save from './modules/save';
import edit from './modules/edit';
import './style.scss';

registerBlockType( 'dev/myblock', { edit, save } );
