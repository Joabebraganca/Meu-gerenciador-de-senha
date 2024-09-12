document.getElementById('password-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const site = document.getElementById('site').value;
    const password = document.getElementById('password').value;
    
    chrome.storage.local.get(['passwords'], (result) => {
      const passwords = result.passwords || {};
      passwords[site] = password;
      
      chrome.storage.local.set({ passwords }, () => {
        alert('Senha salva com sucesso!');
      });
    });
  });
  