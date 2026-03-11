import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TurkerlerVision from "@/components/TurkerlerVision";
import MarketAnalysis from "@/components/MarketAnalysis";
import EnergyArchitecture from "@/components/EnergyArchitecture";
import GitHubProjects from "@/components/GitHubProjects";
import LiveDemo from "@/components/LiveDemo";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { fetchGitHubProfile, fetchGitHubRepos } from "@/lib/github";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  let profile: Awaited<ReturnType<typeof fetchGitHubProfile>>;
  let repos: Awaited<ReturnType<typeof fetchGitHubRepos>>;

  try {
    [profile, repos] = await Promise.all([
      fetchGitHubProfile(),
      fetchGitHubRepos(),
    ]);
  } catch {
    // Fallback data if GitHub API fails
    profile = {
      login: "irtassedat",
      avatar_url: "https://github.com/irtassedat.png",
      html_url: "https://github.com/irtassedat",
      name: "Sedat Irtas",
      bio: "Passionate fullstack developer",
      public_repos: 46,
      followers: 10,
      following: 16,
    };
    repos = [];
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <TurkerlerVision />
      <MarketAnalysis />
      <EnergyArchitecture />
      <LiveDemo />
      <GitHubProjects repos={repos} profile={profile} />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
