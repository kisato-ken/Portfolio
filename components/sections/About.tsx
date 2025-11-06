'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-image', {
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-muted/30"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <motion.div
            className="about-image perspective-1000"
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-4 border-primary">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <div className="about-content md:col-span-2 space-y-6">
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              With 2+ years of experience in AI/ML, I specialize in developing
              production-grade systems using modern technologies and best
              practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-l-4 border-l-primary preserve-3d hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-primary">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h4 className="text-xl font-semibold">
                    BCA in AI/ML
                  </h4>
                  <p className="text-muted-foreground font-medium">
                    Assam Down Town University
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Specialized in Machine Learning, Deep Learning, and AI
                    Systems Architecture
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
