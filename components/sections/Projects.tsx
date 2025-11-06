'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    icon: '🎓',
    title: 'AlumniAI',
    description:
      'Developed an intelligent alumni networking and career guidance platform powered by AI. Features advanced recommendation algorithms for connecting students with alumni mentors, automated event management, and personalized career path suggestions based on professional backgrounds and industry trends.',
    tags: ['AI/ML', 'Python', 'React', 'Node.js', 'PostgreSQL', 'NLP'],
    github: 'https://github.com/kisato-ken/Aluminai_2025',
  },
  {
    icon: '💻',
    title: 'Nocturne OS',
    description:
      'Building a modern, custom operating system from scratch with a focus on performance, security, and user experience. Implements core OS functionalities including process management, memory allocation, file systems, and a custom kernel designed for efficiency and modularity.',
    tags: ['C', 'Assembly', 'Rust', 'Systems Programming', 'Kernel Development'],
    github: 'https://github.com/kisato-ken/Nocturne',
  },
  {
    icon: '📈',
    title: 'Stock Price Predictor',
    description:
      'Engineered a machine learning-based stock price prediction system utilizing LSTM neural networks and advanced time-series analysis. Incorporates real-time market data integration, technical indicators, and sentiment analysis to forecast stock price movements with enhanced accuracy.',
    tags: ['Python', 'TensorFlow', 'LSTM', 'Pandas', 'Scikit-learn', 'API Integration'],
    github: 'https://github.com/kisato-ken/Stock-Price-Predictor',
  },
  {
    icon: '🎵',
    title: 'Nocturne Music Player',
    description:
      'Designed a sleek, modern music player interface with seamless Spotify integration, built as a native component for Nocturne OS. Features intuitive controls, playlist management, real-time audio visualization, and cross-platform synchronization with advanced audio processing capabilities.',
    tags: ['TypeScript', 'Electron', 'React', 'Spotify API', 'Web Audio API', 'UI/UX'],
    github: 'https://github.com/kisato-ken/Nocturne-Music-Player',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="preserve-3d h-full"
            >
              <Card className="h-full flex flex-col border-2 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20">
                <CardHeader>
                  <motion.div
                    className="text-5xl mb-4"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    {project.icon}
                  </motion.div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
