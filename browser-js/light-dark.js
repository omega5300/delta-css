// root element dom
const rootElement = document.documentElement

// icon element dom
const icon = document.querySelector('.icon')

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && matchMedia('(prefers-color-scheme: dark)').matches)) {
  rootElement.classList.add('dark')
  icon.classList.add('icon-sun')
  localStorage.theme = 'dark'
} else {
  icon.classList.add('icon-moon')
  localStorage.theme = 'light'
}

const toggleTheme = () => {

  const themeChange = document.querySelector('.navbar-change-theme')

  themeChange.addEventListener('click', () => {
    rootElement.classList.toggle('dark')

    if (rootElement.classList.contains('dark')) {
      localStorage.theme = 'dark'
      icon.classList.replace('icon-moon', 'icon-sun')
    } else {
      localStorage.theme = 'light'
      icon.classList.replace('icon-sun', 'icon-moon')
    }
  })
}

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
  toggleTheme,
  deltaMenu,
  deltaAlert,
  deltaModal
}
