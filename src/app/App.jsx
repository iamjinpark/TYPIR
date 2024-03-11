import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/route/Layout';
import Splash from '@/pages/Splash/Splash';

/* 마이 페이지, 헤더 관련 */
import MyPage from '@/pages/MyPage/MyPage';
import AccountManagement from '@/pages/AccountManagement/AccountManagement';
import EditProfile from '@/pages/EditProfile/EditProfile';
import NewStyle from '@/pages/NewStyle/NewStyle';
import NewBoard from '@/pages/NewBoard/NewBoard';
import SelectPostImage from '@/pages/SelectPostImage/SelectPostImage';
import MyImageTemplateNew from '@/molecules/MyImageTemplate/MyImageTemplateNew';

/* 랜딩 페이지 관련 */
import Landing from '@/pages/Landing/Landing';
import DetailImage from '@/molecules/DetailImage/DetailImage';

/* 커뮤니티 페이지 관련 */
import Community from '@/pages/Community/Community';
import CommunityDetail from '@/pages/CommunityDetail/CommunityDetail';

/* 유저 페이지 관련 */
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import SetInitialProfile from '@/pages/SetInitialProfile/SetInitialProfile';
import OverlapTemplate from '@/molecules/OverlapTemplate/OverlapTemplate';

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
              path: 'board',
              element: <MyPage />,
              children: [
                {
                  path: ':boardText',
                  element: <MyImageTemplateNew />,
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
              path: 'post/detail/:imageId',
              element: <CommunityDetail />,
            },
            {
              path: 'bookmark',
              element: <MyPage />,
              children: [
                {
                  path: 'field/all',
                  element: <MyPage />,
                },
                {
                  path: ':boardText',
                  element: <MyPage />,
                },
              ],
            },
            {
              path: 'bookmark/field/all/detail/:imageId',
              element: <CommunityDetail />,
            },
            {
              path: 'bookmark/:boardText/detail/:imageId',
              element: <CommunityDetail />,
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
                      element: <MyImageTemplateNew />,
                    },
                  ],
                },
              ],
            },
            {
              path: 'newpost/newBoard',
              element: <NewBoard />,
              children: [
                {
                  path: ':imageId',
                  element: <NewBoard />,
                },
              ],
            },
          ],
        },
        {
          path: 'newstyle',
          element: <NewStyle />,
        },
        {
          path: 'style',
          children: [
            { index: true, element: <Landing /> },
            {
              path: 'detail',
              element: <Landing />,
              children: [
                {
                  path: ':imageId',
                  element: <DetailImage />,
                },
              ],
            },
            {
              path: 'newBoard/:imageId',
              element: <NewBoard />,
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
