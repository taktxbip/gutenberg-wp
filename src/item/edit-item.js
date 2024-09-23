import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

function EditItem( { attributes, setAttributes } ) {
	const { title, description } = attributes;

	return (
		<div { ...useBlockProps() }>
			<RichText
				tagName="h2"
				allowedFormats={ [] }
				value={ title }
				placeholder={ __( 'Your title', 'myblocks' ) }
				onChange={ ( val ) => setAttributes( { title: val } ) }
			/>
			<RichText
				tagName="p"
				allowedFormats={ [] }
				value={ description }
				placeholder={ __( 'Your description', 'myblocks' ) }
				onChange={ ( val ) => setAttributes( { description: val } ) }
			/>
		</div>
	);
}

export default EditItem;
