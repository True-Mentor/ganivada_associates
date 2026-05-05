import { MetadataRoute } from "next";
import { getAllPracticeAreas, getAllPosts, getAllTeamMembers } from "@/lib/mdx";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ganivadaassociates.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/about`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/vision-mission`, priority: 0.8, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/practice-areas`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/team`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/insights`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/resources`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/careers`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.9, changeFrequency: "yearly" as const },
  ];

  const practiceAreaPages = getAllPracticeAreas().map((area) => ({
    url: `${BASE_URL}/practice-areas/${area.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const teamPages = getAllTeamMembers().map((member) => ({
    url: `${BASE_URL}/team/${member.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const insightPages = getAllPosts().map((post) => ({
    url: `${BASE_URL}/insights/${post.slug}`,
    priority: 0.6,
    changeFrequency: "yearly" as const,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...practiceAreaPages, ...teamPages, ...insightPages];
}
