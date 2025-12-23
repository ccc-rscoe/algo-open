import React from 'react';
import { Users, Trophy, CheckCircle, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Master the Algorithm</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The CCC's Algorithmic Open is designed to test your problem-solving skills, teamwork, and coding efficiency. Modeled after the prestigious ICPC, this contest brings together the brightest minds of RSCOE to compete for glory.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Team Formation</h3>
                  <p className="text-sm text-gray-500">Form a team of up to 3 members or go solo. Collaboration is key.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Platform & Languages</h3>
                  <p className="text-sm text-gray-500">Hosted on <strong>Codechef</strong>. Support for C++, Java, Python, and other popular languages.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Trophy className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Valid Submission</h3>
                  <p className="text-sm text-gray-500">Strict judging on correctness and time complexity. No partial points.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25"></div>
            <div className="relative glass-card p-6 rounded-lg">
              <h3 className="text-lg font-mono text-primary mb-4">&gt; contest_specs.json</h3>
              <ul className="space-y-3 font-mono text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> <span>Difficulty: Beginner to Advanced</span></li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> <span>Languages: C++, Java, Python, etc.</span></li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> <span>Platform: <span className="text-white font-bold">Codechef</span></span></li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> <span>Registration: <span className="text-accent font-bold">FREE</span></span></li>
              </ul>
              <div className="mt-6 h-40 bg-black/50 rounded overflow-hidden relative">
                {/* Abstract Code lines visual */}
                <div className="absolute top-2 left-2 text-xs text-gray-600">
                  1 &nbsp; #include &lt;bits/stdc++.h&gt;<br />
                  2 &nbsp; using namespace std;<br />
                  3 &nbsp; <br />
                  4 &nbsp; int main() &#123;<br />
                  5 &nbsp; &nbsp; &nbsp; int t;<br />
                  6 &nbsp; &nbsp; &nbsp; cin &gt;&gt; t;<br />
                  7 &nbsp; &nbsp; &nbsp; while(t--) &#123;<br />
                  8 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; solve();<br />
                  9 &nbsp; &nbsp; &nbsp; &#125;<br />
                  10 &nbsp; return 0;<br />
                  11 &#125;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;