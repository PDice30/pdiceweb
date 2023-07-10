import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import { useState } from 'react';

type Props = {
  title: string
}
const Header = (props: Props) => {
  return (
    <h1>{props.title ? props.title : 'Default title'}</h1>
  );
}

const HomePage = () => {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
      <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <Link href='./posts/test-post'>Visit the Test post page</Link>

      <Image src='/images/pdice.png' height={144} width={144} alt='pdice' />
    </div>
    </>
    

  );
}

export default HomePage;