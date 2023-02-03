/**
 * Description
 * @returns {void}
 */
const deltaMenu = () => {
  // DOM menu elements
  const links = document.querySelectorAll('.navbar-menu-link')
  const menu = document.querySelector('.navbar-menu')
  const btnMenu = document.querySelector('.navbar-menu-btn')

  btnMenu?.addEventListener('click', () => {
    menu?.classList.toggle('navbar-menu-active')
  })

  links.forEach((link) => {
    link.addEventListener('click', () => {
      menu?.classList.remove('navbar-menu-active')
    })
  })
}

/**
 * @typedef {'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'dark' | 'medium' | 'light'} alertColor
 * 
 * alert params
 * @param {string} alertMsg
 * @param {alertColor} alertBg
 * @returns {void}
 */
const deltaAlert = (alertMsg, alertBg) => {
  const $body = document.body

  const alertBox = document.createElement('div')

  const alertColorOpt = {
    primary: 'alert-primary',
    secondary: 'alert-secondary',
    tertiary: 'alert-tertiary',
    success: 'alert-success',
    warning: 'alert-warning',
    danger: 'alert-danger',
    light: 'alert-light',
    medium: 'alert-medium',
    dark: 'alert-dark'
  }

  alertBox.textContent = alertMsg
  alertBox.classList.add('alert', alertColorOpt[alertBg], 'alert__show')

  $body.prepend(alertBox)

  setTimeout(() => {
    alertBox.classList.remove('alert__show')
    $body.removeChild(alertBox)
  }, 3000)
}

/**
 * Description
 * @returns {void}
 */
const deltaModal = () => {
  /** @type {NodeListOf<HTMLDialogElement>} */
  const modals = document.querySelectorAll('.modal')
  const modalOpenBtns = document.querySelectorAll('.open-modal')
  const modalCloseBtns = document.querySelectorAll('.modal-close')

  modalOpenBtns.forEach(modalOpen => {
    modalOpen.addEventListener('click', () => {
      modals.forEach(modal => {
        modal.showModal()
      })
    })
  })

  modalCloseBtns.forEach(modalClose => {
    modalClose.addEventListener('click', () => {
      modals.forEach(modal => {
        modal.close()
      })
    })
  })
}

export {
  deltaMenu,
  deltaAlert,
  deltaModal
}
