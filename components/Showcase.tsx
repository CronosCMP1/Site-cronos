
import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import CTAButton from './CTAButton';

const data = [
  { name: 'Mês 1', roas: 2.1 },
  { name: 'Mês 2', roas: 2.3 },
  { name: 'Mês 3', roas: 2.4 },
  { name: 'Mês 4', roas: 5.8 },
  { name: 'Mês 5', roas: 9.2 },
  { name: 'Mês 6', roas: 14.5 },
];

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-16 md:py-32 bg-cronos-black border-t border-cronos-gray/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cronos-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16
