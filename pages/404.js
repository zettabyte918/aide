import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className="container pt-4">
      <div className="row">
        <h1>404 Page Not Found</h1>
        <hr />

        <Link href="/">
          <a className="btn btn-dark  "> Go Home </a>
        </Link>
      </div>
    </div>
  );
};

export default Error;
