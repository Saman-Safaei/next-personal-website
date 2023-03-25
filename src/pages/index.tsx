import { Fragment } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import DefaultLayout from '@/components/layout/DefaultLayout';

const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <p>test</p>
    </Fragment>
  );
};

Home.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default Home;
