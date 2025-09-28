import { Link } from 'react-router-dom';
import { ArrowLeft, Youtube } from 'lucide-react';

const pythonCurriculum = [
  { week: 1, title: 'Introduction to Python', video_link: 'https://www.youtube.com/watch?v=7KZVK2g6mcE', topics: ['Variables', 'Data Types', 'Basic Operators', 'Your First Program'] },
  { week: 2, title: 'Functions, Loops, Lists', video_link: 'https://www.youtube.com/watch?v=ncOM6WbLzQk', topics: ['Conditional Statements (if/else)', 'Loops (for/while)', 'Defining Functions', 'Lists (briefly)'] },
  { week: 3, title: 'Dive Into Homework 1', video_link: 'https://www.youtube.com/watch?v=i3szxOffGQ4&pp=0gcJCfYJAYcqIYzv', topics: ['Review'] },
  { week: 4, title: 'Lists, Tuples, Dictionaries', video_link: 'https://www.youtube.com/watch?v=-CF7HHZGxLE', topics: ['Lists', 'Tuples', 'Dictionaries', 'Fetching data', 'Adding/Removing/Updating'] },
  { week: 5, title: 'Classes', video_link: 'https://www.youtube.com/watch?v=0_R9kfTjORY', topics: ['Classes', 'Inheritance', 'Object-Oriented Programming'] },
  { week: 6, title: 'Brain-Computer Interfaces Part 2: Neurosity Crown with Python', video_link: '', topics: ['Neurosity Crown', 'Applying Python to read brain signals', 'Building a simple BCI application', 'Final Project Ideas'] },
];

const neuroscienceCurriculum = [
  { week: 1, title: 'Introduction To Neuroscience', video_link: 'https://www.youtube.com/watch?v=l7lljjk5t6o', topics: ['Major Brain Regions (Cerebrum, Cerebellum, Brainstem)', 'The Four Lobes and their Functions', 'The Neuron Doctrine'] },
  { week: 2, title: 'Neurons & Synapses', video_link: 'https://www.youtube.com/watch?v=EQRbDrk0uOo', topics: ['Anatomy of a Neuron', 'The Myelin Sheath', 'Types of Neurons (Sensory, Motor, Interneurons)', 'Axon', 'Dendrite', 'Synapse'] },
  { week: 3, title: 'Synaptic Transmission', video_link: 'https://www.youtube.com/watch?v=RAzIAqBrwPI', topics: ['Resting & Action Potentials', 'The Synapse', 'Neurotransmitters (Excitatory vs. Inhibitory)'] },
  { week: 4, title: 'Brain Disorders', video_link: 'https://www.youtube.com/watch?v=EQVVUzT866M', topics: ['Neuroplasticity: "Neurons that fire together, wire together"', 'Long-Term Potentiation (LTP) & Depression (LTD)', 'Brain Disorders'] },
  { week: 5, title: 'Senses & Movement', video_link: 'https://www.youtube.com/watch?v=b4zCZX5z1yk', topics: ['How Senses Work: Transduction', 'Visual and Auditory Pathways', 'The Motor Cortex and Movement'] },
  { week: 6, title: 'Brain-Computer Interfaces Part 1', video_link: 'https://www.youtube.com/watch?v=Rez1cjphp0c', topics: ['Tools of Neuroscience: EEG & fMRI', 'From Correlation to Causation: TMS', 'The Future: Brain-Computer Interfaces', 'Peek at Neurosity Crown'] },
];

const CurriculumCard = ({ week, title, video_link, topics }: { week: number, title: string, video_link: string, topics: string[] }) => (
  <div className="bg-surface border border-border rounded-xl p-6 flex flex-col">
    <div className="flex-grow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-text-primary">Week {week}: {title}</h3>
        <a href={video_link} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-colors">
          <Youtube className="w-6 h-6" />
        </a>
      </div>
      <ul className="space-y-2 text-text-secondary list-disc pl-5">
        {topics.map((topic, index) => <li key={index}>{topic}</li>)}
      </ul>
    </div>
  </div>
);

export default function CurriculumPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary">Our 6-Week Dual Curriculum</h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Every week combines a Python programming lecture with a neuroscience lecture, culminating in a final project where we bridge both fields.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="space-y-16">
        {/* Python Track */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-learning bg-clip-text text-transparent">🐍 Python Track</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pythonCurriculum.map(item => <CurriculumCard key={item.week} {...item} />)}
          </div>
        </div>

        {/* Neuroscience Track */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-neural bg-clip-text text-transparent">🧠 Neuroscience Track</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neuroscienceCurriculum.map(item => <CurriculumCard key={item.week} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
