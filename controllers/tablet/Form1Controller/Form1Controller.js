define({ 
   segmentData: [
    {labelName: 'Name', valueName: 'Thomas Edison'},
    {labelName: 'Name', valueName: 'Nikola Tesla'},
    {labelName: 'Name', valueName: 'Albert Einstein'},
    {labelName: 'Name', valueName: 'Marie Curie'}
  ],
  onPostShow: function (){
    this.setCallbackListComponent();
    this.setSegmentData();
  },
  setCallbackListComponent: function (){
    this.view.listComponent.setActionCallback(this.duplicateRecord);
  },
  duplicateRecord: function(rowInfo) {
    //TODO duplicar record
    // this.segmentData = this.segmentData.push({labelName: 'Name', valueName: 'Manu Chao'});
    this.segmentData = [...this.segmentData, {labelName: 'Name', valueName: 'Manu Chao'}];
    this.setSegmentData();
  },
  setSegmentData: function (){
    var data = this.segmentData;
    var dataMap = { labelName: 'labelName', valueName: 'valueName' };
    this.view.listComponent.setListData(data, dataMap);  
  }

 });