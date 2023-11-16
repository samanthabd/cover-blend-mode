const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { SelectControl } = wp.components;
import {
  __experimentalToolsPanel as ToolsPanel,
  __experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';

import './style.scss';


function addCoverAttribute(settings, name) {
	if (typeof settings.attributes !== 'undefined') {
		if (name == 'core/cover') {
			settings.attributes = Object.assign(settings.attributes, {
				mixBlendMode: {
					type: 'string',
          default: 'normal',
				}
			});
		}
	}
	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'cover-blend-mode/cover-block/cover-custom-attribute',
	addCoverAttribute
);

const coverInspectorControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
    const {
      attributes: { mixBlendMode },
    setAttributes,
    name,
  } = props;
  if (name !== 'core/cover') {
    return <BlockEdit {...props} />;
  }

	const resetAll = () => {
		setAttributes({ mixBlendMode: '' })
	};

		return (
			<Fragment>
				<BlockEdit {...props} />
					<InspectorControls group="filter">
               <ToolsPanel
								label="Mix blend mode"
								resetAll={ resetAll }
							>
          <ToolsPanelItem
          hasValue={ () => !! mixBlendMode }
          label="Mix blend mode"
          onDeselect={ () => setAttributes( { mixBlendMode: '' }) }
          isShownByDefault={ true }>
							<SelectControl
								value={mixBlendMode}
								options={[
									{
										disabled: true,
										label: __('Select an Option'),
										value: ''
									},
									{
										label: __('Normal', 'cover-blend-mode'),
										value: ''
									},
									{
										label: __('Multiply', 'cover-blend-mode'),
										value: 'multiply'
									},
									{
										label: __('Screen', 'cover-blend-mode'),
										value: 'screen'
									},
									{
										label: __('Overlay', 'cover-blend-mode'),
										value: 'overlay'
									},
									{
										label: __('Darken', 'cover-blend-mode'),
										value: 'darken'
									},
									{
										label: __('Lighten', 'cover-blend-mode'),
										value: 'lighten'
									},
									{
										label: __('Color dodge', 'cover-blend-mode'),
										value: 'color-dodge'
									},
									{
										label: __('Color burn', 'cover-blend-mode'),
										value: 'color-burn'
									},
									{
										label: __('Hard light', 'cover-blend-mode'),
										value: 'hard-light'
									},
									{
										label: __('Soft light', 'cover-blend-mode'),
										value: 'soft-light'
									},
									{
										label: __('Difference', 'cover-blend-mode'),
										value: 'difference'
									},
									{
										label: __('Exclusion', 'cover-blend-mode'),
										value: 'exclusion'
									},
									{
										label: __('Hue', 'cover-blend-mode'),
										value: 'hue'
									},
									{
										label: __('Saturate', 'cover-blend-mode'),
										value: 'saturate'
									},
									{
										label: __('Color', 'cover-blend-mode'),
										value: 'color'
									},
									{
										label: __('Luminosity', 'cover-blend-mode'),
										value: 'luminosity'
									}
								]}
								onChange={(value) => setAttributes({ mixBlendMode: value })}
              />
              </ToolsPanelItem>
           </ToolsPanel>
					</InspectorControls>
			</Fragment>
		);
	};
}, 'withInspectorControl');

wp.hooks.addFilter(
	'editor.BlockEdit',
	'cover-blend-mode/cover-block/cover-inspector-controls',
	coverInspectorControls
);

const addBlendClassEditor = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		const {
			attributes: { mixBlendMode },
			className,
			name,
		} = props;

		if (name !== 'core/cover') {
			return <BlockListBlock {...props} />;
		}

		return (
			<BlockListBlock
				{...props}
				className={ className + (mixBlendMode ? ` has-mix-blend-mode-${mixBlendMode}` : '') }
			/>
		);
	};
}, 'withClientIdClassName');

addFilter(
	'editor.BlockListBlock',
	'cover-blend-mode/cover-block/add-editor-class',
	addBlendClassEditor,
);


function addBlendClassFrontEnd(extraProps, blockType, attributes) {
	const { mixBlendMode } = attributes;

	if (typeof mixBlendMode !== 'undefined' && mixBlendMode !== 'normal') {
		extraProps.className = extraProps.className + ` has-mix-blend-mode-${mixBlendMode}`;
	}

	return {
    ...extraProps
  }
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'cover-blend-mode/cover-block/add-front-end-class',
	addBlendClassFrontEnd,
);
