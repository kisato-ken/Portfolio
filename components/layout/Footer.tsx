'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="https://github.com/kisato-ken"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-8 h-8 text-muted-foreground hover:text-foreground transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/siddharthadhar04"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-8 h-8 text-muted-foreground hover:text-foreground transition-colors" />
            </motion.a>
          </motion.div>

          <motion.p
            className="text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            © 2025 Siddhartha Shankar Dhar. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
