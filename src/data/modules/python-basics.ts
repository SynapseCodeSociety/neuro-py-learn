export const sections = [
  {
    content: `## Welcome to Python Programming

Python is one of the most popular programming languages in the world. It's used for:

- **Web development** (Instagram, Spotify)
- **Data science** (Netflix recommendations)  
- **Artificial intelligence** (ChatGPT, self-driving cars)
- **Game development** (Civilization IV)

Python's philosophy: "Simple is better than complex."`,
    type: 'content'
  },
  {
    content: `## Your First Python Program

In programming, it's traditional to start with a "Hello, World!" program. In Python, we use the \`print()\` function to display text on the screen.

---

Which function do we use to display text in Python?

<MultipleChoice correctAnswer={2}>
  <p>display()</p>
  <p>show()</p>
  <p>print()</p>
  <p>output()</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Writing Your First Code

Excellent! The \`print()\` function is your gateway to communicating with the computer. 

Let's write a classic first program. Type the exact line of code that will display: **Hello, World!**

*Hint: Remember to use quotes around the text!*

<FillInTheBlank correctAnswer={['print("Hello, World!")', "print('Hello, World!')"]} placeholder='print("...")' />`,
    type: 'interactive'
  }
] as const;