import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { PanelBody, ToggleControl, QueryControls } from '@wordpress/components';
import { format, dateI18n, getSettings } from '@wordpress/date';
import './editor.scss';

function Edit( { attributes, setAttributes } ) {
	const { postsPerPage, showImage, order, orderBy, category } = attributes;
	const posts = useSelect(
		( select ) => {
			return select( 'core' ).getEntityRecords( 'postType', 'post', {
				per_page: postsPerPage,
				_embed: showImage,
				order,
				orderby: orderBy,
				categories: category ? category : [],
			} );
		},
		[ postsPerPage, showImage, orderBy, order, category ]
	);

	const categories = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'taxonomy', 'category', {
			per_page: -1,
		} );
	}, [] );

	const blockProps = useBlockProps();
	const onChangeToogleImage = ( value ) => {
		setAttributes( { showImage: value } );
	};

	const onChangePostsPerPage = ( value ) => {
		setAttributes( { postsPerPage: value } );
	};

	const onChangeOrder = ( value ) => {
		setAttributes( { order: value } );
	};

	const onChangeOrderBy = ( value ) => {
		setAttributes( { orderBy: value } );
	};

	const onChangeCategory = ( value ) => {
		setAttributes( { category: value } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<ToggleControl
						label="Display Images"
						checked={ showImage }
						onChange={ onChangeToogleImage }
					/>
					<QueryControls
						numberOfItems={ postsPerPage }
						onNumberOfItemsChange={ onChangePostsPerPage }
						maxItems={ 6 }
						minItems={ 1 }
						order={ order }
						onOrderChange={ onChangeOrder }
						orderBy={ orderBy }
						onOrderByChange={ onChangeOrderBy }
						categoriesList={ categories }
						selectedCategoryId={ category }
						onCategoryChange={ onChangeCategory }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				{ posts &&
					posts.map( ( p ) => {
						const featuredImage =
							p?._embedded?.[ 'wp:featuredmedia' ] &&
							p._embedded[ 'wp:featuredmedia' ].length > 0 &&
							p._embedded[ 'wp:featuredmedia' ][ 0 ];

						return (
							<article key={ p.id } data-post-id={ p.id }>
								{ showImage && featuredImage && (
									<img
										decoding="async"
										width="300"
										height="148"
										src={
											featuredImage.media_details.sizes
												.medium.source_url
										}
										className="attachment-medium size-medium"
										alt={ featuredImage.alt_text }
									/>
								) }
								{ p.date_gmt && (
									<time
										dateTime={ format( 'c', p.date_gmt ) }
									>
										{ dateI18n(
											getSettings().formats.date,
											p.date_gmt
										) }
									</time>
								) }
								<h2>{ p.title.rendered }</h2>
							</article>
						);
					} ) }
			</div>
		</>
	);
}

export default Edit;
