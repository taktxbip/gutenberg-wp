import { registerBlockType } from '@wordpress/blocks';
import '../item/index';
import save from './save';
import Edit from './edit';
import './style.scss';

registerBlockType( 'dev/myblocks', { edit: Edit, save } );
