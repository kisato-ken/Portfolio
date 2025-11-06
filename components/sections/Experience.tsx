'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: 'Comcast',
    logo: '📡',
    role: 'Software Engineer – AI/ML',
    duration: 'Aug 2024 – September 2025',
    description:
      'Developed and deployed production-grade ML models using TensorFlow and PyTorch, improving accuracy by 20%. Built ML workflows with Airflow, MLflow, and DVC, and deployed models on AWS SageMaker and Lambda, reducing costs and deployment time. Implemented SHAP/LIME dashboards for explainability and integrated LLM-powered chat capabilities using the OpenAI API.',
    highlights: [
      '🎯 20% accuracy improvement',
      '⚡ Reduced deployment time',
      '📊 SHAP/LIME dashboards',
      '🤖 LLM integration',
    ],
  },
  {
    company: 'Dentsu',
    logo: '🎯',
    role: 'Software Engineer',
    duration: 'May 2020 – Jul 2022',
    description:
      'Engineered RESTful APIs with Django/Flask, developed automated ML workflows using Airflow, and deployed services via Docker and AWS EC2. Created a centralized Feature Store and leveraged AutoML for ad campaign forecasting, improving efficiency and accuracy in production pipelines.',
    highlights: [
      '🔗 RESTful APIs',
      '🔄 Automated workflows',
      '📦 Docker deployment',
      '📈 AutoML forecasting',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <Card className="border-l-4 border-l-primary hover:shadow-2xl transition-all preserve-3d">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="text-6xl"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {exp.logo}
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                      <CardDescription className="flex gap-4 flex-wrap text-base">
                        <span className="text-primary font-semibold">
                          {exp.company}
                        </span>
                        <span className="text-muted-foreground">
                          {exp.duration}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <Badge
                        key={highlight}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
