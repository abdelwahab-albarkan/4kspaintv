import { POSTS, getAllPosts, getPostBySlug, type BlogPost } from '@/lib/content/posts';

export type { BlogPost };
export const BLOG_POSTS = POSTS;
export const getBlogPosts = getAllPosts;
export const getBlogPostBySlug = getPostBySlug;
