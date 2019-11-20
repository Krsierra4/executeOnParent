define(function () {

  return {
    constructor: function (baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function () {

    },

    setListData: function(data, dataMap) {
      this.view.segmentList.widgetDataMap = dataMap;
      this.view.segmentList.setData(data);
    },

    actionCallback: null,

    setActionCallback: function(callback) {
      this.actionCallback = callback
    },

    onClickAction: function(widget, rowInfo) {
      if (this.actionCallback) {
        this.actionCallback(rowInfo);
      }
    }
  };
});