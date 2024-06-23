const quizData = {
  CSharp: {
    "Data Types, Variables and Operators": {
      "Integer Data Types": {
        id: "1",
        metadata: {
          topic: "Integer Data Types",
          totalQuestions: 2,
          launchedBy: "Professor Eleanor Mitchell",
          launchDate: "2024-06-23",
        },
        questions: [
          {
            qid: "1",
            question:
              "How many Bytes are stored by ‘Long’ Data type in C# .net?",
            options: [
              { text: "8", isCorrect: true },
              { text: "4", isCorrect: false },
              { text: "2", isCorrect: false },
              { text: "1", isCorrect: false },
            ],
          },
          {
            qid: "2",
            question:
              "Choose “.NET class” name from which data type “UInt” is derived?",
            options: [
              { text: "System.Int16", isCorrect: false },
              { text: "System.UInt32", isCorrect: true },
              { text: "System.UInt64", isCorrect: false },
              { text: "System.UInt16", isCorrect: false },
            ],
          },
          {
            qid: "3",
            question: "Correct Declaration of Values to variables ‘a’ and ‘b’?",
            options: [
              { text: "int a = 32, b = 40.6;", isCorrect: false },
              { text: "int a = 42; b = 40;", isCorrect: false },
              { text: "int a = 32; int b = 40;", isCorrect: true },
              { text: "int a = b = 42;", isCorrect: false },
            ],
          },
          {
            qid: "4",
            question:
              "Choose“ What will be the error in the following C# code?",
            code: `Static Void Main(String[] args)
              {
               const int m = 100;
               int n = 10;
               const int k = n / 5 * 100 * n ;
               Console.WriteLine(m * k);
               Console.ReadLine();
              }`,
            options: [
              { text: "‘k’ should not be declared constant", isCorrect: false },
              {
                text: "Expression assigned to ‘k’ should be constant in nature",
                isCorrect: true,
              },
              { text: "Expression (m * k) is invalid", isCorrect: false },
              { text: "‘m ‘ is declared in invalid format", isCorrect: false },
            ],
          },
          {
            qid: "5",
            question:
              "Arrange the following data type in order of increasing magnitude sbyte, short, long, int.",
            //code: ``,
            options: [
              { text: "long < short < int < sbyte", isCorrect: false },
              {
                text: "sbyte < short < int < long",
                isCorrect: true,
              },
              { text: "short < sbyte < int < long", isCorrect: false },
              { text: "short < int < sbyte < long", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  CPlusPlus: {},
};

export default quizData;
