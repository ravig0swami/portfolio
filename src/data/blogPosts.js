export const blogPosts = [
  {
    slug: "faster-react-app-modern-performance",
    title: "Building a Faster React App with Modern Performance Patterns",
    excerpt:
      "A practical guide to reducing unnecessary work in React, from route-level code splitting to deferred rendering and smaller component boundaries.",
    date: "July 24, 2026",
    category: "React Tutorial",
    accent: "bg-lime-300",
    sections: [
      {
        heading: "Start with the expensive work",
        paragraphs: [
          "Performance work is most useful when it starts with evidence. Use the browser performance panel and React DevTools Profiler to find the components that render too often or do too much work during an interaction.",
          "Once you know where the cost is, keep the fix narrow. A smaller component boundary, a less expensive calculation, or a better data-loading boundary usually beats adding optimization everywhere.",
        ],
      },
      {
        heading: "Load less code up front",
        paragraphs: [
          "Route-level code splitting keeps the first screen focused. Move rarely visited pages and heavy widgets behind dynamic imports so the browser only downloads them when a visitor needs them.",
          "The same principle applies to images and data. Give media stable dimensions, lazy-load content below the fold, and request only the fields needed for the current view.",
        ],
      },
      {
        heading: "Keep interactions responsive",
        paragraphs: [
          "Not every state update has the same urgency. Keep typing and direct feedback immediate, then defer non-urgent filtering, rendering, or navigation work so the interface stays responsive.",
          "Finally, measure again after the change. A faster feeling app is the goal, but a before-and-after measurement tells you whether the improvement is real and worth keeping.",
        ],
      },
    ],
  },
  {
    slug: "ai-native-development-full-stack-teams",
    title: "What AI-Native Development Means for Full-Stack Teams",
    excerpt:
      "AI is changing how products are researched, built, and maintained. Here are the engineering habits that keep speed from becoming technical debt.",
    date: "July 10, 2026",
    category: "Technology",
    accent: "bg-orange-300",
    sections: [
      {
        heading: "AI changes the feedback loop",
        paragraphs: [
          "AI tools are becoming part of the everyday development loop: exploring an unfamiliar codebase, drafting a test, comparing implementation options, and turning a rough idea into a working prototype.",
          "The biggest benefit is not replacing engineering judgment. It is shortening the distance between a question and a concrete experiment that the team can review.",
        ],
      },
      {
        heading: "Keep context and boundaries clear",
        paragraphs: [
          "Good results depend on good context. Give an AI tool the relevant interfaces, constraints, and existing patterns, then ask it to make a small, verifiable change rather than guessing across the whole product.",
          "Teams also need clear boundaries around secrets, customer data, and generated code. Review dependencies, licenses, security behavior, and failure cases just as you would for any other contribution.",
        ],
      },
      {
        heading: "Ship with a human feedback loop",
        paragraphs: [
          "The durable workflow is collaborative: generate possibilities quickly, test them against real requirements, and keep the parts that make the product better. Automated checks and small pull requests make this loop safer and faster.",
          "AI-native development is therefore less about a single tool and more about building a team habit of turning ambiguity into reviewed, measurable progress.",
        ],
      },
    ],
  },
];
