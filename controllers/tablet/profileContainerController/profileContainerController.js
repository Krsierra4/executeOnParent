define({ 

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