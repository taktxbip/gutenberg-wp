import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import { PanelBody, RangeControl } from '@wordpress/components';

import './editor.scss';

function Edit( { attributes, setAttributes } ) {
	const { columns } = attributes;

	return (
		<div
			{ ...useBlockProps( {
				className: `cols-${ columns }`,
			} ) }
		>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Columns', 'myblocks' ) }
						min={ 0 }
						max={ 4 }
						value={ columns }
						onChange={ ( val ) =>
							setAttributes( { columns: val } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={ [ 'dev/item' ] }
				template={ [ [ 'dev/item' ], [ 'dev/item' ] ] }
				orientation="horizontal"
			/>
		</div>
	);
}

export default Edit;
