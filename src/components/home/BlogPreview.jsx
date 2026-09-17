import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    category: 'AI & ML',
    title: 'How Generative AI is Transforming Business Workflows in 2024',
    date: 'Oct 12, 2024',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop'
  },
  {
    category: 'Software Development',
    title: 'Why Custom ERPs are Better than Off-the-Shelf Solutions',
    date: 'Sep 28, 2024',
    img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2000&auto=format&fit=crop'
  },
  {
    category: 'Technology',
    title: 'Moving to the Cloud: A Strategic Guide for Startups',
    date: 'Sep 15, 2024',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop'
  }
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h4 className="text-strydo-purple font-bold uppercase tracking-widest mb-4">Insights</h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#111114]">Latest from Strydo.</h2>
          </div>
          <button className="hidden md:block text-strydo-purple font-bold border-b-2 border-strydo-purple">
            View All Posts
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-3xl overflow-hidden mb-6 border border-black/5">
                <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-strydo-orange font-bold text-xs uppercase tracking-widest">{post.category}</span>
              <h3 className="text-xl font-bold text-[#111114] mt-2 group-hover:text-strydo-purple transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-black/40 text-sm mt-4 font-medium">{post.date} • 5 min read</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;