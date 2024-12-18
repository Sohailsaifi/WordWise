# WordWise, a GPT-3 enhanced document editor

WordWise is a no-frills document editor that talks with OpenAI's GPT-3 language model API.  

Reasons to use WordWise:
- **AI-assisted writing** - Writer's block?  Boilerplate?  Press a key to get AI help.
- **Dirt cheap** - Bring your own GPT-3 API key.  This is 50 to 2000x cheaper than commercial AI document editors.
- **Private and lightweight** - WordWise is a client.  Your documents are transmitted directly to GPT-3 without middle men.
- **Write in Markdown** - Formatting, headings, bullets, code, etc.
- **Portable** - Export your documents to other formats (markdown, html, docx, json)

## Try it

Press `⌘-Enter` or `Ctrl-Enter` to have GPT-3 contribute to your writing.

Note that you will need to enter your OpenAI key in `Settings` and/or run this project locally.

Completions work best when you've already written at least a few sentences.

## Demos

<img width="600" src="https://user-images.githubusercontent.com/310310/202637524-792ed7b9-ff0b-43fc-a4bc-5a0a699f92b6.gif"/>
<img width="600" src="https://user-images.githubusercontent.com/310310/202607175-0a7d9cea-ebc0-4280-b6e4-3b0353d9806b.gif"/>
<img width="600" src="https://user-images.githubusercontent.com/310310/202637536-56963069-db63-4396-9357-0deef2d8fc5a.gif"/>
<img width="600" src="https://user-images.githubusercontent.com/310310/202637594-bf480b0d-ad1e-4d13-ba7c-00bd03f59543.gif"/>
![image](https://github.com/user-attachments/assets/298b732c-ae23-40cd-a192-1af66401976a)


## Setup and installation

This project is built with vite.

- `yarn dev` - launch local development server
- `yarn build` - build for production in `dist/`
- `yarn preview` - preview production build locally
