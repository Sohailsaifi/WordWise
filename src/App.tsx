import debounce from 'debounce';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import { useEditor } from '@tiptap/react';
import { ToastContainer } from 'react-toastify';

import styles from './App.module.css';


function App() {
  //const snap = useSnapshot(documentStore);


  return (
    <div className={styles.app}>
      <ToastContainer />
      <NavMenu editor={editor} onCreateNewDocument={handleNewDocument} saved={false} />
      <Toolbar editor={editor} />
      <div className={styles.documentContainer}>
        <Document editor={editor} />
      </div>
    </div>
  );
}

export default App;
