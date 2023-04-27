function intersect() {
    var set1 = document.getElementById("set1").value.split(",");
    var set2 = document.getElementById("set2").value.split(",");
    var intersection = [];
  
    for (var i = 0; i < set1.length; i++) {
      if (set2.indexOf(set1[i]) !== -1 && intersection.indexOf(set1[i]) === -1) {
        intersection.push(set1[i]);
      }
    }
  
    if (intersection.length > 0) {
      document.getElementById("result").innerHTML = "Intersecția este: " + intersection.join(", ");
    } else {
      document.getElementById("result").innerHTML = "Nu există elemente comune în cele două mulțimi.";
    }
  }
  