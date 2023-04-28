import { cookieServerSide, cookieClientSide } from "../utils/nextCookie";

const Home = () => {
  cookieClientSide.setCookieFuncClientSide("user", {
    id: 1,
    name: "nathakrit",
  });
  // const user = cookieClientSide.getCookieFuncClientSide("user");
  // console.log("user", user);
  return <div>page content </div>;
};

export const getServerSideProps = ({ req, res }) => {
  // const user = cookieServerSide.getCookieFuncServerSide("user", req, res);

  // console.log("user", user);
  // getCookies({ req, res });
  // deleteCookie("user", { req, res });

  return { props: {} };
};

export default Home;
