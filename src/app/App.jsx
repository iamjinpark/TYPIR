import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/route/Layout';
import Splash from '@/pages/Splash/Splash';

/* 마이 페이지 관련 */
import MyPage from '@/pages/MyPage/MyPage';
import AccountManagement from '@/pages/AccountManagement/AccountManagement';
import EditProfile from '@/pages/EditProfile/EditProfile';
import SelectPostImage from '@/pages/SelectPostImage/SelectPostImage';

/* 랜딩 페이지 관련 */
import Rending from '@/pages/Rending/Rending';
import DetailImage from '@/molecules/DetailImage/DetailImage';

/* 커뮤니티 페이지 관련 */

/* 유저 페이지 관련 */
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import SetInitialProfile from '@/pages/SetInitialProfile/SetInitialProfile';

function App() {
  const router = createBrowserRouter([
    {
      path: import.meta.env.BASE_URL ?? '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Splash />,
        },
        {
          path: 'mypage',
          children: [
            { index: true, element: <MyPage /> },
            {
              path: 'account',
              element: <AccountManagement />,
            },
            {
              path: 'editprofile',
              element: <EditProfile />,
            },
            {
              path: 'board',
              element: <MyPage />,
            },
            {
              path: 'post',
              element: <MyPage />,
            },
            {
              path: 'bookmark',
              element: <MyPage />,
            },
            {
              path: 'detail',
              element: <MyPage />,
              children: [
                {
                  path: ':imageId',
                  element: <DetailImage />,
                },
              ],
            },
            {
              path: 'newpost',
              element: <SelectPostImage />,
              children: [
                {
                  path: 'board',
                  element: <SelectPostImage />,
                },
                {
                  path: 'detail/:imageId',
                  element: <DetailImage />,
                },
              ],
            },
          ],
        },
        {
          path: 'category',
          children: [
            { index: true, element: <Rending /> },
            {
              path: 'detail',
              element: <Rending />,
              children: [
                {
                  path: ':imageId',
                  element: <DetailImage />,
                },
              ],
            },
          ],
        },
        {
          path: 'splash',
          children: [
            { index: true, element: <Splash /> },
            {
              path: 'signin',
              element: <SignIn />,
            },
            {
              path: 'signup',
              element: <SignUp />,
            },
            {
              path: 'setprofile',
              element: <SetInitialProfile />,
            },
          ],
        },
        {
          path: 'community',
          children: [{}],
        },
      ],
    },
  ]);

  return (
    <div className="max-w-screen-md mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
