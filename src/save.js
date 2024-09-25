import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

function save( { attributes } ) {
	const { columns } = attributes;

	return (
		<div
			{ ...useBlockProps.save( {
				className: `cols-${ columns }`,
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
}

export default save;
