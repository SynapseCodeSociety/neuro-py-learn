export const sections = [
  {
    content: `## Welcome to Neuroscience

The human brain contains approximately **86 billion neurons**, each connecting to thousands of others. This creates a network more complex than anything we've ever built.

In this course, you'll discover how these microscopic cells create consciousness, memory, and everything that makes you uniquely human.`,
    type: 'content'
  },
  {
    content: `## The Brain's Building Blocks

The nervous system is made up of specialized cells called **neurons**. These cells have a unique ability: they can transmit electrical and chemical signals across vast distances in your body.`,
    type: 'content'
  },
  {
    content: `## Neurons: The Electrical Messengers

What makes neurons different from other cells in your body?

<MultipleChoice correctAnswer={1}>
  <p>They can divide rapidly</p>
  <p>They can transmit electrical signals</p>
  <p>They contain more DNA</p>
  <p>They don't need oxygen</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Electrical Messengers

Excellent! Neurons are electrical messengers. When a neuron "fires," it sends an electrical signal called an **action potential** down its length.

This signal travels at speeds up to 120 meters per second - faster than a race car on a highway!`,
    type: 'content'
  },
  {
    content: `Complete this sentence: When a neuron fires, it sends an electrical signal called an ______.

<FillInTheBlank correctAnswer="action potential" placeholder="Enter your answer..." />`,
    type: 'interactive'
  }
] as const;