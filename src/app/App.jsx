import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/route/Layout';
import Splash from '@/pages/Splash/Splash';

/* 마이 페이지 관련 */
import MyPage from '@/pages/MyPage/MyPage';
import AccountManagement from '@/pages/AccountManagement/AccountManagement';
import EditProfile from '@/pages/EditProfile/EditProfile';
import SelectPostImage from '@/pages/SelectPostImage/SelectPostImage';

/* 랜딩 페이지 관련 */
import Category from '@/molecules/Category/Category';
import DetailImage from '@/molecules/DetailImage/DetailImage';

/* 커뮤니티 페이지 관련 */

/* 유저 페이지 관련 */
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import SetInitialProfile from '@/pages/SetInitialProfile/SetInitialProfile';
import ImageTemplate from '@/molecules/ImageTemplate/ImageTemplate';
import Community from '@/pages/Community/Community';
import CommunityDetail from '@/pages/CommunityDetail/CommunityDetail';

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
              path: 'editProfile',
              element: <EditProfile />,
            },
            {
              path: 'board',
              element: <MyPage />,
              children: [
                {
                  path: ':boardText',
                  element: <ImageTemplate />,
                  children: [
                    {
                      path: 'detail/:imageId',
                      element: <DetailImage />,
                    },
                  ],
                },
              ],
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
                  children: [
                    {
                      path: ':boardText',
                      element: <ImageTemplate />,
                      children: [
                        {
                          path: 'detail/:imageId',
                          element: <DetailImage />,
                        },
                      ],
                    },
                  ],
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
          path: 'style',
          element: <Category />,
          children: [
            {
              path: 'detail/:imageId',
              element: <DetailImage />,
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
          children: [
            { index: true, element: <Community /> },
            {
              path: 'detail',
              element: <CommunityDetail />,
            },
            {
              path: 'detail/:postId',
              element: <CommunityDetail />,
            },
          ],
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
