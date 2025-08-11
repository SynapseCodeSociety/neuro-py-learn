'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserProgress } from './types';

interface ProgressContextType {
  progress: UserProgress;
  isLoaded: boolean;
  completeSection: (courseId: string, moduleId: string, sectionIndex: number) => void;
  getModuleProgress: (courseId: string, moduleId: string) => number[];
  isModuleCompleted: (courseId: string, moduleId: string, totalSections: number) => boolean;
  resetAllProgress: () => void;
  getOverallProgress: (courseId: string) => { completed: number; total: number };
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<UserProgress>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('userProgress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const updateProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem('userProgress', JSON.stringify(newProgress));
  };

  const completeSection = (courseId: string, moduleId: string, sectionIndex: number) => {
    const newProgress = { ...progress };
    if (!newProgress[courseId]) {
      newProgress[courseId] = { completedSections: {} };
    }
    if (!newProgress[courseId].completedSections[moduleId]) {
      newProgress[courseId].completedSections[moduleId] = [];
    }
    const completed = newProgress[courseId].completedSections[moduleId];
    if (!completed.includes(sectionIndex)) {
      completed.push(sectionIndex);
      completed.sort((a, b) => a - b);
    }
    updateProgress(newProgress);
  };

  const getModuleProgress = (courseId: string, moduleId: string): number[] => {
    return progress[courseId]?.completedSections[moduleId] || [];
  };
  
  const isModuleCompleted = (courseId: string, moduleId: string, totalSections: number): boolean => {
    const completed = getModuleProgress(courseId, moduleId);
    return completed.length === totalSections;
  };

  const getOverallProgress = (courseId: string) => {
    const courseProgress = progress[courseId];
    if (!courseProgress) return { completed: 0, total: 0 };

    let totalCompleted = 0;
    let totalSections = 0;

    Object.values(courseProgress.completedSections).forEach(moduleProgress => {
      totalCompleted += moduleProgress.length;
      // Note: We'll need to know total sections per module to calculate accurately
      // For now, we'll estimate based on completion
    });

    return { completed: totalCompleted, total: Math.max(totalCompleted, 10) };
  };

  const resetAllProgress = () => {
    if (window.confirm("Are you sure you want to reset all your progress? This cannot be undone.")) {
      updateProgress({});
    }
  };

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      isLoaded, 
      completeSection, 
      getModuleProgress, 
      isModuleCompleted, 
      resetAllProgress,
      getOverallProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};