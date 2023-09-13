import { Index as LoginPage } from './screens/login';
import { Index as ForgotPasswordPage } from './screens/forgor-pw';
import { Index as HelpPage } from './screens/help';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  {
    path: "/help",
    element: <HelpPage></HelpPage>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
