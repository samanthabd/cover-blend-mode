<?php
/**
 * Plugin Name:       Cover Blend Mode
 * Description:       Add a mix-blend-mode to the cover block's overlay
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cover-blend-mode
 *
 * @package           cover-blend-mode
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function cover_blend_mode_cover_blend_mode_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'cover_blend_mode_cover_blend_mode_block_init' );

function cover_blend_mode_editor_assets() {
  wp_enqueue_script(
		'cover-blend-mode-script',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		[ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ],
		'0.1.0'
	);
}
add_action( 'enqueue_block_editor_assets', 'cover_blend_mode_editor_assets' );

function frontend_assets() {
  wp_enqueue_style(
    'cover-blend-mode-frontend-style',
    plugin_dir_url( __FILE__ ) . 'build/style-index.css',
    [],
    '0.1.0'
  );
}
add_action( 'wp_enqueue_scripts', 'frontend_assets' );

function editor_assets() {
  wp_enqueue_style(
    'cover-blend-mode-editor-style',
    plugin_dir_url( __FILE__ ) . 'build/style-index.css',
    [],
    '0.1.0'
  );
}
add_action( 'enqueue_block_editor_assets', 'editor_assets' );
