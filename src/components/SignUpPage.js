import React from "react";
import { Navigation } from './navigation/Navigation';
import { Footer } from './footer/Footer';
import { SignUpForm } from "./form/SignUpForm";

export function SignUpPage() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <SignUpForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}