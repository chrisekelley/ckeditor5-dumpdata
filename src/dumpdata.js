import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import htmlIcon from '@ckeditor/ckeditor5-core/theme/icons/source.svg';

export default class Dumpdata extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add( 'showHtml', locale => {
      const view = new ButtonView( locale );

      view.set( {
        label: 'Dump html',
        icon: htmlIcon,
        tooltip: true
      } );

      view.on( 'execute', () => {
        editor.document.enqueueChanges( () => {
          let htmlText = Tangy.editor.getData();
          console.log("html output: " + htmlText)
        } );
      } );

      return view;
    } );
  }
}