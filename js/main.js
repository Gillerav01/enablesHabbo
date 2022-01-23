var dataSetEnables = [];
var dataSetHanditems = [];
function getJSONEnables (){
    fetch('https://enableshabbo.000webhostapp.com/JSONEnables.php')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        for (var i = 0; i < myJson.enables.length; i++) {
            dataSetEnables.push([myJson.enables[i].idEnable, myJson.enables[i].desEnable, myJson.enables[i].categoria, myJson.enables[i].fotoEnable]);
        }
        console.log(dataSetEnables);
        $('#table-enables').DataTable( {
                        data: dataSetEnables,
                        columns: [
                            { title: "idEnable" },
                            { title: "desEnable" },
                            { title: "categoria" },
                            { title: "fotoEnable" },
                        ]
                    } );
    }).catch(function(error) {
        console.log(error);
    });
}

function getJSONHanditems() {
    fetch('https://enableshabbo.000webhostapp.com/JSONHanditems.php')
    .then(function(response) {
        return response.json();
    }).then(function(myJson) {
        console.log(myJson);
        for (var i = 0; i < myJson.handitems.length; i++) {
            dataSetHanditems.push([myJson.handitems[i].idHanditem, myJson.handitems[i].desHanditem, myJson.handitems[i].fotoHanditem]);
        }
        console.log(dataSetHanditems);
        $('#table-handitems').DataTable( {
                        data: dataSetHanditems,
                        columns: [
                            { title: "idHanditem" },
                            { title: "desHanditem" },
                            { title: "fotoHanditem" },
                        ]
                    } );
    }).catch(function(error) {
        console.log(error);
    });
}

$(document).ready(function() {
    getJSONEnables();
    getJSONHanditems();
});