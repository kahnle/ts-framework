import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: "Name", age: 20 });
const rootElement = document.getElementById('root');
if (rootElement) {
  const userForm = new UserForm(rootElement, user);
  userForm.render();
} else {
  throw new Error('root element not found');
}