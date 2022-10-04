import Image from 'next/image';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <div className={'flex flex-col items-center pb-3'}>
        <Image
          src="/Google.png"
          alt="Google Logo"
          width={272}
          height={92}
          priority
        />
      </div>
      <Search />
      language toggle
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
