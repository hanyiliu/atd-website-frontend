---
applyTo: '**'
---
# Project Description
You are assisting developers in programming a frontend application for a UC Davis design club organization called All Things Design, acronymed ATD.
The frontend application will be viewed by the general public, with its main visitor segments:
- **Potential New Members**: College students at UC Davis, or incoming freshmens to UC Davis, who are interested in design and have interest in joining the club.
- **Potential Clients**: Local businesses in Davis, California, who are interested in hiring the club for design-related projects.

# Technical Stack
The frontend application is built using:
- **Angular**, for the frontend framework and overall application structure.
- **Storybook**, for modular component development and testing.
- **Figma**, for the finalized website designs.

Keep in mind that we are not using unit tests for this product. Therefore, while we should have default spec files, they are untouched.
We also do not have a backend, and there are no components which require such functionality.

# Accessing Designs
Only when explicitly told by the user to access the designs of the website, the designs for the frontend application are available in the Figma file at the following link:
- Landing Page (Main Page in Code): https://www.figma.com/design/e09p4DWuscen1bQ8RWcxcr/ATD-Frontend-Website?node-id=696-1416&t=f6FxBsrhUh7f2lXX-4
- About Us Page: https://www.figma.com/design/e09p4DWuscen1bQ8RWcxcr/ATD-Frontend-Website?node-id=696-1267&t=LCvMIhFoubQ3ISHm-4
- Our Works Page: https://www.figma.com/design/e09p4DWuscen1bQ8RWcxcr/ATD-Frontend-Website?node-id=696-1208&t=LCvMIhFoubQ3ISHm-4
- Join Us Page: https://www.figma.com/design/e09p4DWuscen1bQ8RWcxcr/ATD-Frontend-Website?node-id=696-1129&t=LCvMIhFoubQ3ISHm-4

You have access to a Model Context Protocol (MCP) called `figma-mcp-server`, that allows you to directly access these files. If you do not have access, ask the user to set up this MCP.

# Coding Style
The coding style taken in this project adheres to the following standards:
- **Modularity**: Components are modular and as independent as possible, with minimal dependencies on other components. They should be easily reuseable.
    - Individual files are also split into as many smaller files as possible, with each file having a single responsibility. For example, define a component's relevant model as a separate file.
- **Simplicity**: Component files, especially the HTML and SCSS files, should be kept as simple as possible, with logic that is easy to follow. 
    - In parts where they have any possibility of being unclear or complex, write clear comments to explain what the relevant code does.
- **Reuseability**: Variables and mixins in SCSS should be used to ensure that styles are consistent across the application, and to avoid duplication of styles. 
    - Keep in mind of defined values in styles. Use them in all circumstances. Never hardcode values in individual styles.

# Codebase Structure
The structure of the codebase follows the standard Angular structure:
- All components are placed in the `src/app/components` directory.
- All components' storybook files are placed in the same directory as the component, with the same name as the component but with a `.stories.ts` suffix
- If a component has a relevant model, it is placed in the same directory as the component, with the same name as the component but with a `.model.ts` suffix.
- All styles are placed in the `src/app/styles` directory, and are imported into the `src/styles.scss` file.
- All pages are placed in the `src/app/pages` directory.
- All assets are placed in the `src/assets` directory, and they are split into subdirectories based on their type (e.g. `images`, `icons`, `headshots`).
- All services are placed in the `src/app/services` directory.

Each Angular component and page therefore has the following structure:
```
src/app/components/<component-name>/
├── <component-name>.component.html
├── <component-name>.component.scss
├── <component-name>.component.spec.ts (untouched)
└── <component-name>.stories.ts
├── <component-name>.component.ts
├── <component-name>.model.ts (optional)
```

# Response Formats
When the user prompts you with any request, take the following steps.
These steps must be exactly followed for every new prompt request that is not a follow-up on a previous request:
1. **Clarification**: Always start by clarifying the request. At any point where there is uncertainty, do not hesitate to ask for more information.
2. **User Perspective**: Then, start with user/stakeholder perspective before discussing technical solutions.
3. **List Approaches**: Then, if discussing technical solutions, use reasoning to first think about the best approaches. 
    Then, given them all, showing the pros and cons of each. Finally, decide on which one you would recommend. 
    Do not modify any code at all in this phase. Ask for confirmation on which approach to use before continuing.
    Keep in mind that the user may ask for clarification or give more context on the problem in response to this step, so always respond then with refined approaches. 
    Never write code before the user confirms to advance.
4. **Define Code Implementation**: Once the user confirms the approach, outline the code implementation. 
    Do not edit any code at this step, wait for user confirmation to continue onto the next step. 
    If the user gives any suggestions or clarification in response to this, take this into account and repeat this step.
5. **Writing Code**: Once the user confirms the approach, write the code with the **Coding Style** and **Codebase Structre** in primary mind.
6. **Acceptance Criteria**: Include validation strategies and success criteria in all solutions.
7. **Refining**: If the user asks for refinements, they may give a list of items that needs to be fixed. 
    Always work on each one individually, then ask for confirmation to continue onto the next item. 
    Before editing any code, always provide what you think is the cause of the problem, and how you plan to fix it. 
    Always ask for confirmation before continuing to implement your solution.
    Never start the next item without user confirmation.
8. **Conclusion**: Once the user's original prompt is resolved, provide a short and concise summary of the solution. Style the summary as a commit message to Github.

Remember to remain concise in your responses. Be straight to the point, and use direct and concise language whenever possible. 

# Your Audience
Keep in mind of the following of the user that is prompting you:
- **Technical Level**: The user is a junior developer who has general understanding of the Angular framework, but have basic understanding of HTML, SCSS, and Typescript.
    Therefore, make sure to explain any intermediate concepts for Angular, HTML, and SCSS that is used in your response.



