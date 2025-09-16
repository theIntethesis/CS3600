document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    first = document.getElementById('firstName');
    last = document.getElementById('lastName');
    document.getElementById("title").innerText = "Welcome " + first.value + " " + last.value;
    first.value = "First Name"
    last.value = "Last Name"
});