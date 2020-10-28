import Emotion from './extensions/emoji/emotion';
import useEmoji from './extensions/emoji';
import useDefaultFormats from './formats';
import useDefaultModules from './modules';
import useDefaultExtensions from './extensions';
import { setToolbarStyle } from './modules/toolbar';

const customFormatHandlers = ['divider', 'emoji'];

let Quill;
let editor;
let toolbarHandlers = {};
let prototypeInitialized = false;

function createEditor(
  editorEl,
  { toolbarIcons, toolbarOptions, options, emotions, extension }
) {
  Quill = require('quill');

  toolbarHandlers = options.modules.toolbar.handlers;
  customFormatHandlers.forEach((blotName) => {
    options.modules[blotName] = true;
  });

  if (options.theme === 'snow') {
    useEmoji(emotions);
  }

  if (!prototypeInitialized) {
    useDefaultFormats(toolbarOptions);
    useDefaultModules(toolbarIcons);
    useDefaultExtensions();

    if (extension) {
      Quill.register(extension, true);
    }

    prototypeInitialized = true;
  }

  editor = new Quill(editorEl, options);

  editor.insert = (customFormat, value) => {
    const range = editor.getSelection(true);
    if (range) {
      editor.insertEmbed(range.index, customFormat, value);
    }
  };

  setToolbarStyle();

  return editor;
}

const useEditor = () => {
  return {
    Quill,
    editor,
    toolbarHandlers
  };
};

export { createEditor, useEditor, Emotion };
