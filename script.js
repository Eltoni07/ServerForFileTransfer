document.getElementById('redirectButton').addEventListener('click', function() {
  const inputValue = document.getElementById('serverInput').value;
  if (inputValue) {
    const targetURL = `http://192.168.1.${inputValue}:8080`;
    window.open(targetURL, '_blank');
    checkServerConnection(targetURL);
  } else {
    document.getElementById('statusMessage').innerText = "Kodi invalid, Vendos kodin perseri";
    document.getElementById('resetButton').style.display = "block";
  }
});

document.getElementById('resetButton').addEventListener('click', function() {
  document.getElementById('statusMessage').innerText = "Vendos Kodin:";
  document.getElementById('serverInput').value = "";
  document.getElementById('resetButton').style.display = "none";
  document.getElementById('advancedSettings').style.display = "none";
});

document.getElementById('advancedRedirectButton').addEventListener('click', function() {
  const mainPort = document.getElementById('mainPortInput').value;
  const secondaryPort = document.getElementById('secondaryPortInput').value;

  if (mainPort && secondaryPort) {
    const targetURL = `http://192.168.1.${secondaryPort}:${mainPort}`;
    window.open(targetURL, '_blank');
    checkServerConnection(targetURL);
  }
});

document.getElementById('resetButton').addEventListener('click', function() {
  document.getElementById('advancedSettings').style.display = "flex";
});

document.getElementById('serverInput').addEventListener('input', function() {
  const inputValue = document.getElementById('serverInput').value;
  if (inputValue === '0') {
    document.getElementById('resetButton').style.display = "block";
  }
});
