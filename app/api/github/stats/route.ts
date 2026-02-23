import { NextResponse } from "next/server";
import { getGitHubStats } from "@/lib/github/fetchers";

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const stats = await getGitHubStats();

    return NextResponse.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("GitHub Stats API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch GitHub stats",
        data: {
          totalRepos: 151,
          totalStars: 0,
          totalForks: 0,
          followers: 682,
          topLanguages: {},
        },
      },
      { status: 500 }
    );
  }
}
