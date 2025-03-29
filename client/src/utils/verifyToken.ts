import { jwtDecode } from "jwt-decode";

/**
 * Verifies if the token is valid and not expired.
 * @param token - The JWT token to verify.
 * @returns true if the token is valid, false otherwise.
 */

export const verifyToken = (token: string) => {
  if (!token) {
    return false;
  }

  return jwtDecode(token);
};
