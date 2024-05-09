import dynamic from "next/dynamic";
import { Fragment } from "react";

const EditorJs = dynamic(() => import("@/components/Editor"), {
  ssr: false,
  
});

const AuthorAddArticlePage = () => {
  return (
    <Fragment>
      <EditorJs />
    </Fragment>
  );
};

export default AuthorAddArticlePage;
