
main();

function main() {
   try {
      const sourceJSON = require("./Journal.json");
      
      let destinationJSON = [];
      let sourceLocation, sourceText;

      for (let i=0; i<=sourceJSON.entries.length-1 ; i++) {
         sourceLocation = sourceJSON.entries[i].location;

         destinationJSON.push({
            creationDate: new Date(sourceJSON.entries[i].creationDate),
            text: ""
         });

         sourceText = sourceJSON.entries[i].text;
         if ( sourceText ) {
            if ( sourceText.indexOf("![](dayone-moment:") !== -1 ) {
               destinationJSON[destinationJSON.length-1].text = sourceText.substring(sourceText.indexOf(")") + 1, sourceText.length);
            } else {
               destinationJSON[destinationJSON.length-1].text = sourceText;
            }
         }

         if ( sourceLocation ) {
            destinationJSON[destinationJSON.length-1].latitude = sourceLocation.latitude,
            destinationJSON[destinationJSON.length-1].longitude = sourceLocation.longitude
         }

      }

      console.log(destinationJSON);


   } catch(e) {
      throw e;
   }
}

