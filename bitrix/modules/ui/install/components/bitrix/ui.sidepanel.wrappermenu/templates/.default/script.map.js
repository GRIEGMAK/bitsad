{"version":3,"sources":["script.js"],"names":["BX","namespace","UI","DropdownMenu","options","this","container","items","prototype","init","querySelectorAll","i","length","item","id","link","button","submenu","querySelector","operativeItem","getAttribute","push","classList","contains","activeItem","noticeItem","loadData","addItem","DropdownMenuItem","menu","resetItems","reset","resetSubItems","itemsMap","WeakMap","subItems","submenuOpen","newBadge","counter","set","getItemByNode","node","Dom","hasClass","get","parentNode","isSubmenuExist","getToggleButton","appendChild","submenuVisibilityStateVisible","subItem","activeSubItem","showSubmenu","setNewToggleButtonName","addEvents","addSubItem","activate","add","remove","addNoticeIcon","children","getNoticeIcon","removeNoticeIcon","noticeIcon","document","createElement","className","style","height","getSubmenuHeight","hideSubmenu","subItemsHeight","getHeight","addEventListener","setActiveHandler","bind","e","preventDefault","setDefaultToggleButtonName","buttonContainer","innerHTML","message","getNewItemBadge","itemBadgeNewContainer","getCounter","counterContainer","getAddItem","addItemContainer","setAddItemName","DropdownMenuSubItem","subMenu","offsetHeight"],"mappings":"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","file":"script.map.js"}