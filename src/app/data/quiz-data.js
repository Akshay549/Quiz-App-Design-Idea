export const quizTopics = [
    {
      id: 'html',
      title: 'HTML',
      icon: 'html',
      questions: [
        {
          id: 1,
          question: 'What does HTML stand for?',
          options: [
            { id: 'A', text: 'Hyper Text Markup Language' },
            { id: 'B', text: 'High Tech Modern Language' },
            { id: 'C', text: 'Hyper Transfer Markup Language' },
            { id: 'D', text: 'Home Tool Markup Language' }
          ],
          correctAnswer: 'A'
        },
        {
          id: 2,
          question: 'Which HTML element is used to define the structure of an HTML document?',
          options: [
            { id: 'A', text: '<body>' },
            { id: 'B', text: '<head>' },
            { id: 'C', text: '<html>' },
            { id: 'D', text: '<structure>' }
          ],
          correctAnswer: 'C'
        },
        {
          id: 3,
          question: 'Which tag is used to create a hyperlink?',
          options: [
            { id: 'A', text: '<link>' },
            { id: 'B', text: '<a>' },
            { id: 'C', text: '<href>' },
            { id: 'D', text: '<url>' }
          ],
          correctAnswer: 'B'
        },
        {
          id: 4,
          question: 'What is the correct HTML element for inserting a line break?',
          options: [
            { id: 'A', text: '<break>' },
            { id: 'B', text: '<lb>' },
            { id: 'C', text: '<br>' },
            { id: 'D', text: '<newline>' }
          ],
          correctAnswer: 'C'
        },
        {
          id: 5,
          question: 'Which HTML attribute is used to define inline styles?',
          options: [
            { id: 'A', text: 'class' },
            { id: 'B', text: 'styles' },
            { id: 'C', text: 'font' },
            { id: 'D', text: 'style' }
          ],
          correctAnswer: 'D'
        }
      ]
    },
    {
      id: 'css',
      title: 'CSS',
      icon: 'css',
      questions: [
        {
          id: 1,
          question: 'What does CSS stand for?',
          options: [
            { id: 'A', text: 'Computer Style Sheets' },
            { id: 'B', text: 'Creative Style Sheets' },
            { id: 'C', text: 'Cascading Style Sheets' },
            { id: 'D', text: 'Colorful Style Sheets' }
          ],
          correctAnswer: 'C'
        },
        {
          id: 2,
          question: 'Which property is used to change the background color?',
          options: [
            { id: 'A', text: 'color' },
            { id: 'B', text: 'bgcolor' },
            { id: 'C', text: 'background-color' },
            { id: 'D', text: 'background' }
          ],
          correctAnswer: 'C'
        },
        {
          id: 3,
          question: 'How do you select an element with id "demo"?',
          options: [
            { id: 'A', text: '#demo' },
            { id: 'B', text: '.demo' },
            { id: 'C', text: 'demo' },
            { id: 'D', text: '*demo' }
          ],
          correctAnswer: 'A'
        },
        {
          id: 4,
          question: 'Which property is used to change the font of an element?',
          options: [
            { id: 'A', text: 'font-style' },
            { id: 'B', text: 'font-family' },
            { id: 'C', text: 'font-weight' },
            { id: 'D', text: 'font-size' }
          ],
          correctAnswer: 'B'
        },
        {
          id: 5,
          question: 'What is the correct CSS syntax for making all the <p> elements bold?',
          options: [
            { id: 'A', text: 'p {font-weight: bold;}' },
            { id: 'B', text: 'p {text-size: bold;}' },
            { id: 'C', text: '<p style="font-size: bold;">' },
            { id: 'D', text: 'p {font: bold;}' }
          ],
          correctAnswer: 'A'
        }
      ]
    },
    {
      id: 'javascript',
      title: 'JavaScript',
      icon: 'javascript',
      questions: [
        {
          id: 1,
          question: 'Which keyword is used to declare a variable in JavaScript?',
          options: [
            { id: 'A', text: 'var' },
            { id: 'B', text: 'let' },
            { id: 'C', text: 'const' },
            { id: 'D', text: 'All of the above' }
          ],
          correctAnswer: 'D'
        },
        {
          id: 2,
          question: 'What will the following code output: console.log(typeof [])?',
          options: [
            { id: 'A', text: 'array' },
            { id: 'B', text: 'object' },
            { id: 'C', text: 'undefined' },
            { id: 'D', text: 'null' }
          ],
          correctAnswer: 'B'
        },
        {
          id: 3,
          question: 'Which method is used to add an element to the end of an array?',
          options: [
            { id: 'A', text: 'push()' },
            { id: 'B', text: 'pop()' },
            { id: 'C', text: 'append()' },
            { id: 'D', text: 'add()' }
          ],
          correctAnswer: 'A'
        },
        {
          id: 4,
          question: 'What is the correct way to write a function in JavaScript?',
          options: [
            { id: 'A', text: 'function = myFunction() {}' },
            { id: 'B', text: 'function myFunction() {}' },
            { id: 'C', text: 'function: myFunction() {}' },
            { id: 'D', text: 'myFunction(): function {}' }
          ],
          correctAnswer: 'B'
        },
        {
          id: 5,
          question: 'Which operator is used for strict equality comparison?',
          options: [
            { id: 'A', text: '==' },
            { id: 'B', text: '===' },
            { id: 'C', text: '=' },
            { id: 'D', text: '!=' }
          ],
          correctAnswer: 'B'
        }
      ]
    },
    {
      id: 'accessibility',
      title: 'Accessibility',
      icon: 'accessibility',
      questions: [
        {
          id: 1,
          question: 'What does WCAG stand for?',
          options: [
            { id: 'A', text: 'Web Content Accessibility Guidelines' },
            { id: 'B', text: 'Web Compliance Accessibility Guide' },
            { id: 'C', text: 'Web Content Accessibility Guarantee' },
            { id: 'D', text: 'Website Content Accessibility Goals' }
          ],
          correctAnswer: 'A'
        },
        {
          id: 2,
          question: 'Which attribute is used to provide alternative text for images?',
          options: [
            { id: 'A', text: 'title' },
            { id: 'B', text: 'description' },
            { id: 'C', text: 'alt' },
            { id: 'D', text: 'caption' }
          ],
          correctAnswer: 'C'
        },
        {
          id: 3,
          question: 'What is the purpose of ARIA in web accessibility?',
          options: [
            { id: 'A', text: 'To style web pages' },
            { id: 'B', text: 'To improve SEO' },
            { id: 'C', text: 'To make web content more accessible to people with disabilities' },
            { id: 'D', text: 'To speed up website loading times' }
          ],
          correctAnswer: 'C'
        },
        {
          id: 4,
          question: 'Which of these color combinations typically offers the best contrast for readability?',
          options: [
            { id: 'A', text: 'Red text on a green background' },
            { id: 'B', text: 'White text on a light gray background' },
            { id: 'C', text: 'Black text on a white background' },
            { id: 'D', text: 'Blue text on a red background' }
          ],
          correctAnswer: 'C'
        },
        {
          id: 5,
          question: 'What is the recommended minimum contrast ratio for normal text according to WCAG 2.1 Level AA?',
          options: [
            { id: 'A', text: '2:1' },
            { id: 'B', text: '3:1' },
            { id: 'C', text: '4.5:1' },
            { id: 'D', text: '7:1' }
          ],
          correctAnswer: 'C'
        }
      ]
    }
  ];