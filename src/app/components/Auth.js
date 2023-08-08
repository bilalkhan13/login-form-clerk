import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

function Auth({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <>
        <SignedIn>
          <>
            <header style={{ padding: 20 }}>
              <UserButton />
            </header>
            <Component {...pageProps} />
          </>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    </ClerkProvider>
  );
}

export default Auth;