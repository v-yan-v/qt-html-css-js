
const defaultData = {
  products: [
    {
      id: 0
      , slogan: 'Сказочное заморское яство'
      , sloganOnHover: 'Котэ не одобряет?'
      , title: 'Нямушка'
      , subTitle: 'с фуа-гра'
      , text: [
        '10 порций'
        , 'мышь в подарок'
      ]
      , amount: 0.5
      , amountUnits: 'кг'
      , bottomText: 'Чего сидишь? Порадуй котэ, <span class="actionCaption"> купи.</span>'
      , bottomTextDisabled: 'Печалька, с фуа-гра закончился.'
      , bottomTextSelected: 'Печень утки разварная с артишоками.'
    }

    ,{
      id: 1
      , slogan: 'Сказочное заморское яство'
      , sloganOnHover: 'Котэ не одобряет?'
      , title: 'Нямушка'
      , subTitle: 'с рыбой'
      , text: [
        '10 порций'
        , 'мышь в подарок'
      ]
      , amount: 0.5
      , amountUnits: 'кг'
      , bottomText: 'Чего сидишь? Порадуй котэ, <span class="actionCaption"> купи.</span>'
      , bottomTextDisabled: 'Печалька, с рыбой закончился.'
      , bottomTextSelected: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
    }

    ,{
      id: 2
      , slogan: 'Сказочное заморское яство'
      , sloganOnHover: 'Котэ не одобряет?'
      , title: 'Нямушка'
      , subTitle: 'с курой'
      , text: [
        '10 порций'
        , 'мышь в подарок'
      ]
      , amount: 0.5
      , amountUnits: 'кг'
      , bottomText: 'Чего сидишь? Порадуй котэ, <span class="actionCaption"> купи.</span>'
      , bottomTextDisabled: 'Печалька, с курой закончился.'
      , bottomTextSelected: 'Филе из цыплят с трюфелями в бульоне.'
    }
  ]
}



// запускаем функцию когда появился DOM
document.addEventListener('DOMContentLoaded', () => {

  // тут можно динамикой карточки создавать и мапить данные в них

  // работаем с контейнером крточек чтоб вешать меньше событий
  let products = document.getElementById('products')

  // текст для отключенных карточек
  ;[].forEach.call(products.querySelectorAll('.productCard.disabled'), el => {
    const id = parseInt(el.dataset.id)
    el.getElementsByClassName('productCard-bottomText')[0].innerHTML = defaultData.products.filter(el => el.id === id)[0].bottomTextDisabled
  })


  // вешаем обработку клика на контейнер карточек, изменяем состояние карточек если клик был на них
  products.addEventListener('click', evt => {
    const card = evt.target.closest('.productCard')
    const id = parseInt(card.dataset.id)
    const thisCardData = defaultData.products.filter(el => el.id === id)[0]

    if (card && !card.classList.contains('disabled')) {
      if (card.classList.contains('productCard--selected')) {
        // disable selection
        card.classList.remove('productCard--selected')
        card.querySelector('.productCard-bottomText').innerHTML = thisCardData.bottomText
        card.querySelector('.productCard-slogan').innerHTML = thisCardData.slogan
      }
      else {
        // enable selection
        card.classList.add('productCard--selected')
        card.querySelector('.productCard-bottomText').innerHTML = thisCardData.bottomTextSelected
      }
    }
  })

  // меняем слоган при наведении
  products.addEventListener('mouseover', evt => {
    const card = evt.target.closest('.productCard')
    if (!card) {
      return
    }
    const id =parseInt(card.dataset.id)
    const thisCardData = defaultData.products.filter(el => el.id === id)[0]

    if (card && !card.classList.contains('disabled') && card.classList.contains('productCard--selected')) {
      const slogan = card.querySelector('.productCard-slogan')
      slogan.innerHTML = thisCardData.sloganOnHover
    }
  })

  // меняем слоган обратно при сходе с карточки
  products.addEventListener('mouseout', evt => {
    const card = evt.target.closest('.productCard')
    if (!card) {
      return
    }
    const id =parseInt(card.dataset.id)
    const thisCardData = defaultData.products.filter(el => el.id === id)[0]

    if (card && !card.classList.contains('disabled') && card.classList.contains('productCard--selected')) {
      const slogan = card.querySelector('.productCard-slogan')
      slogan.innerHTML = thisCardData.slogan
    }
  })
})