import { useBlockProps } from '@wordpress/block-editor';
import '../editor.scss';

function edit() {
	const blockProps = useBlockProps();
	return <h1 { ...blockProps }>Edit</h1>;
}

export default edit;
