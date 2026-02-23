import { Octokit } from "@octokit/rest";

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "KHemanthRaju";
