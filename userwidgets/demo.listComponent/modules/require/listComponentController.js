define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      catchInfo: function(widgetinfo, data){
        var transformPropEnd = kony.ui.makeAffineTransform();
		transformPropEnd.translate(-220, 0);
        var animationDef = {
          "100": {
			transform: transformPropEnd,
			stepConfig: {
				timingFunction: kony.anim.LINEAR
				}
			}
        };
        var animationConfig = {
          rows: [{ sectionIndex: data.section, rowIndex: data.row }],
          widgets: ['profileContainer'],
          animation: {
            definition: kony.ui.createAnimation(animationDef),
            config: {
              delay: 0,
              iterationCount: 1,
              fillMode: kony.anim.FILL_MODE_FORWARDS,
			  duration: 0.3,
			  direction: kony.anim.DIRECTION_ALTERNATE
            }
          }
        };
		this.view.segmentList.animateRows(animationConfig);
      }
	};
});