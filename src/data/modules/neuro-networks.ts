export const sections = [
  {
    content: `## Neural Networks

Individual neurons are amazing, but the real magic happens when they connect together. The human brain contains trillions of connections called **synapses**.

These connections form complex networks that can:
- Store memories
- Process emotions  
- Control movement
- Enable consciousness`,
    type: 'content'
  },
  {
    content: `## Brain Regions

Different regions of the brain specialize in different functions:

**Cerebral Cortex**: Higher-order thinking, decision making  
**Hippocampus**: Memory formation and storage  
**Amygdala**: Emotional processing, fear responses  
**Cerebellum**: Balance and coordinated movement

---

Which brain region is primarily responsible for memory formation?

<MultipleChoice correctAnswer={1}>
  <p>Cerebral cortex</p>
  <p>Hippocampus</p>
  <p>Amygdala</p>
  <p>Cerebellum</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Neuroplasticity

Excellent! The brain has an amazing ability called **neuroplasticity** - the capacity to reorganize and form new neural connections throughout life.

This means you can literally change your brain through learning and practice!

---

The brain's ability to reorganize and form new connections is called ______.

<FillInTheBlank correctAnswer={["neuroplasticity", "neural plasticity"]} placeholder="Enter the scientific term..." />`,
    type: 'interactive'
  }
] as const;