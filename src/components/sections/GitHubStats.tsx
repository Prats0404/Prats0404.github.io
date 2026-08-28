"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GitHubData {
  public_repos: number;
  followers: number;
  stargazers_count?: number; 
}

export default function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Prats0404")
      .then(res => res.json())
      .then(data => {
        if (data.public_repos !== undefined) {
          setData({
            public_repos: data.public_repos,
            followers: data.followers
          });
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading || !data) return null;

  return (
    <section className="py-12 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto glass-card rounded-2xl p-6 border border-[var(--color-border-subtle)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[var(--color-text-primary)]">GitHub Open Source</h4>
                <p className="text-sm text-[var(--color-text-muted)]">Check out my contributions and repositories.</p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-accent-blue)]">{data.public_repos}</div>
                <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mt-1">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-accent-violet)]">{data.followers}</div>
                <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mt-1">Followers</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
