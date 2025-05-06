import './Main.css'
import SimpleForm from './assets/SimpleForm/SimpleForm'


function Main(){
    return(
      <main>
        <div className='hero'>
          <div className='exkl'>
            <p className='qwe'>
              <p className='qwe1'>ЭКСКЛЮЗИВНАЯ </p>
              И НЕСТАНДАРТНАЯ МЕБЕЛЬ ДЛЯ ДОМА</p>
              <div className='weCan'>Мы можем произвести любую мебель для вашего проекта и найти производственное решение любой задумки.</div>

          </div>
            <div className='order'><a href="0">ЗАКАЗАТЬ ПРОЕКТ</a></div>
            <div className='imgR'></div>
            <div className='imgL'></div>
        </div>
        
        <div className='about'>
                <div className='more5'>
                    <p className='more5'>Более 5 лет создаём мебель для вашего комфорта</p>
                </div>
                <div className='right'>
                    <div className='aboutText'>
                    <p className=''>Мы — команда профессионалов, которые могут произвести любую мебель для вашего проекта, а также найти производственное решение любой задумки.</p>
                    <p className='nn'>Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно.</p>
                    <p className='nn'>В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную смолу.</p>
                    </div>
                    <div className='aboutInfo'>
                    <div className='fst'>
                        <p className='lrg'>1 год</p>
                        <p className='sml'>гарантии на всю продукцию</p>
                    </div>

                    <div className='scnd'>
                        <p className='lrg'>300+</p>
                        <p className='sml'>выполненных проектов</p>
                    </div>

                    <div className='thr'>
                        <p className='lrg'>15 дней</p>
                        <p className='sml'>срок производства</p>
                    </div>
                    
                    </div>
                </div>
        </div>

        <div className='steps'>
            <div className='kak'>Как мы работаем</div>
            <div className='rightSteps'>
                <div className='alg'>Алгоритм работы с нами для удобства и понимания проекта</div>
                <div className='stepsItems'>
                    <div className='idea'>
                        <div className='nameSt'>Идея</div>
                        <div className='textSt'>Клиент приходит к нам с идеей. Это может быть изображение/ эскиз или другой референс. А мы думаем над тем, как это реализовать, делаем технические чертежи и предлагаем решения по материалам.</div>
                    </div>
                    <div className='tz'>
                        <div className='nameSt'>Техническое задание</div>
                        <div className='textSt'>Вместе с клиентом формулируем корректное ТЗ, которое включает в себя визуализацию изделия, эскизный чертёж с габаритами, информацию по материалам и отделке, срок реализации проекта и другие обязательные пункты.</div>
                    </div>
                    <div className='komPred'>
                        <div className='nameSt'>Коммерческое предложение</div>
                        <div className='textSt'>Предпочтительно используем натуральные материалы. Но любую смету можем оптимизировать, упростив материалы или конструктив. Сможем подстроиться под бюджет клиента и согласуем коммерческое предложение.</div>
                    </div>
                    <div className='podg'>
                        <div className='nameSt'>Подготовка рабочего проекта</div>
                        <div className='textSt'>Создадим рабочую документацию и чертежи. Это фундамент качественного производства. На этом этапе утверждаем с клиентом все габариты и материалы, чертежи и приступаем к производству.</div>
                    </div>
                    <div className='proizv'>
                        <div className='nameSt'>Производство и монтаж</div>
                        <div className='textSt'>Производство занимает от 15 рабочих дней, в зависимости от сложности и объёма. Монтажом тоже занимаемся самостоятельно. Ведь мы это сделаем быстро и аккуратно.</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='proj'>
            <p>Проекты</p>
            <div className='pict'>
                <div className='img-fst img'></div>
                <div className='img-nd img'></div>
                <div className='img-thr img'></div>
                <div className='img-four img'></div>
                <div className='img-fiv img'></div>
                <div className='img-six img'></div>
            </div>
        </div>

        <div className='testimonials'>
            <p>Отзывы</p>
            <div className='igor rev'>
                <img src="src/components/Main/assets/kovicki.png" alt="" />
                <div className='name'>Игорь Антонов</div>
                <p className='text'>Обратилась к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все на высшем уровне.</p>
            </div>
            <div className='olya rev'>
                <img src="src/components/Main/assets/kovicki.png" alt="" />
                <div className='name'>Ольга Иванова</div>
                <p className='text'>После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!</p>
            </div>
            <div className='arkasha rev'>
                <img src="src/components/Main/assets/kovicki.png" alt="" />
                <div className='name'>Аркадий Макаров</div>
                <p className='text'>Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!</p>
            </div>
        </div>


        <div className='forma'>
            <img className='formIMG' src="src/components/Main/assets/formIMG.jpg" alt="" />
            <div className='form'>
                <div className='formtext'>
                    <p className='fst'>Хотите заказать проект?</p>
                    <p className='scnd' >Оставьте заявку и мы вам перезвоним</p>
                </div>
                <div className='SimpleForm'>
                    <SimpleForm />
                </div>
                <div className='links'>
                    <img src="src\components\Main\assets\SimpleForm\imgForm\app.png" alt="" />
                    <img src="src\components\Main\assets\SimpleForm\imgForm\googlepl.png" alt="" />
                </div>
            </div>
        </div>

      </main>
    )
  }

export default Main