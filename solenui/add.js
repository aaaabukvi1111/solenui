function encryption() {
    let text = document.getElementById('userInput').value;
    // alert(text);
    let result = '';
    // for - это цикл. Мы его создали, 
    // чтобы перебрать все символы в тексте юзера. 
    for (let i = 0; i < text.length; i++) {
      console.log(text[i]);
      if (text[i] === 'а') {
        result += 'ара'
      } else if (text[i] === 'е') {
        result += 'ере';
      } else if (text[i] === 'и') {
        result += 'ири';
      } else if (text[i] === 'о') {
        result += 'оро';
      } else if (text[i] === 'у') {
        result += 'уру';
      } else if (text[i] === 'ы') {
        result += 'ыры';
      } else if (text[i] === 'ю') {
        result += 'юрю';
      } else if (text[i] === 'э') {
        result += 'эрэ';
      } else if (text[i] === 'я') {
        result += 'яря';
      } else {
        result += text[i];
      }

    }
    document.getElementById('output').innerText = result;
  }
