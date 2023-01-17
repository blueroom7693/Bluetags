/**
 * Model User
 *
 */
export type User = {
  id: string;
  email: string;
  name: string;
  password: string;
  profile: string;
  auth: boolean;
  admin: boolean | null;
  createdAt: Date | null;
  readBlueCard: string[];
  subscribe: string[];
  isSocial: boolean;
};

/**
 * Model SocialUser
 *
 */
export type SocialUser = {
  id: string;
  email: string;
  name: string;
  profile: string;
  createdAt: Date | null;
  readBlueCard: string[];
  subscribe: string[];
  isSocial: boolean;
};

/**
 * Model Token
 *
 */
export type Token = {
  id: string;
  userId: string;
};

/**
 * Model BlueCard
 *
 */
export type BlueCard = {
  id: string;
  title: string;
  thumbnail: string;
  backGroundThumbnail: string;
  summary: string;
  description: string;
  bluetags: string[];
  sns: string;
  createdAt: Date;
  deadline: Date | null;
  projectId: string;
};

/**
 * Model Project
 *
 */
export type Project = {
  id: string;
  key: string;
  chain: string;
  title: string;
  logoUrl: string;
};

/**
 * Model NewsCard
 *
 */
export type NewsCard = {
  id: string;
  title: string;
  thumbnail: string;
  summary: string;
  description: string;
  createdAt: Date;
};
