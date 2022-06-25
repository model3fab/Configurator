            function updateMeasuresAPI(API){
                for (var i =0; i< designObj.parameters.length; i++) {
                    if (designObj.parameters[i].type == "m") {
                        evalText = designObj.parameters[i].name + "=" + Number(API[designObj.parameters[i].name]);
                    } else {  // cm
                        evalText = designObj.parameters[i].name + "=" + Number(API[designObj.parameters[i].name])/100;
                    }
                    eval(evalText);
                }
                for (var i =0; i< designObj.pieces.length; i++) {
                    designObj.pieces[i].mesh.scale.set( eval(designObj.pieces[i].sx), eval(designObj.pieces[i].sy), eval(designObj.pieces[i].sz));
                    designObj.pieces[i].mesh.position.set( Number(eval(designObj.pieces[i].sx)/2) + Number(eval(designObj.pieces[i].x)), Number(eval(designObj.pieces[i].sy)/2) + Number(eval(designObj.pieces[i].y)), Number(eval(designObj.pieces[i].sz)/2) + Number(eval(designObj.pieces[i].z)));
                    //designObj.pieces[i].mesh.position.set( -eval(designObj.pieces[i].sx/2), -eval(designObj.pieces[i].sy/2), -eval(designObj.pieces[i].sz/2));
                }
                API.repeatX = eval(designObj.pieces[0].sx);
                API.repeatY = API.alto/100;
                API.repeatZ = API.profundidad/100;
/*
                updateUvTransform();
                render();
*/
            }