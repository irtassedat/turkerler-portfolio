import { NextResponse } from "next/server";

const GITHUB_USERNAME = "irtassedat";

export async function GET() {
  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers: { Accept: "application/vnd.github.v3+json" },
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
        {
          headers: { Accept: "application/vnd.github.v3+json" },
          next: { revalidate: 3600 },
        }
      ),
    ]);

    if (!profileRes.ok || !reposRes.ok) {
      return NextResponse.json(
        { error: "GitHub API error" },
        { status: 500 }
      );
    }

    const profile = await profileRes.json();
    const repos = await reposRes.json();

    return NextResponse.json({ profile, repos });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
