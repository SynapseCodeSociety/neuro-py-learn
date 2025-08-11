export const sections = [
  {
    content: `## Anatomy of a Neuron

Every neuron has three main parts that work together to process and transmit information:

**Dendrites**: The "receivers" - branch-like structures that collect signals from other neurons  
**Cell Body (Soma)**: The "processor" - contains the nucleus and makes decisions about whether to fire  
**Axon**: The "transmitter" - a long fiber that carries signals away from the cell body`,
    type: 'content'
  },
  {
    content: `## Signal Reception

Dendrites are like the antenna of the neuron. They have special receptors that detect chemical signals (neurotransmitters) from other neurons.

---

Which part of the neuron is primarily responsible for receiving signals from other cells?

<MultipleChoice correctAnswer={0}>
  <p>Dendrites</p>
  <p>Cell body (soma)</p>
  <p>Axon</p>
  <p>Nucleus</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## The Neural Highway

Perfect! The axon is like a biological cable that carries electrical signals. Some axons are incredibly long - the axon from your spinal cord to your big toe can be over a meter long!

At the end of the axon are **synapses** - tiny gaps where the neuron communicates with other cells.

---

What are the tiny gaps called where neurons communicate with other cells?

<FillInTheBlank correctAnswer={["synapses", "synapse"]} placeholder="Enter the term..." />`,
    type: 'interactive'
  }
] as const;