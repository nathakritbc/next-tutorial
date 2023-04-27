import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";

const timeMaxAge = 60 * 6 * 24;

// cookie client-side function

const setCookieFuncClientSide = async (key, value) => {
  try {
    setCookie(key, value);
  } catch (error) {
    console.error("setCookie error : ", error);
  }
};

const getCookieFuncClientSide = (key) => {
  try {
    return getCookie(key);
  } catch (error) {
    console.error("getCookie error : ", error);
  }
};

const getAllCookiesFuncClientSide = () => {
  try {
    return getCookies();
  } catch (error) {
    console.error("getCookie error : ", error);
  }
};

const deleteCookieFuncClientSide = (key) => {
  try {
    return deleteCookie(key);
  } catch (error) {
    console.error("deleteCookie error : ", error);
  }
};

// cookie server-side function
const setCookieServerSide = async (key, value, req, res) => {
  try {
    setCookie(key, value, { req, res, maxAge: timeMaxAge });
  } catch (error) {
    console.error("setCookie error : ", error);
  }
};

const getCookieFuncServerSide = (key, req, res) => {
  try {
    return getCookie(key, { req, res });
  } catch (error) {
    console.error("getCookie error : ", error);
  }
};

const getAllCookiesFuncServerSide = (req, res) => {
  try {
    return getCookies({ req, res });
  } catch (error) {
    console.error("getCookie error : ", error);
  }
};

const deleteCookieFuncServerSide = (key, req, res) => {
  try {
    return deleteCookie(key, { req, res });
  } catch (error) {
    console.error("deleteCookie error : ", error);
  }
};

const cookieServerSide = {
  setCookieServerSide,
  getCookieFuncServerSide,
  getAllCookiesFuncServerSide,
  deleteCookieFuncServerSide,
};

const cookieClientSide = {
  setCookieFuncClientSide,
  getCookieFuncClientSide,
  getAllCookiesFuncClientSide,
  deleteCookieFuncClientSide,
};

export { cookieServerSide, cookieClientSide };
