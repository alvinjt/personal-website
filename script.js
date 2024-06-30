function addRecommendation() {
    let recommendation = document.getElementById("new_recommendation");
    if (recommendation.value.trim()) {
      console.log("New recommendation added");
      showPopup(true);
      var element = document.createElement("div");
      element.setAttribute("class", "recommendation");
      element.innerHTML =
        "<span>&#8220;</span>" + recommendation.value + "<span>&#8220;</span>";
      document.getElementById("all_recommendations").appendChild(element);
      recommendation.value = "";
    }
  }
  
  function showPopup(bool) {
    document.getElementById("popup").style.visibility = bool ? "visible" : "hidden";
  }
