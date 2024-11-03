<?php
/*
* Plugin Name: Gutenberg Wp
* Description: Custom gutenberg blocks made using wp scripts.
* Version: 1.0
* Author: Evgenii Savelev
* Author URI: https://evdesign.ru/
* License: GPLv2 or later
* Text Domain: php-run
*/

function dev_latest_posts_block($attributes)
{

  $posts = get_posts([
    'posts_per_page' => $attributes['postsPerPage'],
    'post_status' => 'publish',
    'fields' => 'ids'
  ]);

  $html = '<div ' . get_block_wrapper_attributes() . '>';
  foreach ($posts as $post_id) {
    $image_id = get_post_thumbnail_id($post_id);

    $html .= '<article data-post-id="' . $post_id . '">';
    if ($image_id && $attributes['showImage']) {
      $html .= wp_kses_post(wp_get_attachment_image($image_id, 'medium'));
    }
    $html .= '<time datetime="' . esc_attr(get_the_date('c', $post_id)) . '">' . esc_attr(get_the_date('', $post_id)) . '</time>';
    $html .= '<h2>' . esc_html(get_the_title($post_id)) . '</h2>';
    $html .= '</article>';
  }
  $html .= '</div>';

  return $html;
}

add_action('init',  function () {
  register_block_type(__DIR__ . '/build/my-blocks');
  register_block_type(__DIR__ . '/build/item');
  register_block_type(__DIR__ . '/build/latest-posts', [
    'render_callback' => 'dev_latest_posts_block'
  ]);
});


/*
* Custom Gutenberg category
*/
add_filter('block_categories', function ($categories, $post) {
  return array_merge(
    [
      [
        'slug'  => 'dev',
        'title' => 'Dev '
      ]
    ],
    $categories
  );
}, 10, 2);
