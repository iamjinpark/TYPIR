import Splash from '@/pages/Splash/Splash';
import Layout from '@/route/Layout';
import { createBrowserRouter } from 'react-router-dom';

/* 마이 페이지, 헤더 관련 */
import BoardTemplate from '@/molecules/BoardTemplate/BoardTemplate';
import MyDetailImage from '@/molecules/MyDetailImage/MyDetailImage';
import MyImageTemplate from '@/molecules/MyImageTemplate/MyImageTemplate';
import MyPostTemplate from '@/molecules/MyPostTemplate/MyPostTemplate';
import AccountManagement from '@/pages/AccountManagement/AccountManagement';
import EditProfile from '@/pages/EditProfile/EditProfile';
import MyPage from '@/pages/MyPage/MyPage';
import NewBoard from '@/pages/NewBoard/NewBoard';
import NewStyle from '@/pages/NewStyle/NewStyle';
import SelectPostImage from '@/pages/SelectPostImage/SelectPostImage';

/* 랜딩 페이지 관련 */
import DetailImage from '@/molecules/DetailImage/DetailImage';
import Landing from '@/pages/Landing/Landing';

/* 커뮤니티 페이지 관련 */
import Community from '@/pages/Community/Community';
import CommunityDetail from '@/pages/CommunityDetail/CommunityDetail';

/* 유저 페이지 관련 */
import SetInitialProfile from '@/pages/SetInitialProfile/SetInitialProfile';
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';

/* 사용자 인증 보호 레이아웃(페이지) */
import AuthLayout from '@/route/AuthLayout';

/* 페이지 리디렉션 */
import Redirect from '@/route/Redirect';

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
        element: <AuthLayout />,
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
                element: <MyDetailImage />,
              },
            ],
          },
          {
            path: 'board',
            element: <MyPage />,
            children: [
              {
                path: ':boardText',
                element: <MyImageTemplate />,
                children: [
                  {
                    path: 'detail/:imageId',
                    element: <MyDetailImage />,
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
                element: <MyPostTemplate />,
              },
              {
                path: ':boardText',
                element: <MyPostTemplate />,
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
                element: <BoardTemplate />,
                children: [
                  {
                    path: ':boardText',
                    element: <MyImageTemplate />,
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
        element: <AuthLayout />,
        children: [{ index: true, element: <NewStyle /> }],
      },
      {
        path: 'style',
        element: <AuthLayout />,
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
            element: <AuthLayout />,
            children: [{ index: true, element: <SetInitialProfile /> }],
          },
        ],
      },
      {
        path: 'community',
        element: <AuthLayout />,
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
      {
        path: '*',
        element: <Redirect />,
      },
    ],
  },
]);

export default router;
