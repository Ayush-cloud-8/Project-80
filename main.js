var names = [];


function add_name_btn() {
    var name_to_add = document.getElementById("add_name_input").value;
    if (name_to_add == "") {
        window.alert("Please Enter a name in the Add section");
    } else {
        
    names.push(name_to_add);
    names.sort();
    var sorted_name = [];
    for (i=0; i<names.length; i++) {
        var name = "<h4>" + names[i] + "</h4>";
        sorted_name.push(name);
    }

    var space = sorted_name.join(" ");
    console.log(space);
    document.getElementById("names_display").innerHTML = space; 
    document.getElementById("add_name_input").value = "";
    }
}

function search_names_btn() {
    var name_to_search = document.getElementById("search_name_input").value;
    if (name_to_search == "") {
        window.alert("Please Enter a name in the Search section")
    } else {
        var name_found = 0;
    for (j=0; j<names.length; j++) {
        if (names[j] == name_to_search) {
            name_found += 1 ;
        }
    }

    document.getElementById("name_found").innerHTML = "Name found " + name_found + " time(s) in the list";
    document.getElementById("search_name_input").value = "";
    }
}