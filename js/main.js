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
    question: 'Вы шли по улице в сторону своего дома. Вдруг вам навстречу вышли 2 подозрительных человека и один из них выстрелил вам в голову. Вы очнулись в больнице. Что будете делать дальше?',
    variants: ['Сильно удивлюсь, вылечусь и поеду домой на такси.', 'Расстроюсь, ведь я хотел побыстрее попасть домой и поужинать. Позвоню другу, попрошу его меня забрать и отвезти домой.', 'Позвоню друзьям, опишу подонков и мы вместе поедем с ними разбираться.', 'Напишу в рацию, попрошу коллег меня забрать и мы поедем задерживать нарушителей.']
  },
  //4
  {
    question: 'Заместителя шерифа похитили. В личные сообщения он отправил вам место, где он находится, и потребовал организовать спасательную операцию. Что вы будете делать?',
    variants: ['Тактично откажусь.', 'Соберу всех на ЗП и мы вместе поедем.', 'Дождусь момента, когда запросят переговорщика, и вместе с коллегами поеду пушить.', 'Дождусь требований от бандитов и дальше буду решать, пушить или нет.']
  },
  //5
  {
    question: 'Вы едете по трассе, за вами гонится 3 машины с грабителями. Пытаясь вас остановить, они прострелили вам колесо и заднее стекло. Что вы будете делать?',
    variants: ['Продолжу уезжать, моя машина быстрее их.', 'Остановлюсь на обочине и буду ждать их дальнейшие действия.', 'Осталось всего 5 километров до ШД, я смогу спастись там.', 'Съеду с трассы и попробую оторваться по горам.']
  },
  //6
  {
    question: 'В холле ШД стоит гражданин с розовыми волосами. Вам не нравится цвет его волос. Что вы будете делать?',
    variants: ['Задержу его, ходить с такими волосами это хулиганство.', 'Подойду и уточню, почему он тут стоит и нужна ли ему помощь.', 'Агрессивно начну расспрашивать, что он тут забыл. В случае взаимной грубости задержу и посажу в КПЗ.', 'Убежусь что никого нет рядом и нокну его. Он в любом случае не вспомнит, кто это сделал.']
  },
  //7
  {
    question: 'К вам подошел гражданин и попросил показать удостоверение. Что вы сделаете?',
    variants: ['Скажу, что не обязан.', 'Скажу, что сейчас достану удостоверение и покажу человеку напротив не передавая.', '/me достал удостоверение и показал гражданину @n', '/do Удостоверение забыто дома.']
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

  for (let i = 0; i < 7; i++){
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
    clean();
    result();
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

function result() {
  header = document.createElement('p')
  header.classList.add('h1');
  header.textContent = 'Время закончилось :(';
  container.appendChild(header);
}
