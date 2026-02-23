import { octokit, GITHUB_USERNAME } from "./client";
import type { GitHubRepo, GitHubUser, GitHubStats } from "./types";

export async function getGitHubUser(): Promise<GitHubUser | null> {
  try {
    const { data } = await octokit.rest.users.getByUsername({
      username: GITHUB_USERNAME,
    });
    return data as GitHubUser;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
}

export async function getGitHubRepos(
  limit: number = 100
): Promise<GitHubRepo[]> {
  try {
    const { data } = await octokit.rest.repos.listForUser({
      username: GITHUB_USERNAME,
      sort: "updated",
      per_page: limit,
      type: "owner", // Only repos owned by the user, not forks
    });

    // Filter out forks and sort by stars
    const repos = data
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);

    return repos as GitHubRepo[];
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const [user, repos] = await Promise.all([
      getGitHubUser(),
      getGitHubRepos(),
    ]);

    const totalStars = repos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    );
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    const topLanguages: { [key: string]: number } = {};
    repos.forEach((repo) => {
      if (repo.language) {
        topLanguages[repo.language] = (topLanguages[repo.language] || 0) + 1;
      }
    });

    return {
      totalRepos: user?.public_repos || 0,
      totalStars,
      totalForks,
      followers: user?.followers || 0,
      topLanguages,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return {
      totalRepos: 151,
      totalStars: 0,
      totalForks: 0,
      followers: 682,
      topLanguages: {},
    };
  }
}
