export const sections = [
  {
    content: `## Working with Data

Python excels at handling different types of data. Let's explore the fundamental data types:

**Strings**: Text data like "Hello, World!"  
**Numbers**: Integers (42) and decimals (3.14)  
**Booleans**: True or False values  
**Lists**: Collections of items [1, 2, 3]`,
    type: 'content'
  },
  {
    content: `## Variables and Assignment

Variables are like containers that store data. In Python, you create variables using the assignment operator \`=\`.

\`\`\`python
name = "Alice"
age = 25
is_student = True
\`\`\`

---

What operator is used to assign a value to a variable in Python?

<MultipleChoice correctAnswer={2}>
  <p>:</p>
  <p>-></p>
  <p>=</p>
  <p>==</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Lists and Collections

Perfect! Lists are one of Python's most powerful features. They can store multiple items in a single variable.

\`\`\`python
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
\`\`\`

---

How do you create a list containing the numbers 1, 2, and 3 in Python?

<FillInTheBlank correctAnswer={["[1, 2, 3]", "[1,2,3]"]} placeholder="[...]" />`,
    type: 'interactive'
  }
] as const;