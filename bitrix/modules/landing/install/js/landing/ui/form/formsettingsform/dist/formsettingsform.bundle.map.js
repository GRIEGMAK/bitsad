{"version":3,"sources":["formsettingsform.bundle.js"],"names":["this","BX","Landing","UI","exports","ui_designTokens","ui_fonts_opensans","main_core","landing_ui_form_baseform","landing_ui_field_smallswitch","main_core_events","landing_ui_component_link","landing_ui_component_internal","_templateObject","ownKeys","object","enumerableOnly","keys","Object","getOwnPropertySymbols","symbols","filter","sym","getOwnPropertyDescriptor","enumerable","push","apply","_objectSpread","target","i","arguments","length","source","forEach","key","babelHelpers","defineProperty","getOwnPropertyDescriptors","defineProperties","FormSettingsForm","_BaseForm","inherits","options","_this","classCallCheck","possibleConstructorReturn","getPrototypeOf","call","opened","setEventNamespace","subscribeFromOptions","fetchEventsFromOptions","Dom","addClass","layout","onFieldChange","bind","assertThisInitialized","onSwitchChange","cache","Cache","MemoryCache","toggleable","toggleableType","ToggleableType","Switch","getSwitch","setValue","prepend","getNode","header","Link","clean","append","getLink","getLayout","Type","isPlainObject","help","getHelp","footer","createClass","value","remember","Tag","render","taggedTemplateLiteral","href","text","addField","field","isFunction","subscribe","get","prototype","replaceField","oldField","newField","event","emit","getData","_this2","switchField","SmallSwitch","getTarget","getValue","_this3","title","color","Colors","Grey","onClick","style","body","state","set","isOpened","Text","toBoolean","setOffsetTop","offset","concat","clear","fields","remove","unsubscribeAll","BaseForm","Form","Field","Event","Component"],"mappings":"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","file":"formsettingsform.bundle.map.js"}