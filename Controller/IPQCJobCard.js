var d = [
    { 
    "JobCardDetails":{
      "date":dateController.text,
      "moduleType":moduleTypeController.text,
      "matrixSize":matrixSizeController.text,
      "moduleNo":moduleNoController.text
    }
    },
    {
      "JobCard":[{
      "Process": 'Glass Washing',
      "EmployeeID": '',
      "Description": {
        "Lot_No": lotNoController.text,
        "size": lotSizeController.text
      },
      "Comment": glassCommentController.text
    },
    {
      "Process": 'Foil cutterr',
      "EmployeeID": '',
      "Description": {
        "EVA_Lot_No": evaLotNoController.text,
        "EVA_Size": evaSizeController.text,
        "Backsheet_Lot": backsheetLotController.text,
        "Backsheet_size": backsheetSizeController.text
      },
      "Comment": foilCommentController.text
    },
    {
      "Process": 'Tabbing & Stringing',
      "EmployeeID": '',
      "Description": {
        "Cell_Lot_No": cellLotNoController.text,
        "Cell_Type": cellTypeController.text,
        "Cell_Size": cellSyzeController.text,
        "Cell_Eff": cellEffController.text,
        "Interconnect_Ribbon_Size": interconnectRibbonSizeController.text,
        "Busbar_Size": busbarSizeController.text,
        "Flux": fluxController.text
      },
      "Comment": tabbingCommentController.text
    },
    {
      "Process": 'Bussing/InterConnection',
      "EmployeeID": '',
      "Description": {
        "Cell_To_Cell_Gap": cellToCellGapController.text,
        "String_To_String_Gap": stringToStringGapController.text,
        "Soldering_Temp": solderingTempController.text
      },
      "Comment": bussingCommentController.text
    },
    {
      "Process": 'Visual Inspection & Laminator',
      "EmployeeID": '',
      "Description": {
        "Temperature": tempreatureController.text,
        "Cycle_Time": cycleTimeController.text,
        "Laminate_Quality": isCycleTimeTrue
      },
      "Comment": visualCommentController.text
    },
    {
      "Process": 'Edge Triming',
      "EmployeeID": '',
      "Description": {"BackSheet_Cutting": isBacksheetCuttingTrue},
      "Comment": edgeCommentController.text
    },
    {
      "Process": 'Framing',
      "EmployeeID": '',
      "Description": {
        "Frame_Type": frameTypeController.text,
        "Frame_Size": frameSizeController.text,
        "Silicon_Glue_Lot_No": sliconGlueLotController.text
      },
      "Comment": framingCommentController.text
    },
    {
      "Process": 'J/B Assembly',
      "EmployeeID": '',
      "Description": {
        "JB_Lot_No": jBLotNoController.text,
        "JB_Type": jBTypeController.text,
        "Silicon_Glue_Lot_No": siliconGlueLotNoController.text
      },
      "Comment": jbCommentController.text
    },
    {
      "Process": 'Sun Simulator',
      "EmployeeID": '',
      "Description": {"Pmax": pmaxController.text},
      "Comment": sunCommentController.text
    }
     ]
    }
     ];



const AddIPQCJobCard = async(req,res)=>{
   const IPQCJobCard = req.body;
   
}