import { useBlockProps } from '@wordpress/block-editor';

function save() {
	const blockProps = useBlockProps.save();
	return <h1 { ...blockProps }>Save</h1>;
}

export default save;
