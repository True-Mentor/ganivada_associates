import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

const contentDir = path.join(process.cwd(), "src/content");

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(markdown);
  return String(result);
}

function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
}

function readMDX(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export function getAllPracticeAreas() {
  const dir = path.join(contentDir, "practice-areas");
  return getMDXFiles(dir).map((file) => {
    const { frontmatter } = readMDX(path.join(dir, file));
    return frontmatter as {
      slug: string;
      title: string;
      summary: string;
      icon: string;
      order: number;
      faqs?: { q: string; a: string }[];
      related?: string[];
    };
  }).sort((a, b) => a.order - b.order);
}

export async function getPracticeAreaBySlug(slug: string) {
  const filePath = path.join(contentDir, "practice-areas", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const { frontmatter, content } = readMDX(filePath);
  const contentHtml = await markdownToHtml(content);
  return { ...frontmatter, content: contentHtml, slug } as {
    slug: string;
    title: string;
    summary: string;
    icon: string;
    order: number;
    content: string;
    faqs?: { q: string; a: string }[];
    related?: string[];
  };
}

export function getAllPosts() {
  const dir = path.join(contentDir, "insights");
  return getMDXFiles(dir).map((file) => {
    const { frontmatter, content } = readMDX(path.join(dir, file));
    const rt = readingTime(content);
    return { ...frontmatter, readingTime: rt.text } as {
      slug: string;
      title: string;
      date: string;
      author: string;
      tags: string[];
      excerpt: string;
      ogImage?: string;
      readingTime: string;
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(contentDir, "insights", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const { frontmatter, content } = readMDX(filePath);
  const rt = readingTime(content);
  const contentHtml = await markdownToHtml(content);
  return { ...frontmatter, content: contentHtml, slug, readingTime: rt.text };
}

export function getAllTeamMembers() {
  const dir = path.join(contentDir, "team");
  return getMDXFiles(dir).map((file) => {
    const { frontmatter } = readMDX(path.join(dir, file));
    return frontmatter as { slug: string; name: string; designation: string; photo: string; order: number };
  }).sort((a, b) => a.order - b.order);
}

export async function getTeamMemberBySlug(slug: string) {
  const filePath = path.join(contentDir, "team", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const { frontmatter, content } = readMDX(filePath);
  const contentHtml = await markdownToHtml(content);
  return { ...frontmatter, content: contentHtml, slug };
}
