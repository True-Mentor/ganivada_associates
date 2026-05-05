export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem('ga-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
