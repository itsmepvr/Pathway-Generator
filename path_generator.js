function loadAll(){

    $("#box").html("");

    createTable(10,10); //A table with 10x10 is created

    //Dynamic creation of tables with rows and columns function

    function createTable(rowcount, columncount){   
        mytable = $('<table></table>').attr({ id: "basicTable" });
        var rows = new Number(rowcount);
        var cols = new Number(columncount);
        var tr = [];
        for (var i = 0; i < rows; i++) {
            var row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
            for (var j = 0; j < cols; j++) {
                $('<td></td>').attr("id","box"+i+j+"").attr("class","boxx").text(" ").appendTo(row);
            }            
        }
        mytable.appendTo("#box");          
    }

    //starting position

    $("#box00").css("background-color","red");

    //ending position

    $("#box99").css("background-color","blue"); 

    pathGeneration(0,0);

    //Path Generation Function with input of present position

    function pathGeneration(x1, x2){

        x1 = Number(x1);
        x2 = Number(x2);

        path_array_0 = [x1, x2]; //present position

        path_array_1 = [x1, x2+1]; //next left position
        path_array_2 = [x1+1, x2]; //next bottom position

        path_array = [];

        if(path_array_1[0] >= 0 && path_array_1[1] >= 0){
            if(path_array_1[0] <= 9 && path_array_1[1] <= 9){
                path_array.push(path_array_1);
            }
        }
        if(path_array_2[0] >= 0 && path_array_2[1] >= 0){
                if(path_array_2[0] <= 9 && path_array_2[1] <= 9){
                path_array.push(path_array_2);
            }
        }
        
        //Get next position randomly
        path_array = path_array[Math.floor(Math.random()*path_array.length)];
        
        $("#box"+path_array[0]+path_array[1]+"").css("background-color","green");
        if(path_array[0] != 9 || path_array[1] != 9){
            pathGeneration(path_array[0], path_array[1]);    
        }
        $("#box99").css("background-color","blue");
        
    }   

} 
