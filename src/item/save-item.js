import { useBlockProps, RichText } from '@wordpress/block-editor';

function SaveItem( { attributes } ) {
	const { title, description, imageUrl, imageAlt, imageId } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			{ imageUrl && (
				<img src={ imageUrl } alt={ imageAlt } id={ imageId }></img>
			) }
			<RichText.Content tagName="h2" value={ title } />
			<RichText.Content tagName="p" value={ description } />
		</div>
	);
}

export default SaveItem;
