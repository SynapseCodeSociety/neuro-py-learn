export const sections = [
  {
    content: `## Functions: Reusable Code

Functions are reusable blocks of code that perform specific tasks. They're like mini-programs within your program!

**Benefits of functions:**
- Avoid code repetition
- Make code more organized  
- Enable code reuse
- Easier testing and debugging`,
    type: 'content'
  },
  {
    content: `## Defining Functions

In Python, you define functions using the \`def\` keyword:

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

# Call the function
message = greet("Alice")
print(message)  # Output: Hello, Alice!
\`\`\`

---

Which keyword is used to define a function in Python?

<MultipleChoice correctAnswer={1}>
  <p>function</p>
  <p>def</p>
  <p>create</p>
  <p>make</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Parameters and Return Values

Excellent! Functions can accept inputs (parameters) and produce outputs (return values).

\`\`\`python
def add_numbers(x, y):
    result = x + y
    return result
\`\`\`

---

Complete this function definition that adds two numbers:

def add_numbers(x, y):
    _____ x + y

<FillInTheBlank correctAnswer={["return", "return "]} placeholder="Enter the keyword..." />`,
    type: 'interactive'
  }
] as const;