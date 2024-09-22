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

add_action('init',  function () {
  register_block_type(__DIR__ . '/build');
});
