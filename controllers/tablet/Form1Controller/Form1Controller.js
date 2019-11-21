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
    var record = this.view.listComponent.data[rowInfo.row];
    record.valueName = record.valueName + ' (copy)';
    this.segmentData = [...this.segmentData, record];
    this.setSegmentData();
  },
  setSegmentData: function (){
    var data = this.segmentData;
    var dataMap = { labelName: 'labelName', valueName: 'valueName' };
    this.view.listComponent.setListData(data, dataMap);  
  }

 });