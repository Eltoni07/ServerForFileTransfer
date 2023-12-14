document.getElementById('redirectButton').addEventListener('click', function() {
  const inputValue = document.getElementById('serverInput').value;
  if (inputValue) {
    window.location.href = `http://192.168.1.${inputValue}:8080`;
  }
});
