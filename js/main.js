let questions = [
  //1
  {
    question: 'Вы сидите с вашим коллегой в дискорде. Он едет по трассе один и его останавливают, чтобы ограбить. Он просит вас приехать. Поедете ли вы ему помогать?',
    variants: ['Да, коллегам надо помогать.', 'Да, если нападающих меньше.', 'Да, если я понимаю, что успею.', 'Нет.']
  },
  //2
  {
    question: 'Напротив вас стоит сотрудник FIB  в форме с id 750. Вам нужно узнать номер его нашивки. Как вы это сделаете?',
    variants: ['Попрошу показать нашивку.', '/do Что написано на нашивке @750?', '/do Какой номер написан на нашивке @750?', '/me внимательно присмотрелся к нашивке @750']
  },
  //3
  {
    question: 'Напротив вас стоит сотрудник FIB  в форме с id 750. Вам нужно узнать номер его нашивки. Как вы это сделаете?',
    variants: ['Попрошу показать нашивку.', '/do Что написано на нашивке @750?', '/do Какой номер написан на нашивке @750?', '/me внимательно присмотрелся к нашивке @750']
  }
]

let dText = [
  'Тест №1', 'Тест состоит из 10 вопросов. На его прохождение вам дается 10 минут. В конце не забудьте заскринить итог и отправить фотокарточку в соответствующий канал. Важно: покидать страницу с тестом нельзя. Иначе придется проходить заново.'
]

let container = document.getElementsByClassName('main')[0]

let seconds = 5
let minutes = 0
let score = 0
let name = ''

document.addEventListener('DOMContentLoaded', () => {
  frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)

  header = document.createElement('p')
  header.textContent = dText[0];
  frame.appendChild(header);

  description = document.createElement('p')
  description.textContent = dText[1];
  frame.appendChild(description);

  but = document.createElement('button')
  but.classList.add('start')
  but.textContent = 'Начать';
  frame.appendChild(but);

  butStart = document.getElementsByClassName('start')[0]
  butStart.onclick = function() {
    clean();

    info = document.createElement('div');
    info.classList.add('information');
    container.appendChild(info);

    header = document.createElement('p')
    header.classList.add('h1');
    header.textContent = dText[0];
    info.appendChild(header);

    time = document.createElement('p')
    time.classList.add('time')
    time.textContent = minutes + ':0' + seconds;
    info.appendChild(time);

    createTest();
  }

  window.onblur = () => console.log( 'Кто-то вышел' );
})




function clean() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}




function createTest() {
  test = document.createElement('div')
  test.classList.add('test')
  container.appendChild(test)

  for (let i = 0; i < 3; i++){
    qContainer = document.createElement('div');
    qContainer.classList.add('question_container');
    test.appendChild(qContainer);

    q = document.createElement('p')
    q.textContent = questions[i].question;
    qContainer.appendChild(q);

    for (let l = 0; l < 4; l++) {
      v = document.createElement('p')
      v.textContent = (l + 1) + '. ' + questions[i].variants[l];
      qContainer.appendChild(v);
    }

    answer = document.createElement('input');
    qContainer.appendChild(answer);
  }

  timerId = setInterval(timer, 1000);
}




function timer(){
  if ((minutes >= 0) && (seconds > 0)){
    --seconds;
  } else if ((seconds == 0) && (minutes > 0)){
    --minutes;
    seconds = 59;
  } else {
    clearInterval(timerId);
    console.log('Время кончилось');
    //clean();
    return;
    //location.reload();
  }

  timer = document.getElementsByClassName('time')[0]

  if (seconds < 10) {
    timer.textContent = minutes + ':0' + seconds;
  } else {
    timer.textContent = minutes + ':' + seconds;
  }

}
