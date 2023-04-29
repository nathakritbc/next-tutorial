import { cookieServerSide, cookieClientSide } from "../utils/nextCookie";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
const Home = ({ user }) => {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <h1>Your Profile</h1>
      <pre>user : {user}</pre>
    </div>
  );
};

export const getServerSideProps = ({ req, res }) => {
  const user = cookieServerSide.getCookieFuncServerSide("user", req, res);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
};

export default Home;
