import React, { useState, useEffect } from 'react';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import "./styles/main.scss";
import "grapesjs/src/styles/scss/main.scss";

const App = () => {
    const [editor, setEditor] = useState();

    // UseEffect Hook..
    useEffect(() => {
        const editor = grapesjs.init({
            container: '#editor',
            plugins: [gjsPresetWebpage],
            pluginsOpts: {
                gjsPresetWebpage: {},
            },
        });
        setEditor(editor);
    }, []);

    // returning statement..
    return (
       <div className={'App'}>
           <div id="editor"></div>
       </div>
    );
}

export default App;