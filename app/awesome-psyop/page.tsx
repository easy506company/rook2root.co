// 'use client';

// import { useEffect, useState } from 'react';
// import { marked } from 'marked';

// export default function Page() {
//   const [markdown, setMarkdown] = useState('');

//   useEffect(() => {
//     fetch('https://raw.githubusercontent.com/easy506company/awesome-psyop/refs/heads/main/README.mdx')
//       .then((res) => res.text())
//       .then((text) => setMarkdown(text));
//   }, []);

//   return (
//     <div className="prose dark:prose-invert max-w-4xl mx-auto py-12">
//       <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
//         Source code available at:{' '}
//         <a href="https://github.com/easy506company/awesome-psyop" target="_blank" rel="noopener noreferrer" className="underline">
//           https://github.com/easy506company/awesome-psyop
//         </a>
//       </p>
//       <div dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }} />
//     </div>
//   );
// }