define({ 

  onClickImage: function(context){
    var info = {
      row: context.rowIndex,
      section: context.sectionIndex
    };
    this.executeOnParent('catchInfo', info);
  },
  onClickAction: function(eventobject, context) {
    var secIndex = context.sectionIndex;
    var rowIndex = context.rowIndex;
    var rowInfo = {
      section : secIndex,
      row : rowIndex
    };
    this.executeOnParent('onClickAction', rowInfo);
  }
 });