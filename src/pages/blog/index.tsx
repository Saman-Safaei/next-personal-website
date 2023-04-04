import type { NextPageWithLayout } from '@/pages/_app';
import { useAppDispatch, useSelect } from '@/store';
import { actions } from '@/store/ui-slice';
import { Fragment } from 'react';
import DefaultLayout from '@/components/layout/DefaultLayout';

const Blog: NextPageWithLayout = () => {
  const isSidebarOpen = useSelect(state => state.ui.isSidebarOpen);
  const dispatch = useAppDispatch();

  const toggleClickHandler = () => dispatch(actions.toggleSidebar());

  return (
    <div className='py-20'>
      <p className='text-center w-fit mx-auto text-2xl mb-3 animated-text'>... به زودی در دسترس قرار می گیرد ...</p>
      <p className='text-lg text-center text-gray-400'>صفحه در دست ساخت می باشد.</p>
    </div>
  );
};

Blog.getLayout = page => (
  <DefaultLayout navbar footer>
    {page}
  </DefaultLayout>
);

export default Blog;
