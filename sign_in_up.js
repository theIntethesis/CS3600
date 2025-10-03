const sign_in = document.getElementById('sign-in')
const sign_up = document.getElementById('sign-up')

if (sign_in){
    sign_in.addEventListener('submit', function(event) {
        event.preventDefault();
        user = document.getElementById('user');
        pass = document.getElementById('pass');
        document.getElementById('editme').innerHTML = '<p style="color: crimson; font-family: monospace; margin: 0 auto;">Why did you expect this to work?</p>'
    });
}

if (sign_up){
    sign_up.addEventListener('submit', function(event) {
        event.preventDefault();
        user = document.getElementById('user');
        pass = document.getElementById('pass');
        document.getElementById('editme').innerHTML = '<p style="color: crimson; font-family: monospace; margin: 0 auto;">Thanks for your information >:D</p>'
    });
}
