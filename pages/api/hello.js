import { cookieServerSide } from "../../utils/nextCookie";

export default function handler(req, res) {
  // deleteCookieFunc("user", req, res);
  cookieServerSide.setCookieFuncServerSide(
    "user",
    { id: 1, name: "nathakrit" },
    req,
    res
  );
  const user = cookieServerSide.getCookieFuncServerSide("user", req, res);

  console.log("user", user);

  if (user) {
    res.status(200).json({ name: "John Doe", user: JSON.parse(user) });
    return;
  }
  res.status(200).json({ name: "John Doe" });
}
