function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value;
    if (message.trim() !== '') {
      displayUserMessage(message);
      getREYANResponse(message);
      userInput.value = '';
    }
  }
  
  function displayUserMessage(message) {
    const chatContainer = document.getElementById('chat-container');
    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'message user-message';
    userMessageElement.innerHTML = `<strong>You:</strong> ${message}`;
    chatContainer.appendChild(userMessageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  function displayREYANMessage(message) {
    const chatContainer = document.getElementById('chat-container');
    const REYANMessageElement = document.createElement('div');
    REYANMessageElement.className = 'message REYAN-message';
    REYANMessageElement.innerHTML = `<strong>REYAN:</strong> ${message}`;
    chatContainer.appendChild(REYANMessageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  function getREYANResponse(message) {
    // Di sini Anda bisa menambahkan logika untuk AI memberikan respons terhadap pesan yang diberikan
    // Contoh sederhana:
    const responses = {
      'Halo': 'Halo! Apa yang bisa saya bantu?',
      'Bagaimana kabar?': 'Saya hanyalah program komputer, tapi saya siap membantu Anda!',
      
      // Tambahkan respons lain sesuai kebutuhan
    };
  
    const REYANResponse = responses[message] || 'makasih ya kontol dah mau respon';
    displayREYANMessage(REYANResponse);
  }
  