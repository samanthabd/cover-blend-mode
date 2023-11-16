const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { SelectControl, ToggleControl, Panel, PanelWrapperView, PanelBody, PanelRow } = wp.components;
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
				},
        innerMixBlendMode: {
          type: 'string',
        },
        fullWidth: {
					type: 'boolean',
          default: false,
				},
			});

      // settings = Object.assign(settings, {
      //   'data-foo': 'bar',
      //   'data-quix': settings.attributes.fullWidth || false,
      //   });
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
      attributes: { mixBlendMode, innerMixBlendMode, fullWidth },
    setAttributes,
    name,
  } = props;
  if (name !== 'core/cover') {
    return <BlockEdit {...props} />;
  }

	const resetAll = () => {
		setAttributes({ innerMixBlendMode: '' })
		setAttributes({ fullWidth: false })
	};

		return (
			<Fragment>
				<BlockEdit {...props} />
					<InspectorControls group="filter">
						{/* <SelectControl
							label={wp.i18n.__('Choose mix blend mode', 'cover-blend-mode')}
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
              /> */}

               <ToolsPanel
								label="Mix blend mode"
								resetAll={ resetAll }
							>
          <ToolsPanelItem
          hasValue={ () => !! innerMixBlendMode }
          label="Mix blend mode"
          onDeselect={ () => setAttributes( { mixBlendMode: '' }) }
          isShownByDefault={ true }>
							<SelectControl
								// label={wp.i18n.__('Choose mix blend mode', 'cover-blend-mode')}
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

              {/* <SelectControl
							label={wp.i18n.__('Mix blend mode', 'cover-blend-mode')}
							help={wp.i18n.__('Choose a mix blend mode for the cover\'s inner content.', 'cover-blend-mode')}
              value={innerMixBlendMode}
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
							onChange={(value) => setAttributes({ innerMixBlendMode: value })}
              /> */}
              </ToolsPanelItem>

        {/*  <ToolsPanelItem
          hasValue={ () => !! fullWidth }
          label="Make full width"
          onDeselect={ () => setAttributes( { fullWidth: false }) }
          isShownByDefault={ true }>
            <ToggleControl
            checked={fullWidth}
            label={wp.i18n.__('Make inner content full-width', 'cover-blend-mode')}
            onChange={(value) => setAttributes({ fullWidth: value })}
            />
           </ToolsPanelItem>
*/}
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
			attributes: { mixBlendMode, fullWidth, innerMixBlendMode },
			className,
			name,
		} = props;


		if (name !== 'core/cover') {
			return <BlockListBlock {...props} />;
		}

 //   props= Object.assign(props, {"style": {"--bg-color":"#bada55;"}})

		return (
			<BlockListBlock
				{...props}
				className={ className + (mixBlendMode ? ` has-mix-blend-mode-${mixBlendMode}` : '') }
				// className={ className + (mixBlendMode ? ` has-mix-blend-mode-${mixBlendMode}` : '') + (fullWidth ? ` is-full-width` : '') + (innerMixBlendMode ? ` inner-container-has-mix-blend-mode-${innerMixBlendMode}` : '')}
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
	const { mixBlendMode, fullWidth, innerMixBlendMode } = attributes;

	if (typeof mixBlendMode !== 'undefined' && mixBlendMode !== 'normal') {
		extraProps.className = extraProps.className + ` has-mix-blend-mode-${mixBlendMode}`;
	}
  // if (typeof fullWidth !== 'undefined' && fullWidth) {
	// 	extraProps.className = extraProps.className + ` is-full-width`;
	// }
  // if (typeof innerMixBlendMode !== 'undefined' && innerMixBlendMode !== 'normal') {
  //   extraProps.className = extraProps.className + ` inner-container-has-mix-blend-mode-${innerMixBlendMode}`;
	// }

  // if (blockType.name == 'core/cover') {
  //   extraProps = {
  //     ...extraProps,
  //   //  style: Object.assign(extraProps.style, {"--bg-color":"#bada55;"})
  //   }
  // }

	return {
    ...extraProps
  }
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'cover-blend-mode/cover-block/add-front-end-class',
	addBlendClassFrontEnd,
);
