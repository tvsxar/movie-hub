import jwt from "jsonwebtoken";

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  function getDaySuffix(day: number) {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return `${day}${getDaySuffix(day)} ${month} ${year}`;
}

export function generateToken(id: string) {
  return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: "30d" });
}

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: (process.env.NODE_ENV === "production" ? "none" : "strict") as "strict" | "lax" | "none",
  maxAge: 30 * 24 * 60 * 60,
  path: "/",
};
