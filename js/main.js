let questions = [
  {
    question: 'Вы сидите с вашим коллегой в дискорде. Он едет по трассе один и его останавливают, чтобы ограбить. Он просит вас приехать. Поедете ли вы ему помогать?',
    a: ['Да, коллегам надо помогать.', 'Да, если нападающих меньше.', 'Да, если я понимаю, что успею.', 'Нет.']
  }
]

let dText = ['Тест №1', 'Тест состоит из 10 вопросов. На его прохождение вам дается 10 минут. В конце не забудьте заскринить итог и отправить фотокарточку в соответствующий канал. Важно: покидать страницу с тестом нельзя. Иначе придется проходить заново.']

let container = document.getElementsByClassName('main')[0]


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

    createTest();
  }

  window.onblur = () => console.log( 'Кто-то вышел' );
})

function clean() {
  
}

function createTest() {
  qContainer = document.createElement('div');
  qContainer.classList.add('question_container');
  container.appendChild(qContainer);
  q = document.createElement('p')
  q.textContent = questions[0].question;
  qContainer.appendChild(q);

  for (var i = 0; i < 4; i++) {
    a = document.createElement('p')
    a.textContent = (i + 1) + '. ' + questions[0].a[i];
    qContainer.appendChild(a);
  }
}

function timer() {
  alert('Время закончилось');
}

setTimeout(timer, 1000);
