import Toastify from 'toastify-js'
export function toaster(alertMessage, alertType) {
  let backgroundColor
  switch (alertType) {
    case 'primary':
      backgroundColor = '#0e7fe'
      break
    case 'secondary':
      backgroundColor = '#ffc83d'
      break
    case 'success':
      backgroundColor = '#008a00'
      break
    case 'danger':
      backgroundColor = '#db3700'
      break
    case 'warning':
      backgroundColor = '#fff3cd'
      break
    case 'info':
      backgroundColor = '#cff4fc'
      break
    case 'light':
      backgroundColor = '##c7c7c7'
      break
    case 'dark':
      backgroundColor = '#d3d3d4'
      break

    default:
      backgroundColor = '#fefefe'
      break
  }
  Toastify({
    text: alertMessage,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: 'top',
    position: 'right',
    backgroundColor: backgroundColor,
    stopOnFocus: true,
    className: 'toastify-content',
    style: {
      color: "white"
    }
  }).showToast()
}
