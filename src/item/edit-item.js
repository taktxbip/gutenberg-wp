import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	Spinner,
	ToolbarButton,
	PanelBody,
	TextControl,
} from '@wordpress/components';
import { isBlobURL } from '@wordpress/blob';
import { __ } from '@wordpress/i18n';

function EditItem( { attributes, setAttributes } ) {
	const { title, description, imageUrl, imageAlt, imageId } = attributes;

	const onSelectURL = ( val ) => {
		setAttributes( {
			imageId: undefined,
			imageUrl: val,
			imageAlt: '',
		} );
	};

	const onSelectImage = ( val ) => {
		setAttributes( {
			imageId: val.id,
			imageUrl: val.url,
			imageAlt: val.alt,
		} );
	};

	return (
		<>
			{ imageUrl && ! isBlobURL( imageUrl ) && (
				<InspectorControls>
					<PanelBody title={ __( 'Alt attribute', 'myblocks' ) }>
						<TextControl
							label={ __( 'Change Alt attribute', 'myblocks' ) }
							value={ imageAlt }
							help={ __( 'Change Alt text here', 'myblocks' ) }
							onChange={ ( val ) =>
								setAttributes( { imageAlt: val } )
							}
						/>
					</PanelBody>
				</InspectorControls>
			) }
			{ imageUrl && (
				<BlockControls>
					<MediaReplaceFlow
						name={ __( 'Replace Image', 'myblocks' ) }
						onSelect={ onSelectImage }
						onSelectURL={ onSelectURL }
						accept="image/*"
						allowedTypes={ [ 'image' ] }
						mediaId={ imageId }
						mediaUrl={ imageUrl }
					/>
					<ToolbarButton
						onClick={ () =>
							setAttributes( {
								imageId: undefined,
								imageUrl: undefined,
								imageAlt: '',
							} )
						}
					>
						{ __( 'Remove Image', 'myblocks' ) }
					</ToolbarButton>
				</BlockControls>
			) }

			<div { ...useBlockProps() }>
				{ imageUrl && (
					<div
						className={ `image ${
							isBlobURL( imageUrl ) ? 'is-loading' : 'loaded'
						} ` }
					>
						<img
							src={ imageUrl }
							alt={ imageAlt }
							id={ imageId }
						></img>
						{ isBlobURL( imageUrl ) && <Spinner /> }
					</div>
				) }
				<MediaPlaceholder
					onSelect={ onSelectImage }
					onSelectURL={ onSelectURL }
					accept="image/*"
					allowedTypes={ [ 'image' ] }
					disableMediaButtons={ imageUrl }
				/>
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
					onChange={ ( val ) =>
						setAttributes( { description: val } )
					}
				/>
			</div>
		</>
	);
}

export default EditItem;
