import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

function save() {
	return (
		<div { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</div>
	);
}

export default save;
