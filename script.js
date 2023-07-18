function displayData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
  
    var displayDataElement = document.getElementById("displayData");
    displayDataElement.innerHTML = "Name: " + name + "<br>Email: " + email + "<br>Phone: " + phone;
  }