import Cryptr from "cryptr";

export function encrypt(text: string): string {
  const secretKey = process.env.NEXTAUTH_SECRET;
  if (!secretKey) {
    throw new Error("Missing encryption secret key");
  }
  const cryptr = new Cryptr(secretKey);

  const encryptedString: string = cryptr.encrypt(text);
  return encryptedString;
}

export function decrypt(encryptedString: string): string {
  const secretKey = process.env.NEXTAUTH_SECRET;
  if (!secretKey) {
    throw new Error("Missing decryption secret key");
  }
  const cryptr = new Cryptr(secretKey);

  const text: string = cryptr.decrypt(encryptedString);
  return text;
}
