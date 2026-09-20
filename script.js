document.getElementById("sosForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let emergency = document.getElementById("emergency").value;
    let location = document.getElementById("location").value;
    let details = document.getElementById("details").value;

    let report = document.createElement("div");

    report.className = "alert";

    report.innerHTML =
        "<b>" + emergency + "</b>" +
        "<p>Name: " + name + "</p>" +
        "<p>Location: " + location + "</p>" +
        "<p>Details: " + details + "</p>";

    let reports = document.getElementById("reports");

    reports.innerHTML = "";

    reports.appendChild(report);

    alert("Emergency report submitted!");
});
