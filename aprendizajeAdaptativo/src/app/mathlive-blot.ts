import { MathfieldElement } from 'mathlive';
import Quill from 'quill';
const Embed = Quill.import('blots/embed');

// Custom quill Blot to handle 'mathlive' embeds.
class MathliveBlot extends Embed {
  static create(value: string) {
    const mfe = new MathfieldElement();
    mfe.applyStyle;
    mfe.setOptions({
      fontsDirectory: 'assets/mathlive/fonts',  // https://cortexjs.io/mathlive/guides/integration/.
      soundsDirectory: 'assets/mathlive/sounds',  // See angular.json.
      virtualKeyboardMode: 'onfocus',  // https://cortexjs.io/mathlive/guides/virtual-keyboards/.
    });
    setTimeout(() => mfe.setAttribute('contenteditable', 'false'));  // Makes it possible to place the cursor after the math-field.
    if (value === 'INSERT') {  // Just added.
      setTimeout(() => mfe.focus());  // Trigger the math-field (focus).
    } else if ((value as any) !== true) {  // When the math-field is empty, create() is called with value true. Ignore that.
      mfe.value = value;
    }
    mfe.addEventListener('change', event => mfe.innerText = mfe.value);  // https://cortexjs.io/mathlive/guides/interacting/.
    mfe.addEventListener('focusout',()=>{
      MathliveBlot.focus = false;
      console.log("focus",MathliveBlot.focus)
    })
    mfe.addEventListener('focusin',()=>{
      MathliveBlot.focus = true;
      console.log("focus",MathliveBlot.focus)
    })
    return mfe;
  }
  static focus:boolean = false;
  static value(mfe: MathfieldElement) {
    return mfe.value;
  }
}

MathliveBlot.blotName = 'mathlive';
MathliveBlot.tagName = 'span';
MathliveBlot.className = 'mathlive';

export default MathliveBlot

// Quill.register(MathliveBlot);  // Register the MathliveBlot in Quill.
