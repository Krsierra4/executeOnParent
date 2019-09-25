define({ 

  onClickImage: function(context){
    var info = {
      row: context.rowIndex,
      section: context.sectionIndex
    };
    this.executeOnParent('catchInfo', info);
  }
 });