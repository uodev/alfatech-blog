"use client";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import Quote from "@editorjs/quote";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import Checklist from "@editorjs/checklist";
import { useState } from "react";

const Editor = () => {
  const [editorData, setEditorData] = useState({});
  if (typeof window === "undefined") return null;

  const editor = new EditorJS({
    holder: "article",
    tools: {
      header: Header,
      list: List,
      embed: Embed,
      image: Image,
      quote: Quote,
      code: Code,
      linkTool: LinkTool,
      marker: Marker,
      inlineCode: InlineCode,
      simpleImage: SimpleImage,
      checklist: Checklist,
    },
    onChange: () => {
      editor.save().then((outputData) => {
        setEditorData(outputData);
      });
    },
  });

  return (
    <>
      <style>
        {`
        body {
          background-color: #eee !important;
        }
      #article {
        padding: 0rem;
      }
      h1 {
        font-size: 3rem;
        font-weight: 700;
      }
      h2 {
        font-size: 2.4rem;
        font-weight: 600;
      }
      h3 {
        font-size: 1.25rem;
        font-weight: 600;
      }
      h4 {
        font-size: 1rem;
        font-weight: 600;
      }
      h5 {
        font-size: 0.875rem;
        font-weight: 600;
      }
      h6 {
        font-size: 0.75rem;
        font-weight: 600;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
      }
      blockquote {
        font-size: 1rem;
        font-weight: 400;
      }
      pre {
        font-size: 1rem;
        font-weight: 400;
      }
      code {
        font-size: 1rem;
        font-weight: 400;
      }
      a {
        font-size: 1rem;
        font-weight: 400;
      }
      ul {
        font-size: 1rem;
        font-weight: 400;
      }
      ol {
        font-size: 1rem;
        font-weight: 400;
      }
      li {
        font-size: 1rem;
        font-weight: 400;
      }
      
      `}
      </style>
      <div className="border-l border-r rounded-lg w-full" id="article" />
    </>
  );
};

export default Editor;
