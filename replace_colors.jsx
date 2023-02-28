function ReplaceColors() {    

    /* REPLACE THESE RGB VALUES */
    var colourToReplace = new RGBColor();    

    colourToReplace.red = 255;    // <- HERE
    colourToReplace.green = 252;    // <- HERE
    colourToReplace.blue = 245;   // <-HERE    

    var replacementColor = new RGBColor();    

    replacementColor.red = 255;   // <- HERE
    replacementColor.green = 255;   // <- HERE
    replacementColor.blue = 255;  // <- HERE   

    
    // Select All in the current Doc
    var doc = app.activeDocument;
    if (app.documents.length>0) {
        doc.selectObjectsOnActiveArtboard();
    }

    //Get all the Paths and loop through them
    var paths = doc.pathItems;
    for( var i = 0, ii = paths.length; i < ii; i++ ) {
        var curPath = paths[i];          

        //If the current Color matches the replace Color then replace it.
        if (curPath.fillColor.red == colourToReplace.red && curPath.fillColor.green == colourToReplace.green && curPath.fillColor.blue == colourToReplace.blue)
        {
            curPath.fillColor = replacementColor;
        }        
        else {
            //do nothing
        }
    }
    // close and save the changes
    //doc.close(SaveOptions.SAVECHANGES);
}

ReplaceColors();
