import {render as renderProfilePage} from '../../layout/profilePage'
import {render as renderTestLinks} from '../../components/temporary/testLinks'
import {render as renderButton} from '../../components/button'
import '../../styles/main.scss'

const props = {
  profile: {
    title: 'John',
    fields: [
      {
        label: 'Login',
        value: 'john'
      },
      {
        label: 'Email',
        value: 'dd@ggg.com'
      },
      {
        label: 'Name',
        value: 'John'
      },
      {
        label: 'Surname',
        value: 'Smith'
      },
      {
        label: 'Phone',
        value: '+7 999 999-99-99'
      }
    ],
    buttons: [
      {
        button: renderButton({
          label: 'Change profile',
          isButton: false,
          href: 'changeProfile'
        })
      },
      {
        button: renderButton({
          label: 'Change password',
          isButton: false,
          href: 'changePassword'
        })
      },
      {
        button: renderButton({
          label: 'Back',
          isButton: true,
          type: 'button'
        })
      }
    ]
  }
}

document.querySelector('#root').innerHTML = renderProfilePage(props) + renderTestLinks()
