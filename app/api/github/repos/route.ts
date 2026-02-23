import { NextResponse } from "next/server";
import { getGitHubRepos } from "@/lib/github/fetchers";

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const repos = await getGitHubRepos(50);

    return NextResponse.json({
      success: true,
      data: repos,
      count: repos.length,
    });
  } catch (error) {
    console.error("GitHub API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch repositories",
        data: [],
      },
      { status: 500 }
    );
  }
}
