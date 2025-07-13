function copyText(button) {
    const article = button.parentElement;
    const text = article.querySelector('h2').innerText + "\n\n" + article.querySelector('p').innerText;
    navigator.clipboard.writeText(text).then(() => {
      button.innerText = 'Copied!';
      setTimeout(() => {
        button.innerText = 'Copy Story';
      }, 1500);
    }).catch(() => {
      alert('কপি করতে সমস্যা হচ্ছে। আবার চেষ্টা করো।');
    });
  }