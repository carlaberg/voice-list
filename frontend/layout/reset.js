import { createGlobalStyle } from 'styled-components'

const CSSReset = createGlobalStyle`
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{border:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0}
  article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {display:block;}
  body {line-height:1}
  ol,ul{list-style:none}
  blockquote,q{quotes:none}
  blockquote:before,blockquote:after,q:before,q:after {content:none}
  table {border-collapse:collapse;border-spacing:0}
  body,input,textarea,button{text-size-adjust: 100%;-webkit-font-smoothing: antialiased;font-smoothing: antialiased;-moz-osx-font-smoothing:grayscale;}
  input,textarea,button{appearance:none;border-radius:0;color:inherit;}
  input,textarea,button,select {font-size:inherit;color:inherit;}
  html { box-sizing: border-box; }
  *, *:before, *:after { box-sizing: inherit; }
  details, summary {outline: none;}
  details summary::-webkit-details-marker {display: none;}
  button,input {background:none;border:0;padding:0;margin:0;line-height:1;color:inherit;font-size:inherit;}
  button,input[type="submit"] {cursor:pointer;}
`
export default CSSReset