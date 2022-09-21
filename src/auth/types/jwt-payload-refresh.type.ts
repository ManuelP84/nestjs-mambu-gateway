export type JwtPayloadRefresh = {
  sub: string;
  email: string;
  refreshToken: string;
  roles: string[];
};
