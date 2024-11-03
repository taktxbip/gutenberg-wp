import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import './style.scss';

registerBlockType( 'dev/latest-posts', { edit: Edit, save: () => null } );
