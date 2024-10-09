// // app/layout.tsx

// 'use client'; // Ensure this is treated as a Client Component

// import { ReactNode } from 'react';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from '@/styles/theme';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import '@/styles/globals.css';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <Header />
//           {children}
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx

// app/layout.tsx

'use client'; // Keep this to ensure it's a client component

import { ReactNode } from 'react';
// Temporarily remove ThemeProvider and CssBaseline

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
